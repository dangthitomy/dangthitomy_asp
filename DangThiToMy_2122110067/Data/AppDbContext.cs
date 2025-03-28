using DangThiToMy_2122110067.Model;
using Microsoft.EntityFrameworkCore;

namespace DangThiToMy_2122110067.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Product> Products { get; set; }
    }
}
