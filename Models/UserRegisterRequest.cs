using System.ComponentModel.DataAnnotations;

namespace ASPdotNETCoreWebAPIUserSignupLoginVerified.Models
{
    public class UserRegisterRequest
    {   
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required, MinLength(6, ErrorMessage ="At least 6 characters for password")]
        public string Password { get; set; } = string.Empty;
        [Required, Compare("Password", ErrorMessage ="Confirm password does not match")]
        public string ConfirmPassword { get; set; } = string.Empty;
    }
}
