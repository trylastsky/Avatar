using Microsoft.EntityFrameworkCore;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Infrastructure.Data;

public class ApplicationDbContext : DbContext
{

    public DbSet<Character> Characters { get; set; }
    public DbSet<ClothesObject> ClothesObjects { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Messege> Messeges { get; set; }
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }
}