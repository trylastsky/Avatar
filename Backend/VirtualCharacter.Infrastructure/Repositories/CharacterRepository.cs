using Microsoft.EntityFrameworkCore;
using VirtualCharacter.Application.Interfaces;
using VirtualCharacter.Core.Models;
using VirtualCharacter.Infrastructure.Data;

namespace VirtualCharacter.Infrastructure.Repositories;

public class CharacterRepository : ICharacterRepository
{
    private readonly ApplicationDbContext _context;

    public CharacterRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task AddAsync(Character character)
    {
        await _context.Characters.AddAsync(character);
        _context.SaveChanges();
    }

    public async Task UpdateAsync(Character character)
    {
        _context.Characters.Entry(character).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var character = await _context.Characters.FindAsync(id);
        _context.Characters.Remove(character);
        _context.SaveChanges();
    }

    public async Task<IEnumerable<Character>> GetAllAsync()
    {
        return await _context.Characters.ToListAsync();
    }

    public async Task<Character> GetByIdAsync(int id)
    {
        return await _context.Characters.FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<IEnumerable<Character>> GetAllByOwnerIdAsync(int ownerId)
    {
        return await _context.Characters.Where(p => p.OwnerId == ownerId).ToListAsync();
    }
}