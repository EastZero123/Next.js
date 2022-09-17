import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
