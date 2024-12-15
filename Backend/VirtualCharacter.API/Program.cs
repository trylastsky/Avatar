using Microsoft.EntityFrameworkCore;
using VirtualCharacter.API.Extensions;
using VirtualCharacter.Application.Interfaces;
using VirtualCharacter.Application.Interfaces.UtilitiesInterfaces;
using VirtualCharacter.Application.Services;
using VirtualCharacter.Core.Interfaces;
using VirtualCharacter.Core.Models;
using VirtualCharacter.Infrastructure.Data;
using VirtualCharacter.Infrastructure.Repositories;
using VirtualCharacter.Infrastructure.Utilities.Jwt;
using VirtualCharacter.Infrastructure.Utilities.PasswordHasher;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

builder.Services.Configure<JwtOptions>(configuration.GetSection(nameof(JwtOptions)));

builder.Services.AddApiAuthentication(configuration);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

//Repositories
builder.Services.AddScoped<ICharacterRepository, CharacterRepository>();
builder.Services.AddScoped<IClothesObjectRepository, ClothesObjectRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IMessegeRepository, MessegeRepository>();
//Services
builder.Services.AddScoped<IClothesObjectService, ClothesObjectService>();
builder.Services.AddScoped<ICharacterService, CharacterService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IMessegeService, MessegeService>();

builder.Services.AddScoped<IJwtProvider, JwtProvider>();
builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://26.170.65.19:3000");
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();
app.UseAuthorization();

app.UseCors();
app.MapControllers();

app.Run("http://0.0.0.0:5089");
