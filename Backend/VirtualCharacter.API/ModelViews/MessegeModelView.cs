namespace VirtualCharacter.API.ModelViews
{
    public class MessegeModelView
    {
        public int? RecipientId { get; set; } //Id получателя сообщения. Если Null, сообщение будет в общем чате
        public string Content { get; set; } //Контент сообщения 
    }
}
