using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VirtualCharacter.Application.Interfaces.UtilitiesInterfaces
{
    public interface IPasswordHasher
    {
        string Generate(string password);
        bool Verify(string password, string hashedPassword);
    }
}
