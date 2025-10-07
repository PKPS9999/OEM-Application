using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace OrderManagementService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class OrderManagementController : ControllerBase
    {
        private readonly ILogger<OrderManagementController> _logger;

        public OrderManagementController(ILogger<OrderManagementController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok($"OrderManagementService is running");
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