using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using VirtualCharacter.Application.Services;
using VirtualCharacter.Core.Interfaces;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.API.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class CharacterController : ControllerBase
{
    private readonly ICharacterService _characterService;
    private readonly IUserService _userService;

    public CharacterController(ICharacterService characterService, IUserService userService)
    {
        _characterService = characterService;
        _userService = userService;
    }

    [HttpGet("GetAllCharacters")]
    public async Task<ActionResult<IEnumerable<Character>>> GetAllCharacters()
    {
        var characters = await _characterService.GetAllAsync();
        return Ok(characters);
    }

    [HttpGet("GetAllCharactersByOwnerId")]
    public async Task<ActionResult> GetAllCharactersByOwnerId(int ownerId)
    {
        var characters = await _characterService.GetAllByOwnerIdAsync(ownerId);
        return Ok(characters);
    }

    [HttpGet("GetCharacterById")]
    public async Task<ActionResult<Character>> GetCharacterById(int id)
    {
        var character = await _characterService.GetByIdAsync(id);
        return Ok(character);
    }

    private async Task<User> GetUserFromCookies()
    {
        Request.Cookies.TryGetValue("OnlyGodKnowsWhatTheseCookiesAre", out string token);

        return await _userService.GetAuthenticatedUserById(token);
    }

    [Authorize]
    [HttpPost("AddCharacter")]
    public async Task<ActionResult> AddNewCharacter([FromBody] Character character)
    {
        var user = await GetUserFromCookies();

        character.OwnerId = user.Id;

        await _characterService.AddAsync(character);
        return Ok();
    }

    [Authorize]
    [HttpDelete("DeleteCharacter/{id}")]
    public async Task<ActionResult> DeleteCharacter(int id)
    {
        var user = GetUserFromCookies();

        var character = await _characterService.GetByIdAsync(id);

        if(character.OwnerId == user.Id)
        {
            await _characterService.DeleteAsync(id);
            return Ok();
        }

        return BadRequest("Недостаточно прав");
    }

    [Authorize]
    [HttpPost("UpdateCharacter")]
    public async Task<ActionResult> UpdateCharacter([FromBody] Character character)
    {
        var user = GetUserFromCookies();

        if(character.OwnerId == user.Id || character.isEditingForOtherEnabled)
        {
            await _characterService.UpdateAsync(character);
            return Ok();
        }
        return BadRequest("Недостаточно прав");
    }
}