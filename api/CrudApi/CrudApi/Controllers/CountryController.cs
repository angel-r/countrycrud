using System.Threading.Tasks;
using CrudApi.Code;
using CrudApi.Model;
using CrudApi.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace CrudApi.Controllers
{
    [Route("api/[controller]")]
    public class CountryController : Controller
    {
        private readonly ICountryRepository _countryRepo;

        public CountryController(IOptions<ConnectionStringList> connectionStrings)
        {
            _countryRepo = new CountryRepository(connectionStrings);
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _countryRepo.List();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _countryRepo.Detail(id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        /// <summary>
        /// Guardar un pais
        /// </summary>
        /// <param name="country"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Country country)
        {
            var result = await _countryRepo.Add(country.Name);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] Country country)
        {
            var result = await _countryRepo.Edit(country);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _countryRepo.Delete(id);
            return Ok(result);
        }
    }
}
