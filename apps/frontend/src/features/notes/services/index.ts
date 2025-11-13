import { api } from '@/lib/api';
import type { NoteResponseDto, CreateNoteDto, UpdateNoteDto } from '@saas-template/core';

export const notesService = {
  async getAll(): Promise<NoteResponseDto[]> {
    const response = await api.get('/notes');
    return response.data;
  },

  async getById(id: string): Promise<NoteResponseDto> {
    const response = await api.get(`/notes/${id}`);
    return response.data;
  },

  async create(data: CreateNoteDto): Promise<NoteResponseDto> {
    const response = await api.post('/notes', data);
    return response.data;
  },

  async update(id: string, data: UpdateNoteDto): Promise<NoteResponseDto> {
    const response = await api.put(`/notes/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/notes/${id}`);
  },
};
