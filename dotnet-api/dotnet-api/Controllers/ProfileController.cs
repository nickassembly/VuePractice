using Microsoft.AspNetCore.Mvc;

namespace dotnet_api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProfileController : Controller
    {
        [HttpGet]
        public string GetProfiles()
        {
            return "getting all profiles";
        }

        [HttpGet("{id}")]
        public Profile GetProfile(int id)
        {
            return new Profile
            {
                Id = id,
                FirstName = "Nick",
                LastName = "foo",
                Age = 42
                
            };
        }

        public class Profile
        {
            public int Id { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public int Age { get; set; }
        }

        [HttpPost]
        public string CreateProfile(string profile)
        {
            return "";
        }

        [HttpPut]
        public string UpdateProfile(string profile)
        {
            return "";
        }

        [HttpDelete]
        public string DeleteProfile(int id)
        {
            return "";
        }


    }
}
