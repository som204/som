'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { XCircle } from 'lucide-react';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
        <XCircle className="w-24 h-24 text-error mb-6" />
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">An unexpected error occurred. Please try again later.</p>
        <Button onClick={() => reset()} variant="secondary">
          Try again
        </Button>
    </div>
  );
}
