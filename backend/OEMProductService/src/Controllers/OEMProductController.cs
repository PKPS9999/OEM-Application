using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using OEMSeller.Shared.Models;
using OEMProductService.Services;

namespace OEMProductService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class OEMProductController : ControllerBase
    {
        private readonly IOEMProductService _productService;
        private readonly ILogger<OEMProductController> _logger;

        public OEMProductController(IOEMProductService productService, ILogger<OEMProductController> logger)
        {
            _productService = productService;
            _logger = logger;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<PagedResponse<OEMProductDto>>> GetAll(
            [FromQuery] int pageNumber = 1, 
            [FromQuery] int pageSize = 10,
            [FromQuery] string category = null,
            [FromQuery] string isoStandard = null,
            [FromQuery] string searchTerm = null)
        {
            try
            {
                var result = await _productService.GetAllAsync(pageNumber, pageSize, category, isoStandard, searchTerm);
                return Ok(new ApiResponse<PagedResponse<OEMProductDto>>
                {
                    Success = true,
                    Data = result,
                    StatusCode = 200
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting products");
                return StatusCode(500, new ApiResponse<PagedResponse<OEMProductDto>>
                {
                    Success = false,
                    Message = "Internal server error",
                    StatusCode = 500
                });
            }
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<OEMProductDto>> GetById(int id)
        {
            try
            {
                var product = await _productService.GetByIdAsync(id);
                if (product == null)
                {
                    return NotFound(new ApiResponse<OEMProductDto>
                    {
                        Success = false,
                        Message = "Product not found",
                        StatusCode = 404
                    });
                }

                return Ok(new ApiResponse<OEMProductDto>
                {
                    Success = true,
                    Data = product,
                    StatusCode = 200
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting product {ProductId}", id);
                return StatusCode(500, new ApiResponse<OEMProductDto>
                {
                    Success = false,
                    Message = "Internal server error",
                    StatusCode = 500
                });
            }
        }

        [HttpPost]
        [Authorize(Roles = "Admin,Supplier")]
        public async Task<ActionResult<OEMProductDto>> Create([FromBody] OEMProductDto productDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(new ApiResponse<OEMProductDto>
                    {
                        Success = false,
                        Message = "Invalid model",
                        Errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList(),
                        StatusCode = 400
                    });
                }

                var createdProduct = await _productService.CreateAsync(productDto);
                return CreatedAtAction(nameof(GetById), new { id = createdProduct.Id }, 
                    new ApiResponse<OEMProductDto>
                    {
                        Success = true,
                        Data = createdProduct,
                        Message = "Product created successfully",
                        StatusCode = 201
                    });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating product");
                return StatusCode(500, new ApiResponse<OEMProductDto>
                {
                    Success = false,
                    Message = "Internal server error",
                    StatusCode = 500
                });
            }
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin,Supplier")]
        public async Task<ActionResult<OEMProductDto>> Update(int id, [FromBody] OEMProductDto productDto)
        {
            try
            {
                if (id != productDto.Id)
                {
                    return BadRequest(new ApiResponse<OEMProductDto>
                    {
                        Success = false,
                        Message = "ID mismatch",
                        StatusCode = 400
                    });
                }

                var updatedProduct = await _productService.UpdateAsync(productDto);
                if (updatedProduct == null)
                {
                    return NotFound(new ApiResponse<OEMProductDto>
                    {
                        Success = false,
                        Message = "Product not found",
                        StatusCode = 404
                    });
                }

                return Ok(new ApiResponse<OEMProductDto>
                {
                    Success = true,
                    Data = updatedProduct,
                    Message = "Product updated successfully",
                    StatusCode = 200
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating product {ProductId}", id);
                return StatusCode(500, new ApiResponse<OEMProductDto>
                {
                    Success = false,
                    Message = "Internal server error",
                    StatusCode = 500
                });
            }
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var deleted = await _productService.DeleteAsync(id);
                if (!deleted)
                {
                    return NotFound(new ApiResponse<object>
                    {
                        Success = false,
                        Message = "Product not found",
                        StatusCode = 404
                    });
                }

                return Ok(new ApiResponse<object>
                {
                    Success = true,
                    Message = "Product deleted successfully",
                    StatusCode = 200
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting product {ProductId}", id);
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "Internal server error",
                    StatusCode = 500
                });
            }
        }

        [HttpGet("categories")]
        [AllowAnonymous]
        public async Task<ActionResult<List<string>>> GetCategories()
        {
            try
            {
                var categories = await _productService.GetCategoriesAsync();
                return Ok(new ApiResponse<List<string>>
                {
                    Success = true,
                    Data = categories,
                    StatusCode = 200
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting categories");
                return StatusCode(500, new ApiResponse<List<string>>
                {
                    Success = false,
                    Message = "Internal server error",
                    StatusCode = 500
                });
            }
        }

        [HttpGet("iso-standards")]
        [AllowAnonymous]
        public async Task<ActionResult<List<string>>> GetISOStandards()
        {
            try
            {
                var standards = await _productService.GetISOStandardsAsync();
                return Ok(new ApiResponse<List<string>>
                {
                    Success = true,
                    Data = standards,
                    StatusCode = 200
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting ISO standards");
                return StatusCode(500, new ApiResponse<List<string>>
                {
                    Success = false,
                    Message = "Internal server error",
                    StatusCode = 500
                });
            }
        }
    }
}