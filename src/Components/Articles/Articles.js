import "./Articles.css";
import Money from "./../Images/image-currency.jpg";
import Dinner from "./../Images/image-restaurant.jpg";
import Airplane from "./../Images/image-plane.jpg";
import Confetti from "./../Images/image-confetti.jpg";

export default function Articles() {
  const articles = [
    {
      image: Money,
      alt: "currency",
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: Dinner,
      alt: "restaurant",
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      image: Airplane,
      alt: "plane",
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      image: Confetti,
      alt: "confetti",
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
    },
  ];

  return (
    <>
      <article className="article_container">
        <div className="article_title">
          <h1>Latest Articles</h1>
        </div>

        <div className="article_flex_container">
          {articles.map((articles, index) => (
            <div className="articles">
              <img src={articles.image} alt={articles.alt} />
              <div className="articles_padding">
                <h6>{articles.author}</h6>
                <a href="/"><h3>{articles.title}</h3></a>
                <p>{articles.text}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
