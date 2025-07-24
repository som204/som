'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { getEventById } from '@/utils';
import type { Event } from '@/types';
import Card from '@/components/ui/Card';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Link from 'next/link';
import { Ticket, User } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const [bookedTickets] = useLocalStorage<string[]>('bookedTickets', []);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/auth/login');
    }
  }, [user, authLoading, router]);

  if (authLoading || !user) {
    return <div className="flex justify-center items-center h-64"><LoadingSpinner size="lg" /></div>;
  }

  const bookedEvents = bookedTickets.map(id => getEventById(id)).filter(Boolean) as Event[];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome, {user.email.split('@')[0]}!</h1>
        <p className="text-gray-600 dark:text-gray-400">Here are your booked tickets.</p>
      </div>

      <Card className="p-6 flex items-center space-x-4 bg-secondary/5 dark:bg-secondary/20">
        <User className="w-12 h-12 text-accent" />
        <div>
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
        </div>
      </Card>

      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Ticket className="w-7 h-7 mr-3 text-accent" />
          My Tickets
        </h2>
        {bookedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookedEvents.map(event => (
              <Card key={event.id} className="p-4 flex space-x-4 hover:shadow-lg transition-shadow">
                <img src={`https://picsum.photos/150/150?random=${event.id}`} alt={event.title} crossOrigin="anonymous" className="w-24 h-24 rounded-md object-cover" />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(event.date).toLocaleDateString()}</p>
                  </div>
                  <Link href={`/events/${event.id}`} className="text-accent font-semibold hover:underline text-sm">View Details</Link>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-8 text-center text-gray-500 dark:text-gray-400">
            <p>You haven't booked any tickets yet.</p>
            <Link href="/events" className="text-accent font-semibold hover:underline mt-2 inline-block">Explore Events</Link>
          </Card>
        )}
      </section>
    </div>
  );
}
