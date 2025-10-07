using Microsoft.EntityFrameworkCore;
using OEMProductService.Models;

namespace OEMProductService.Data
{
    public class OEMProductDbContext : DbContext
    {
        public OEMProductDbContext(DbContextOptions<OEMProductDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasIndex(e => e.SKU).IsUnique();
                entity.HasIndex(e => e.Category);
                entity.HasIndex(e => e.ISOStandard);
                entity.HasIndex(e => e.IsActive);
            });
        }
    }
}