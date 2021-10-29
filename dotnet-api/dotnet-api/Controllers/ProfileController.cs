using Microsoft.AspNetCore.Mvc;

namespace dotnet_api.Controllers
{
    public class ProfileController : Controller
    {
        public string GetProfileName(string name)
        {
            return $"hello world {name}";
        }
    }
}
