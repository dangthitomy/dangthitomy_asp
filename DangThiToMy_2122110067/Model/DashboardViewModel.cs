namespace DangThiToMy_2122110067.Model
{
    public class DashboardViewModel
    {
        public List<Banner> Banners { get; set; } = new();
        public List<User> Users { get; set; } = new();
        public List<Category> Categories { get; set; } = new();
        public List<Product> Products { get; set; } = new();
    }
}
