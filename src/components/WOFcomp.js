import React from "react";
import Marquee from "react-fast-marquee";

const WOFcomp = () => {
  return (
    <div className="wallOfFameContainer" id="walloffame">
      <h2
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="200"
      >
        Ils parlent de moi
      </h2>
      <h3>
        Des retours qui comptent <i class="fa-solid fa-heart-pulse"></i>
      </h3>
      <p
        style={{ marginBottom: "1rem" }}
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="200"
      >
        Des retours authentiques qui reflètent mon engagement et mon travail.
      </p>
      {/* <figure></figure> */}
      {/* <img src="./Images/wal_of_fame.png" alt="" /> */}
      <Marquee play pauseOnClick className="carrouselImg">
        <img src="./Images/Commentaires/comment_wok.png" alt="" />
        <br />

        <img src="./Images/Commentaires/comment_work1.png" alt="" />
        <br />
        <img src="./Images/Commentaires/comment_work2.png" alt="" />
        <br />
        <img
          src="./Images/Commentaires/podia_comment2.png"
          alt=""
          className="ytbComment"
        />
        <br />
        <img src="./Images/Commentaires/comment_work3.png" alt="" />
        <br />

        <img src="./Images/Commentaires/podia_comment1.png" alt="" />
      </Marquee>
    </div>
  );
};

export default WOFcomp;
