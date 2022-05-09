import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import "./App.css";
import Product from "./component/Product";
import News from "./component/News";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  let [news, setNews] = useState([]);
  const getNewsData = async () => {
    let header = new Headers({
      "x-api-key": `PCzbckIiITiAFxSxcTd1XLw5Z-YyjMfG_vOLk9SkcUI`,
    });

    let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`;
    let response = await fetch(url, {
      headers: header,
    });
    let data = await response.json();
    let data2 = data.articles;
    setNews(data2);
    console.log(data2);
  };
  useEffect(() => {
    getNewsData()
  },[]);
  console.log(news);

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Product news={news} />
      {/* <News news={news} /> */}
    </div>
  );
}

export default App;
