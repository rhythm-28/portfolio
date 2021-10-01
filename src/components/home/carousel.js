import react from "react";
import "../../stylesheets/home.css";

function Carousel(props) {
  const { img1, img2, img3, id } = props;

  return (
    <div>
      <div
        id={`carouselExampleCaptions-${id}`}
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} className="d-block w-100"  width="190" height="200" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img src={img2} className="d-block w-100"  width="190" height="200" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img src={img3} className="d-block w-100"  width="190" height="200" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselExampleCaptions-${id}`}
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target={`#carouselExampleCaptions-${id}`}
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
