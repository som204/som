import type { Event } from '@/types';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Starlight Music Festival',
    description: 'An unforgettable weekend with the biggest names in electronic music. Featuring three stages, art installations, and gourmet food trucks.',
    date: '2025-08-15T18:00:00Z',
    location: 'Sunset Valley Fairgrounds',
    price: 89.99,
  },
  {
    id: '2',
    title: 'Tech Conference 2025',
    description: 'Join industry leaders for a deep dive into the future of AI, blockchain, and quantum computing. Network with innovators and pioneers.',
    date: '2025-09-22T09:00:00Z',
    location: 'Metropolis Convention Center',
    price: 499.0,
  },
  {
    id: '3',
    title: 'The Art of Modern Painting',
    description: 'A curated exhibition showcasing the most influential painters of the 21st century. Explore a diverse collection of styles and mediums.',
    date: '2025-10-05T11:00:00Z',
    location: 'Grand City Art Museum',
    price: 25.0,
  },
  {
    id: '4',
    title: 'Shakespeare in the Park: A Midsummer Night\'s Dream',
    description: 'Experience the magic of Shakespeare under the stars in this classic romantic comedy performed by the renowned Royal Theatre Company.',
    date: '2025-07-30T19:30:00Z',
    location: 'Central Park Meadows',
    price: 15.5,
  },
  {
    id: '5',
    title: 'Indie Film Showcase',
    description: 'Discover the next generation of filmmakers at our annual indie film festival. Screenings, Q&A sessions, and awards ceremony.',
    date: '2025-11-12T13:00:00Z',
    location: 'The Retro Cinema',
    price: 40.0,
  },
  {
    id: '6',
    title: 'Culinary World Tour',
    description: 'Taste the flavors of the world at this unique food festival. Sample dishes from over 30 countries, with live cooking demonstrations.',
    date: '2025-08-25T12:00:00Z',
    location: 'Waterfront Park',
    price: 75.0,
  },
];

export const getEvents = (): Event[] => {
  return mockEvents;
};

export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find((event) => event.id === id);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};
