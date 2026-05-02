import React from "react";

const YtbSection = () => {
  return (
    <div className="youtubeSection" id="Youtube">
      <div className="textYtb">
        <h2>
          <i class="fa-brands fa-youtube" style={{ color: "red" }}></i> YOUTUBE
        </h2>
        <h3>Je partage la programmation web de façon simple et accessible.</h3>
        <p>
          Sur ma chaîne youtube CodeDécomplexé, je crée du contenu pour aider
          les débutants et les passionnés à mieux comprendre la programmation
          web.{" "}
        </p>
        <button className="cta neutrale">
          Visiter la chaîne YouTube <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="video1">
        <iframe
          width="350"
          height="260"
          src="https://www.youtube.com/embed/7C2raG_eqjQ?si=q6hNqGCm-9Mm7HLC"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video2">
        <iframe
          width="200"
          height="100"
          src="https://www.youtube.com/embed/QsAt5ZfikI0?si=ibcNOhzERByU2qja"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="200"
          height="100"
          src="https://www.youtube.com/embed/Rc7ZVTzzH5g?si=rhFMvlQO6OicD58M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default YtbSection;
