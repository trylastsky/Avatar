using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Application.Interfaces
{
    public interface IUserRepository
    {
        Task CreateNewUserAsync(User user);
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(int id);
        Task<User> GetUserByEmailAsync(string email);
        Task<User> GetUserByPhoneAsync(string phone);
    }
}
