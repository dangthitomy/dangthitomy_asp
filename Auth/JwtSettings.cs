namespace DangThiToMy_2122110067.Auth
{
    public class JwtSettings
    {
        public string SecretKey { get; set; } = "THIS_IS_A_SUPER_SECRET_KEY_1234567890_32";
        public string Issuer { get; set; } = "DangThiToMy_2122110067App";
        public string Audience { get; set; } = "DangThiToMy_2122110067Users";
        public int ExpirationMinutes { get; set; } = 60;
    }
}
