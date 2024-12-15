using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VirtualCharacter.Application.Interfaces;
using VirtualCharacter.Core.Interfaces;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Application.Services
{
    public class MessegeService : IMessegeService
    {
        private readonly IMessegeRepository _repository;
        public MessegeService(IMessegeRepository repository)
        {
            _repository = repository;
        }

        public async Task CreateMessege(Messege messege)
        {
            await _repository.CreateMessegeAsync(messege);
        }

        public async Task<IEnumerable<Messege>> GetMesseges()
        {
            return await _repository.GetMessegesAsync();
        }
    }
}
