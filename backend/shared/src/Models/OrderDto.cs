using System.ComponentModel.DataAnnotations;

namespace OEMSeller.Shared.Models
{
    public class OrderDto
    {
        public int Id { get; set; }

        [Required]
        public string OrderNumber { get; set; }

        [Required]
        public int UserId { get; set; }

        public UserDto User { get; set; }

        [Required]
        public List<OrderItemDto> Items { get; set; } = new List<OrderItemDto>();

        [Required]
        [Range(0.01, double.MaxValue)]
        public decimal TotalAmount { get; set; }

        public decimal TaxAmount { get; set; }

        public decimal ShippingAmount { get; set; }

        [Required]
        public string Status { get; set; }

        public string PaymentStatus { get; set; }

        public string ShippingStatus { get; set; }

        public AddressDto ShippingAddress { get; set; }

        public AddressDto BillingAddress { get; set; }

        public DateTime OrderDate { get; set; }

        public DateTime? ShippedDate { get; set; }

        public DateTime? DeliveredDate { get; set; }

        public string Notes { get; set; }
    }

    public class OrderItemDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public OEMProductDto Product { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }
    }
}