import { api } from './api';
import { OEMProductDto, PagedResponse, ApiResponse } from '../types';

interface GetProductsParams {
  pageNumber?: number;
  pageSize?: number;
  category?: string;
  isoStandard?: string;
  searchTerm?: string;
}

export const productService = {
  async getAll(params: GetProductsParams): Promise<ApiResponse<PagedResponse<OEMProductDto>>> {
    const response = await api.get('/api/oemproduct', { params });
    return response.data;
  },

  async getById(id: number): Promise<ApiResponse<OEMProductDto>> {
    const response = await api.get(`/api/oemproduct/${id}`);
    return response.data;
  },

  async create(product: Omit<OEMProductDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<OEMProductDto>> {
    const response = await api.post('/api/oemproduct', product);
    return response.data;
  },

  async update(product: OEMProductDto): Promise<ApiResponse<OEMProductDto>> {
    const response = await api.put(`/api/oemproduct/${product.id}`, product);
    return response.data;
  },

  async delete(id: number): Promise<ApiResponse<void>> {
    const response = await api.delete(`/api/oemproduct/${id}`);
    return response.data;
  },

  async getCategories(): Promise<ApiResponse<string[]>> {
    const response = await api.get('/api/oemproduct/categories');
    return response.data;
  },

  async getIsoStandards(): Promise<ApiResponse<string[]>> {
    const response = await api.get('/api/oemproduct/iso-standards');
    return response.data;
  }
};