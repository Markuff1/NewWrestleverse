import "./News.css";
import Header from "./Header";
import Footer from "./Footer";
import { newsArticles } from "./newsData";

function News() {
  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">
          <div className="PageBanner">
            <h1 className="PageBanner__title">NEWS</h1>
          </div>

          {newsArticles.map((article, index) => (
            <div className="NewsArticle" key={index}>
              <h1 className="NewsTitle">{article.title}</h1>
              <p className="NewsDate">{article.date}</p>

              <img
                className="NewsImage"
                src={article.image}
                alt={article.title}
              />

              <p className="NewsDescription">{article.content}</p>

              {index !== newsArticles.length - 1 && (
                <div className="PageDivider" />
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default News;