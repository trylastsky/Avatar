namespace VirtualCharacter.Core.Models;

public class ClothesObject
{
    public int Id { get; set; }
    public string? Title { get; set; } //Название объекта одежды
    public string? Description { get; set; } //Описание объекта одежды
    public string Path { get; set; } //Путь к объекту одежды
}