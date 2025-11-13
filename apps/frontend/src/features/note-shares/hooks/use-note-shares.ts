import type { CreateNoteshareDto, UpdateNoteshareDto } from '@saas-template/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { notesharesService } from '../services';

const NOTESHARE_KEY = ['noteshares'];

export function useNoteshares() {
  return useQuery({
    queryKey: NOTESHARE_KEY,
    queryFn: () => notesharesService.getAll(),
  });
}

export function useNoteshare(id: string) {
  return useQuery({
    queryKey: [...NOTESHARE_KEY, id],
    queryFn: () => notesharesService.getById(id),
    enabled: !!id,
  });
}

export function useCreateNoteshare() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateNoteshareDto) => notesharesService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTESHARE_KEY });
    },
  });
}

export function useUpdateNoteshare() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateNoteshareDto }) =>
      notesharesService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTESHARE_KEY });
    },
  });
}

export function useDeleteNoteshare() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => notesharesService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTESHARE_KEY });
    },
  });
}
