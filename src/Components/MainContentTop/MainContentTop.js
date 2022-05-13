import * as React from "react";
import "./MainContentTop.css";
import MainImages from "./MainImages";
import MainText from "./MainText";

export default function MainContentTop() {
  return (
    <>
      <main className="main_container">
        <div className="text_content">
          <MainText />
        </div>
        <div className="image_content">
          <MainImages />
        </div>
      </main>
    </>
  );
}
