using Microsoft.EntityFrameworkCore;
using VirtualCharacter.Application.Interfaces;
using VirtualCharacter.Core.Models;
using VirtualCharacter.Infrastructure.Data;

namespace VirtualCharacter.Infrastructure.Repositories;

public class ClothesObjectRepository : IClothesObjectRepository
{
    private readonly ApplicationDbContext _context;

    public ClothesObjectRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task AddAsync(ClothesObject clothesObject)
    {
        await _context.ClothesObjects.AddAsync(clothesObject);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<ClothesObject>> GetAllAsync()
    {
        return await _context.ClothesObjects.ToListAsync();
    }

    public async Task<ClothesObject> GetByIdAsync(int id)
    {
        return await _context.ClothesObjects.FirstOrDefaultAsync(c => c.Id == id);
    }
}