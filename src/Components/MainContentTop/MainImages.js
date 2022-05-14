import "./MainContentTop.css";
import Bg_image from "./../Images/bg-intro-desktop.svg";
import Bg_image_top from "./../Images/image-mockups.png";

export default function MainImages() {
  

  return (
    <>
      <main className="main_images_container">
        <div
          className="main_bg_image"
          style={{
            minWidth: "50em",
            height: "100vh",
            backgroundImage: `url(${Bg_image})`,
            backgroundPosition: "bottom left",
            overflow: "hidden",
            objectFit: "cover",
            // objectPosition: "0 -400px",
            zIndex: "-1",
          }}
        >
          <div className="main_bg_image_top">
            {/* <img
              id="top_image"
              src={Bg_image_top}
              alt="background_image"
              style={{
                width: "50em",
                height: "100%",
                backgroundPosition: "top",
                // overflowX: "hidden",
                overflowY: "visible",
                objectFit: "cover",
                zIndex: "1",
                objectPosition: "130px -120px",
                // styleTop,
                
              }}
            /> */}
          </div>
        </div>
      </main>
    </>
  );
}
