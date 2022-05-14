import "./MainContentBottom.css";
import OnlineBanking from "./../Images/icon-online.svg";
import SimpleBudgeting from "./../Images/icon-budgeting.svg";
import FastOnboarding from "./../Images/icon-onboarding.svg";
import OpenAPI from "./../Images/icon-api.svg";

export default function MainContentBottom() {
  const text = [
    {
      title: "Why choose Easybank?",
      text: "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
    },
  ];

  const content = [
    {
      image: OnlineBanking,
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      image: SimpleBudgeting,
      title: "Simple Budgeting",
      text: " See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      image: FastOnboarding,
      title: "Fast Onboarding",
      text: " We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      image: OpenAPI,
      title: "OpenAPI",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. ",
    },
  ];

  return (
    <>
      <main className="main_content_bottom">
        {text.map((text, index) => (
          <div className="text_bottom_container" key={index}>
            <h1> {text.title} </h1>
            <p> {text.text} </p>
          </div>
        ))}
        <div className="options_container">
        {content.map((content, index) => (
          <div className="options" key={index}>
            <img src={content.image} alt="/" />
            <h2> {content.title} </h2>
            <p> {content.text} </p>

          </div>
        ))}
        </div>
      </main>
    </>
  );
}


  
