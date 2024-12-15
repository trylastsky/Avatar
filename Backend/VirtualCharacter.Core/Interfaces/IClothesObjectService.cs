using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Core.Interfaces;

public interface IClothesObjectService
{
    Task AddAsync(ClothesObject clothesObject);
    Task<IEnumerable<ClothesObject>> GetAllAsync();
    Task<ClothesObject> GetByIdAsync(int id);
}