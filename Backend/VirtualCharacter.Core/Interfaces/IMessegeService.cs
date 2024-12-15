using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Core.Interfaces
{
    public interface IMessegeService
    {
        Task<IEnumerable<Messege>> GetMesseges();
        Task CreateMessege(Messege messege);
    }
}
