namespace VirtualCharacter.Core.Models;

public class Character
{
    public int Id { get; set; }
    public int OwnerId { get; set; } //Id пользователя-владельца персонажа
    public string? Name { get; set; } //Имя персонажа
    public int BodyId { get; set; } = 1; //Id верхнкй одежды
    public int PantsId { get; set; } = 1; //Id штанов
    public int BootsId { get; set; } = 1; //Id обуви
    public int HairId { get; set; } = 1; //Id прически 
    public bool isEditingForOtherEnabled { get; set; } = false; //Разрешено ли дургим пользователям редактировать персонажа
}