export default function HobbyLinks() {
    let hobbyLinks = ["https://www.eventbrite.com/d/mo--st-louis/trivia-night/", "https://stlouiscalendar.com/events/sports"];

    return (
        <div>
            <h3>Hobbies</h3>
            <div><a href={hobbyLinks[0]}>Trivia Nights</a></div>
            <div><a href={hobbyLinks[1]}>St. Louis Sporting Events</a></div>
        </div>
    );
}