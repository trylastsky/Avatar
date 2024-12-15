using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VirtualCharacter.Application.Interfaces;
using VirtualCharacter.Core.Models;
using VirtualCharacter.Infrastructure.Data;

namespace VirtualCharacter.Infrastructure.Repositories
{
    public class MessegeRepository : IMessegeRepository
    {
        private readonly ApplicationDbContext _context;
        public MessegeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateMessegeAsync(Messege messege)
        {
            await _context.Messeges.AddAsync(messege);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Messege>> GetMessegesAsync()
        {
            return await _context.Messeges.ToListAsync();
        }
    }
}
