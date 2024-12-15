using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Application.Interfaces;

public interface IClothesObjectRepository
{
    Task AddAsync(ClothesObject clothesObject);
    Task<IEnumerable<ClothesObject>> GetAllAsync();
    Task<ClothesObject> GetByIdAsync(int id);
}