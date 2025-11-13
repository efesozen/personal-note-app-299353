import { api } from '@/lib/api';
import type { NoteshareResponseDto, CreateNoteshareDto, UpdateNoteshareDto } from '@saas-template/core';

export const notesharesService = {
  async getAll(): Promise<NoteshareResponseDto[]> {
    const response = await api.get('/noteshares');
    return response.data;
  },

  async getById(id: string): Promise<NoteshareResponseDto> {
    const response = await api.get(`/noteshares/${id}`);
    return response.data;
  },

  async create(data: CreateNoteshareDto): Promise<NoteshareResponseDto> {
    const response = await api.post('/noteshares', data);
    return response.data;
  },

  async update(id: string, data: UpdateNoteshareDto): Promise<NoteshareResponseDto> {
    const response = await api.put(`/noteshares/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/noteshares/${id}`);
  },
};
