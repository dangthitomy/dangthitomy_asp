using DangThiToMy_2122110067.Data;
using DangThiToMy_2122110067.Model;


namespace DangThiToMy_2122110067.Service
{
    public class DashboardService
    {
        private readonly AppDbContext _context;

        public DashboardService(AppDbContext context)
        {
            _context = context;
        }

        public List<Banner> GetBanners()
        {
            return _context.Banners.ToList();
        }

        public List<User> GetUsers()
        {
            return _context.Users.ToList();
        }

        public List<Category> GetCategories()
        {
            return _context.Categories.ToList();
        }

        public List<Product> GetProducts()
        {
            return _context.Products.ToList();
        }
    }

}