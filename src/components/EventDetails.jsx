import { Link } from "react-router-dom";
import { useGetEventQuery } from "../eventSlice";
import { useParams } from "react-router-dom";

function EventDetails() {

    const { id } = useParams();
    const { data: event, isLoading, error } = useGetEventQuery(id);

    if (isLoading) {
        return <p>Loading recipe...</p>;
    }
    
    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <article>
            <h1>Event: {event.name}: {id}</h1>
            {event ? (
                <>
                    <h3>Location: {event.location}</h3>
                    <time>{event.date}</time>
                    <p>{event.description}</p>
                </>
            ) : (
                <p>There is no selected recipe.</p>
            )}
        </article>
    ); 
    
}
export default EventDetails;