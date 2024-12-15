using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VirtualCharacter.Core.Models
{
    public class Messege
    {
        public int Id { get; set; }
        public int SenderId { get; set; } //Id отправителя сообщения
        public string Content { get; set; } //Контент сообщения 
    }
}
