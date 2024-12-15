using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Application.Interfaces.UtilitiesInterfaces
{
    public interface IJwtProvider
    {
        string GenerateToken(User user);
        int DecodingToken(string token);
    }
}
