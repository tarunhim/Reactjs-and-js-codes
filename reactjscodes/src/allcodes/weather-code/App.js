import { useEffect, useState } from "react";
// import "./styles.css";
import WeatherInfo from "./WeatherInfo";
import Loader from "./Loader";
console.clear();

const NEWS_API_KEY = "18ee6049541eca36b7f60ad776d3974a";
const NEWS_URL = "https://gnews.io/api/v4/search";

const NewsInfo = () => {
  const [language, setLanguage] = useState("en");
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // IIFE
    (async () => {
      setLoading(true);
      const finalUrl = `${NEWS_URL}?q=india&token=${NEWS_API_KEY}&lang=${language}`;
      const response = await fetch(finalUrl);
      const data = await response.json();
      setNewsArticles(data.articles);
      setLoading(false);
    })();
  }, [language]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <button onClick={() => setLanguage("en")}> English </button>
      <button onClick={() => setLanguage("hi")}> Hindi </button>

      {newsArticles.map((newsItem) => (
        <p> {newsItem.title} </p>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <WeatherInfo />
      <hr />
      <NewsInfo />
    </div>
  );
}
