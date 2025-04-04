using Microsoft.AspNetCore.Mvc;
using DangThiToMy_2122110067.Model;
using DangThiToMy_2122110067.Service;

namespace DangThiToMy_2122110067.Controllers
{
    public class DashboardController : Controller
    {
        private readonly DashboardService _dashboardService;

        public DashboardController(DashboardService dashboardService)
        {
            _dashboardService = dashboardService;
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
        [HttpGet]
        public IActionResult CreateCategory()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CreateCategory(Category category)
        {
            category.CreatedAt = DateTime.Now;
            category.UpdatedAt = DateTime.Now;

            _dashboardService.AddCategory(category);
            return RedirectToAction("Index");
        }



    }
}
