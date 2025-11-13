'use client';

import { useNotes } from '@/features/notes/hooks/use-notes';

export default function DashboardPage() {
  const { data: notes, isLoading } = useNotes();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-muted-foreground mb-6">Main user interface for managing and viewing notes.</p>
      
      <div className="grid gap-4">
        {notes?.map((note: any) => (
          <div key={note.id} className="border rounded p-4">
            <pre>{JSON.stringify(note, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
