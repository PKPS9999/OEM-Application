using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace AuditService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class AuditController : ControllerBase
    {
        private readonly ILogger<AuditController> _logger;

        public AuditController(ILogger<AuditController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok($"AuditService is running");
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