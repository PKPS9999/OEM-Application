using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace ConfigurationService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class ConfigurationController : ControllerBase
    {
        private readonly ILogger<ConfigurationController> _logger;

        public ConfigurationController(ILogger<ConfigurationController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok($"ConfigurationService is running");
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] object request)
        {
            return Ok(request);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] object request)
        {
            return Ok(request);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            return Ok();
        }

        [HttpGet("health")]
        [AllowAnonymous]
        public ActionResult Health()
        {
            return Ok("Healthy");
        }
    }
}