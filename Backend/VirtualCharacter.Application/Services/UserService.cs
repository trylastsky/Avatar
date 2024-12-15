using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VirtualCharacter.Application.Interfaces;
using VirtualCharacter.Application.Interfaces.UtilitiesInterfaces;
using VirtualCharacter.Core.Interfaces;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher _passwordHasher;
        private readonly IJwtProvider _jwtProvider;
        public UserService(
            IJwtProvider jwtProvider,
            IUserRepository userRepository,
            IPasswordHasher passwordHasher)
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
            _jwtProvider = jwtProvider;
        }

        public async Task CreateNewUser(string userName, string email, string phoneNumber, string password)
        {
            var hashedPassword = _passwordHasher.Generate(password);

            var newUser = new User
            {
                UserName = userName,
                Email = email,
                PhoneNumber = phoneNumber,
                PasswordHash = hashedPassword
            };

            await _userRepository.CreateNewUserAsync(newUser);
        }

        public async Task<string> Login(string emailOrPhone, string password)
        {
            var user = await _userRepository.GetUserByPhoneAsync(emailOrPhone);
            if (user == null)
            {
                user = await _userRepository.GetUserByEmailAsync(emailOrPhone);
            }

            var result = _passwordHasher.Verify(password, user.PasswordHash);

            var token = _jwtProvider.GenerateToken(user);

            return token;
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _userRepository.GetAllUsersAsync();
        }

        public async Task<User> GetAuthenticatedUserById(string id)
        {
            var userId = _jwtProvider.DecodingToken(id);

            return await _userRepository.GetUserByIdAsync(userId);
        }
    }
}
