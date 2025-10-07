using OEMSeller.Shared.Models;

namespace OEMProductService.Services
{
    public interface IOEMProductService
    {
        Task<PagedResponse<OEMProductDto>> GetAllAsync(int pageNumber, int pageSize, string category = null, string isoStandard = null, string searchTerm = null);
        Task<OEMProductDto> GetByIdAsync(int id);
        Task<OEMProductDto> CreateAsync(OEMProductDto productDto);
        Task<OEMProductDto> UpdateAsync(OEMProductDto productDto);
        Task<bool> DeleteAsync(int id);
        Task<List<string>> GetCategoriesAsync();
        Task<List<string>> GetISOStandardsAsync();
    }
}