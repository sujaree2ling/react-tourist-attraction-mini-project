import "./TripCard.css";

function TripCard(props) {
  const trip = props.trip;
  const title = trip.title;
  const description = trip.description;
  const photos = trip.photos;
  const tags = trip.tags;
  const url = trip.url;
  const eid = trip.eid;

  const mainPhoto = photos[0];
  const photo2 = photos[1];
  const photo3 = photos[2];
  const photo4 = photos[3];

  let previewText = description;
  let showReadMore = false;

  if (description.length > 100) {
    previewText = description.slice(0, 100);
    showReadMore = true;
  }

  function handleReadMoreClick() {
    props.onReadMore(eid);
  }

  function handleTagClick(tag) {
    props.onTagClick(tag);
  }

  return (
    <article className="trip-card">
      <img className="trip-card__image" src={mainPhoto} alt={title} />

      <div className="trip-card__content">
        <h2 className="trip-card__title">{title}</h2>

        <p className="trip-card__description">
          {previewText}
          {showReadMore && "..."}
          {showReadMore && (
            <button
              type="button"
              className="trip-card__read-more"
              onClick={handleReadMoreClick}
            >
              อ่านต่อ
            </button>
          )}
        </p>

        <p className="trip-card__tags">
          <span className="trip-card__tags-label">หมวด</span>
          {tags.map(function (tag, index) {
            const isLast = index === tags.length - 1;
            return (
              <span key={tag}>
                {index > 0 && (isLast ? " และ " : " ")}
                <button
                  type="button"
                  className="trip-card__tag"
                  onClick={function () {
                    handleTagClick(tag);
                  }}
                >
                  {tag}
                </button>
              </span>
            );
          })}
        </p>

        <div className="trip-card__footer">
          <div className="trip-card__thumbnails">
            <img className="trip-card__thumbnail" src={photo2} alt="" />
            <img className="trip-card__thumbnail" src={photo3} alt="" />
            <img className="trip-card__thumbnail" src={photo4} alt="" />
          </div>

          <a
            className="trip-card__copy-link"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            🔗
          </a>
        </div>
      </div>
    </article>
  );
}

export default TripCard;
