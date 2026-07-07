import TripCard from "./TripCard";

function TripList(props) {
  const trips = props.trips;

  if (trips.length === 0) {
    return <p className="trip-list__empty">ไม่พบที่เที่ยว</p>;
  }

  return (
    <div className="trip-list">
      {trips.map(function (trip) {
        return (
          <TripCard
            key={trip.eid}
            trip={trip}
            onTagClick={props.onTagClick}
          />
        );
      })}
    </div>
  );
}

export default TripList;
