import "./MainContentTop.css";
import RequestButton from "../Button/RequestButton";

export default function MainText() {
  return (
    <>
      <main className="main_text_container">
        <h1>Next generation digital banking</h1>
        <br />
        <br />
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <RequestButton />
      </main>
    </>
  );
}
