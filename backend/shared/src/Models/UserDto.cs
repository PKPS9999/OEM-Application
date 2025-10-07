using System.ComponentModel.DataAnnotations;

namespace OEMSeller.Shared.Models
{
    public class UserDto
    {
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(100)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(100)]
        public string LastName { get; set; }

        [Phone]
        public string PhoneNumber { get; set; }

        [Required]
        public string Role { get; set; }

        public string Company { get; set; }

        public AddressDto Address { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime LastLoginAt { get; set; }

        public bool IsActive { get; set; } = true;
    }

    public class AddressDto
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
    }
}