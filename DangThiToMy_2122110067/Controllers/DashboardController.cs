using Microsoft.AspNetCore.Mvc;
using DangThiToMy_2122110067.Data;
using DangThiToMy_2122110067.Model;
using DangThiToMy_2122110067.Models;
using DangThiToMy_2122110067.Service;

namespace DangThiToMy_2122110067.Controllers
{
    public class DashboardController : Controller
    {
        private readonly DashboardService _dashboardService;
        private readonly AppDbContext _context;

        public DashboardController(DashboardService dashboardService, AppDbContext context)
        {
            _dashboardService = dashboardService;
            _context = context;
        }

        public IActionResult Index()
        {
            var viewModel = new DashboardViewModel
            {
                Banners = _dashboardService.GetBanners(),
                Users = _dashboardService.GetUsers(),
                Categories = _dashboardService.GetCategories(),
                Products = _dashboardService.GetProducts()
            };

            return View(viewModel);
        }

        // Danh sách
        public IActionResult BannerList()
        {
            var banners = _context.Banners.ToList();
            return View(banners);
        }

        // Thêm Banner
        public IActionResult AddBanner()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddBanner(Banner banner)
        {
            if (ModelState.IsValid)
            {
                _context.Banners.Add(banner);
                _context.SaveChanges();
                return RedirectToAction("BannerList");
            }
            return View(banner);
        }

        // Sửa Banner
        public IActionResult EditBanner(int id)
        {
            var banner = _context.Banners.Find(id);
            return View(banner);
        }

        [HttpPost]
        public IActionResult EditBanner(Banner banner)
        {
            if (ModelState.IsValid)
            {
                _context.Banners.Update(banner);
                _context.SaveChanges();
                return RedirectToAction("BannerList");
            }
            return View(banner);
        }

        // Xóa Banner
        public IActionResult DeleteBanner(int id)
        {
            var banner = _context.Banners.Find(id);
            _context.Banners.Remove(banner);
            _context.SaveChanges();
            return RedirectToAction("BannerList");
        }
        // Category 

        // Danh sách
        public IActionResult CategoryList()
        {
            var categories = _context.Categories.ToList();
            return View(categories);
        }

        // Thêm Category
        public IActionResult AddCategory()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddCategory(Category category)
        {
            if (ModelState.IsValid)
            {
                _context.Categories.Add(category);
                _context.SaveChanges();
                return RedirectToAction("CategoryList");
            }
            return View(category);
        }

        // Sửa category
        public IActionResult EditCategory(int id)
        {
            var category = _context.Categories.Find(id);
            return View(category);
        }

        [HttpPost]
        public IActionResult EditCategory(Category category)
        {
            if (ModelState.IsValid)
            {
                _context.Categories.Update(category);
                _context.SaveChanges();
                return RedirectToAction("CategoryList");
            }
            return View(category);
        }

        // Xóa category
        public IActionResult DeleteCategory(int id)
        {
            var category = _context.Categories.Find(id);
            _context.Categories.Remove(category);
            _context.SaveChanges();
            return RedirectToAction("CategoryList");
        }
        // PRODUCT
        //
        // Danh sách
        public IActionResult ProductList()
        {
            var products = _context.Products.ToList();
            return View(products);
        }

        // Thêm Product
        public IActionResult AddProduct()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            if (ModelState.IsValid)
            {
                _context.Products.Add(product);
                _context.SaveChanges();
                return RedirectToAction("ProductList");
            }
            return View(product);
        }

        // Sửa product
        public IActionResult EditProduct(int id)
        {
            var product = _context.Products.Find(id);
            return View(product);
        }

        [HttpPost]
        public IActionResult EditProduct(Product product)
        {
            if (ModelState.IsValid)
            {
                _context.Products.Update(product);
                _context.SaveChanges();
                return RedirectToAction("ProductList");
            }
            return View(product);
        }

        // Xóa product
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            _context.Products.Remove(product);
            _context.SaveChanges();
            return RedirectToAction("ProductList");
        }

        // user
        // Danh sách
        public IActionResult UserList()
        {
            var users = _context.Users.ToList();
            return View(users);
        }

        // Thêm AddUser
        public IActionResult AddUser()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddUser(User user)
        {
            if (ModelState.IsValid)
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                return RedirectToAction("UserList");
            }
            return View(user);
        }

        // Sửa user
        public IActionResult EditUser(int id)
        {
            var user = _context.Users.Find(id);
            return View(user);
        }

        [HttpPost]
        public IActionResult EditUser(User user)
        {
            if (ModelState.IsValid)
            {
                _context.Users.Update(user);
                _context.SaveChanges();
                return RedirectToAction("UserList");
            }
            return View(user);
        }

        // Xóa user
        public IActionResult DeleteUser(int id)
        {
            var user = _context.Users.Find(id);
            _context.Users.Remove(user);
            _context.SaveChanges();
            return RedirectToAction("UserList");
        }
    }

}

