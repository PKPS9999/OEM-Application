using System.ComponentModel.DataAnnotations;

namespace OEMSeller.Shared.Models
{
    public class OEMProductDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string SKU { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }

        [Required]
        [Range(0.01, double.MaxValue)]
        public decimal Price { get; set; }

        [Required]
        public string Category { get; set; }

        [Required]
        public string ISOStandard { get; set; }

        public string Manufacturer { get; set; }

        public int StockQuantity { get; set; }

        public List<string> Images { get; set; } = new List<string>();

        public List<string> Specifications { get; set; } = new List<string>();

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public bool IsActive { get; set; } = true;
    }
}