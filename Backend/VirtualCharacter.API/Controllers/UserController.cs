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

            var userMv = new UserRegistrationModelView
            {
                UserName = user.UserName,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber
            };

            return Ok(userMv);
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login([FromBody] UserLoginModelView user)
        {
            var token = await _userService.Login(user.PhoneOrEmail, user.Password);

            Response.Cookies.Append("OnlyGodKnowsWhatTheseCookiesAre", token);

            return Ok();
        }

        [HttpPost("Registration")]
        public async Task<ActionResult> Registration([FromBody] UserRegistrationModelView userModelView)
        {
            await _userService.CreateNewUser(userModelView.UserName, userModelView.Email, userModelView.PhoneNumber, userModelView.Password);
            return Ok();
        }
    }
}
