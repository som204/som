import Link from 'next/link';
import { Ticket } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <Ticket className="w-24 h-24 text-accent mb-6 animate-pulse" />
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-opacity-90 transition-colors">
        Go Back Home
      </Link>
    </div>
  );
}
