using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using VirtualCharacter.API.ModelViews;
using VirtualCharacter.Core.Interfaces;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessegeController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMessegeService _messegeService;
        public MessegeController(IUserService userService, IMessegeService messegeService)
        {
            _userService = userService;
            _messegeService = messegeService;
        }

        [Authorize]
        [HttpPost("SendMessege")]
        public async Task<ActionResult> SendMessege(MessegeModelView messegeModelView)
        {
            Request.Cookies.TryGetValue("OnlyGodKnowsWhatTheseCookiesAre", out string token);

            var user = await _userService.GetAuthenticatedUserById(token);

            var newMessege = new Messege()
            {
                SenderId = user.Id,
                Content = messegeModelView.Content,
            };

            await _messegeService.CreateMessege(newMessege);
            return Ok();
        }

        [HttpGet("GetAllMesseges")]
        public async Task<ActionResult> GetAllCommonMesseges()
        {
            var messeges = await _messegeService.GetMesseges();
            return Ok(messeges);
        }
    }
}
