import EventCard from "@/components/event/EventCard";
import { getEvents } from "@/utils";

export default function EventsListPage() {
  const events = getEvents();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">All Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
