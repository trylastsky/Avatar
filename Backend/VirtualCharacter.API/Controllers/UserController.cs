using Microsoft.AspNetCore.Mvc;
using VirtualCharacter.API.ModelViews;
using VirtualCharacter.Core.Interfaces;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("GetAuthenticatedUser")]
        public async Task<ActionResult> GetAuthenticatedUser()
        {
            Request.Cookies.TryGetValue("OnlyGodKnowsWhatTheseCookiesAre", out string token);

            var user = await _userService.GetAuthenticatedUserById(token);

            var userMv = new UserModelView
            {
                UserName = user.UserName,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber
            };

            return Ok(userMv);
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login(string emailOrPhone, string password)
        {
            var token = await _userService.Login(emailOrPhone, password);

            Response.Cookies.Append("OnlyGodKnowsWhatTheseCookiesAre", token);

            return Ok();
        }

        [HttpPost("Registration")]
        public async Task<ActionResult> Registration(string userName, string email, string phone, string password)
        {
            await _userService.CreateNewUser(userName, email, phone, password);
            return Ok();
        }
    }
}
