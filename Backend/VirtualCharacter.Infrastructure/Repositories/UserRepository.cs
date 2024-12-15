using VirtualCharacter.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VirtualCharacter.Application.Interfaces;
using VirtualCharacter.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace VirtualCharacter.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateNewUserAsync(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(p => p.Email == email);
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<User> GetUserByPhoneAsync(string phone)
        {
            return await _context.Users.FirstOrDefaultAsync(p => p.PhoneNumber == phone);
        }
    }
}
