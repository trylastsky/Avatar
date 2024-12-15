using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Core.Interfaces;

public interface ICharacterService
{
    Task AddAsync(Character character);
    Task UpdateAsync(Character character);
    Task DeleteAsync(int id);
    Task<IEnumerable<Character>> GetAllAsync();
    Task<Character> GetByIdAsync(int id);
    Task<IEnumerable<Character>> GetAllByOwnerIdAsync(int ownerId);
}