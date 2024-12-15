using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using VirtualCharacter.Infrastructure.Utilities.Jwt;

namespace VirtualCharacter.API.Extensions
{
    public static class ApiExtensions
    {
        public static void AddApiAuthentication(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            var jwtOptions = configuration.GetSection(nameof(JwtOptions)).Get<JwtOptions>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
                {
                    options.TokenValidationParameters = new()
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOptions!.SecretKey))
                    };

                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = context =>
                        {
                            context.Token = context.Request.Cookies["OnlyGodKnowsWhatTheseCookiesAre"];

                            return Task.CompletedTask;
                        }
                    };
                });

            services.AddAuthorization();
        }
    }
}
