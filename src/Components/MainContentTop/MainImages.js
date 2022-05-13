import "./MainContentTop.css";
import Bg_image from "./../Images/bg-intro-desktop.svg";
import Bg_image_top from "./../Images/image-mockups.png";

export default function MainImages() {
  const styleTop = {
    // Adding media query..
    "@media screen and (max-width: 768px)": {
      objectPosition: "0 0",
      display: "none",
    },
  };

  return (
    <>
      <main className="main_images_container">
        <div
          className="main_bg_image"
          style={{
            minWidth: "50vw",
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
            <img
              src={Bg_image_top}
              alt=""
              style={{
                height: '100%',
                backgroundPosition: "top",
                overflowX: "hidden",
                overflowY: 'auto',
                objectFit: "cover",
                zIndex: "2",
                objectPosition: "130px -120px",
                styleTop
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
