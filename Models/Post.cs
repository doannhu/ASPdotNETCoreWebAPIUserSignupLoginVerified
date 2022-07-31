using System.ComponentModel.DataAnnotations;

namespace ASPdotNETCoreWebAPIUserSignupLoginVerified.Models
{
    public class Post
    {
        [Key]
        public int IssueId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Project { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string IssueType { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string ReportDate { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Summary { get; set; } = string.Empty;

        [Required]
        [MaxLength(100000)]
        public string Description { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string ReportedBy { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string AssignedTo { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Status { get; set; } = string.Empty;
    }
}
