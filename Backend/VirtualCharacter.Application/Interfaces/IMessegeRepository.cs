﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VirtualCharacter.Core.Models;

namespace VirtualCharacter.Application.Interfaces
{
    public interface IMessegeRepository
    {
        Task<IEnumerable<Messege>> GetMessegesAsync();
        Task CreateMessegeAsync(Messege messege);
    }
}
