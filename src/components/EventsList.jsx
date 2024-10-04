import { Link } from "react-router-dom";
import { useGetEventsQuery } from "../eventSlice";

function EventsList() {


    const { data: events = [], isLoading, error } = useGetEventsQuery();

    if (isLoading) {
        return <p>Loading events...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    if (!events.length) {
        return <p>There are no events.</p>;
    }


    return(
        <ul>
            {events.map((event) => (
                <li key={event.id}>
                    <Link to={`/events/${event.id}`}>
                    {event.name} #{event.id}
                    </Link>
                    <p>{event.description}</p>
                </li>
            ))}
        </ul>
    );
}
export default EventsList;