import type { CreateNoteDto, UpdateNoteDto } from '@saas-template/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { notesService } from '../services';

const NOTE_KEY = ['notes'];

export function useNotes() {
  return useQuery({
    queryKey: NOTE_KEY,
    queryFn: () => notesService.getAll(),
  });
}

export function useNote(id: string) {
  return useQuery({
    queryKey: [...NOTE_KEY, id],
    queryFn: () => notesService.getById(id),
    enabled: !!id,
  });
}

export function useCreateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateNoteDto) => notesService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTE_KEY });
    },
  });
}

export function useUpdateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateNoteDto }) =>
      notesService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTE_KEY });
    },
  });
}

export function useDeleteNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => notesService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTE_KEY });
    },
  });
}
