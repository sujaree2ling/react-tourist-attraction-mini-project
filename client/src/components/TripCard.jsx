import { useState } from "react";
import "./TripCard.css";

function TripCard(props) {
  const trip = props.trip;
  const title = trip.title;
  const description = trip.description;
  const photos = trip.photos;
  const tags = trip.tags;
  const url = trip.url;
  const [isCopied, setIsCopied] = useState(false);

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

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {},
        function () {}
      );
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  function handleTagClick(tag) {
    props.onTagClick(tag);
  }

  function handleCopyClick() {
    copyToClipboard(url);
    setIsCopied(true);
    setTimeout(function () {
      setIsCopied(false);
    }, 1500);
  }

  return (
    <article className="trip-card">
      <img className="trip-card__image" src={mainPhoto} alt={title} />

      <div className="trip-card__content">
        <h2 className="trip-card__title">
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>

        <p className="trip-card__description">
          {previewText}
          {showReadMore && "..."}
          {showReadMore && (
            <a
              className="trip-card__read-more"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              อ่านต่อ
            </a>
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

          <div className="trip-card__copy">
            {isCopied && (
              <span className="trip-card__copied" role="status">
                This link has been copied to your clipboard.
              </span>
            )}
            <button
              className="trip-card__copy-link"
              type="button"
              onClick={handleCopyClick}
              aria-label="คัดลอกลิงก์"
            >
              <svg
                className="trip-card__copy-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TripCard;
