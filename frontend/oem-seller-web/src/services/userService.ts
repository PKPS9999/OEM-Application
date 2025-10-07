import { api } from './api';
import { UserDto, ApiResponse } from '../types';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: UserDto;
  expiresAt: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  company?: string;
}

export const userService = {
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const response = await api.post('/api/user/login', credentials);
    return response.data;
  },

  async register(userData: RegisterRequest): Promise<ApiResponse<UserDto>> {
    const response = await api.post('/api/user/register', userData);
    return response.data;
  },

  async getProfile(id: number): Promise<ApiResponse<UserDto>> {
    const response = await api.get(`/api/user/${id}`);
    return response.data;
  },

  async updateProfile(user: UserDto): Promise<ApiResponse<UserDto>> {
    const response = await api.put(`/api/user/${user.id}`, user);
    return response.data;
  }
};