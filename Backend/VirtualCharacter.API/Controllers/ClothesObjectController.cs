using Microsoft.AspNetCore.Mvc;
using VirtualCharacter.Core.Interfaces;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClothesObjectController : ControllerBase
{
    private readonly IClothesObjectService _clothesObjectService;

    public ClothesObjectController(IClothesObjectService clothesObjectService)
    {
        _clothesObjectService = clothesObjectService;
    }

    [HttpGet("GetAllClothesObjects")]
    public async Task<ActionResult<IEnumerable<ClothesObject>>> GetAllClothesObjects()
    {
        var clothesObjects = await _clothesObjectService.GetAllAsync();
        return Ok(clothesObjects);
    }

    [HttpGet("GetClothesObjectById")]
    public async Task<ActionResult<ClothesObject>> GetClothesObjectById(int id)
    {
        var clothesObject = await _clothesObjectService.GetByIdAsync(id);
        return Ok(clothesObject);
    }

    [HttpPost("AddClothesObject")]
    public async Task<ActionResult> AddClothesObject([FromBody] ClothesObject clothesObject)
    {
        await _clothesObjectService.AddAsync(clothesObject);
        return Ok();
    }
}