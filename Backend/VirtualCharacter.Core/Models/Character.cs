namespace VirtualCharacter.Core.Models;

public class Character
{
    public int Id { get; set; }
    public int OwnerId { get; set; } //Id пользователя-владельца персонажа
    public string? Name { get; set; } //Имя персонажа
    public int BodyId { get; set; } //Id верхнкй одежды
    public int PantsId { get; set; } //Id штанов
    public int BootsId { get; set; } //Id обуви
    public int SkinId { get; set; } //Id кожи
    public bool isEditingForOtherEnabled { get; set; } //Разрешено ли дургим пользователям редактировать персонажа
}