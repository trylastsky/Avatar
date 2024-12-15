using VirtualCharacter.Application.Interfaces;
using VirtualCharacter.Core.Interfaces;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Application.Services;

public class ClothesObjectService : IClothesObjectService
{
    private readonly IClothesObjectRepository _clothesObjectRepository;

    public ClothesObjectService(IClothesObjectRepository clothesObjectRepository)
    {
        _clothesObjectRepository = clothesObjectRepository;
    }
    
    public async Task AddAsync(ClothesObject clothesObject)
    {
        await _clothesObjectRepository.AddAsync(clothesObject);
    }

    public async Task<IEnumerable<ClothesObject>> GetAllAsync()
    {
        return await _clothesObjectRepository.GetAllAsync();
    }

    public async Task<ClothesObject> GetByIdAsync(int id)
    {
        return await _clothesObjectRepository.GetByIdAsync(id);
    }
}