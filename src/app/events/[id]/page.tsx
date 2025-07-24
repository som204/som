'use client';

import { useState } from 'react';
import { getEventById } from "@/utils";
import type { Event } from '@/types';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import NotFound from '@/app/not-found';

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event: Event | undefined = getEventById(params.id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookedTickets, setBookedTickets] = useLocalStorage<string[]>('bookedTickets', []);

  if (!event) {
    return <NotFound />;
  }

  const isBooked = bookedTickets.includes(event.id);

  const handleBooking = () => {
    if (!isBooked) {
      setBookedTickets([...bookedTickets, event.id]);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-secondary/5 dark:bg-secondary/20 rounded-lg shadow-lg overflow-hidden">
        <img 
          src={`https://picsum.photos/1200/600?random=${event.id}`} 
          alt={event.title} 
          crossOrigin="anonymous"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{event.title}</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>{event.location}</span>
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-8">{event.description}</p>
          <div className="flex items-center justify-between bg-primary/5 dark:bg-primary/20 p-4 rounded-md">
            <p className="text-2xl font-bold text-accent">${event.price.toFixed(2)}</p>
            <Button onClick={handleBooking} disabled={isBooked} size="lg">
              <Ticket className="w-5 h-5 mr-2" />
              {isBooked ? 'Already Booked' : 'Book Now'}
            </Button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
          <p className="mb-6">You have successfully booked a ticket for <strong>{event.title}</strong>.</p>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
}
