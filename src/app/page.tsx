import EventCard from "@/components/event/EventCard";
import { getEvents } from "@/utils";
import { Search } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const featuredEvents = getEvents().slice(0, 3);

  return (
    <div className="space-y-16">
      <section 
        className="relative rounded-lg overflow-hidden text-white py-24 sm:py-32 bg-cover bg-center min-h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=1')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center p-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your Next Event Awaits</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">Discover concerts, sports, theater, and more. Book your tickets with ease.</p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input 
                type="search" 
                placeholder="Search for events..." 
                className="w-full p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 focus:ring-accent focus:border-accent placeholder-gray-300"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300" />
            </div>
          </div>
        </div>
      </section>

      <section className="animate-slide-in">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Events</h2>
          <Link href="/events" className="text-accent hover:underline font-semibold">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
