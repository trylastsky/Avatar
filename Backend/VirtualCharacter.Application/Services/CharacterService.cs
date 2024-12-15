using VirtualCharacter.Application.Interfaces;
using VirtualCharacter.Core.Interfaces;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Application.Services;

public class CharacterService : ICharacterService
{
    private readonly ICharacterRepository _repository;

    public CharacterService(ICharacterRepository repository)
    {
        _repository = repository;
    }
    
    public async Task AddAsync(Character character)
    {
        await _repository.AddAsync(character);
    }

    public async Task UpdateAsync(Character character)
    {
        await _repository.UpdateAsync(character);
    }

    public async Task DeleteAsync(int id)
    {
        await _repository.DeleteAsync(id);
    }

    public async Task<IEnumerable<Character>> GetAllAsync()
    {
        return await _repository.GetAllAsync();
    }

    public async Task<Character> GetByIdAsync(int id)
    {
        return await _repository.GetByIdAsync(id);
    }

    public async Task<IEnumerable<Character>> GetAllByOwnerIdAsync(int ownerId)
    {
        return await _repository.GetAllByOwnerIdAsync(ownerId);
    }
}