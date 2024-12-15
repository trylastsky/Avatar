namespace VirtualCharacter.API.ModelViews
{
    public class UserLoginModelView
    {
        public int Id { get; set; }
        public string PhoneOrEmail { get; set; }
        public string Password { get; set; }
    }
}
