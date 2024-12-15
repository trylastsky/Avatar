using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Core.Interfaces
{
    public interface IUserService
    {
        Task CreateNewUser(string userName, string email, string phoneNumber, string password);
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetAuthenticatedUserById(string id);
        Task<string> Login(string emailOrPhone, string password);
    }
}
