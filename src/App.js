import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import "./App.css";
import Product from "./component/Product";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  let [news, setNews] = useState([]);
  const [menu, setMenu] = useState("");
  let [keyword, setKeyword] = useState("");
  let url;
  let invalue = useRef();
  let [urlCount, setUrlCount] = useState(10);

  const menuList = [
    "business",
    "world",
    "tech",
    "sport",
    "finance",
    "politics",
    "economics",
    "entertainment",
    "beauty",
    "travel",
    "food",
    "science",
  ];
  // console.log(menu);
  let header = new Headers({
    "x-api-key": `qvR62yXRpNhqGmkYB6fV8c65nLlrYKdo-8hwop0p5Eg`,
  });
  const apiSet = async () => {
    let response = await fetch(url, {
      headers: header,
    });
    let data = await response.json();
    let newsData = data.articles;
    setNews(newsData);
    // console.log(newsData);
    // console.log(url);
  };

  const getNewsData = async () => {
    url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=${urlCount}`;
  };

  const getNewsDataNav = async () => {
    url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${menu}&page_size=${urlCount}`;
  };

  const getNewsDataKeyword = async () => {
    url = `https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=${urlCount}`;
  };

  const search = (e) => {
    if (e.key === "Enter") {
      setKeyword(e.target.value);
    }
    setKeyword(e.target.value)
    // console.log("타겟:", e.target.value, "키워드:", keyword);
    // const appClick = () => {
    //   setKeyword();
    //   // search()
    //   console.log(`id는 : ${keyword}`);
    // };
  };
  // console.log(keyword);

  useEffect(() => {
    if (menu == "" || menu == "business") {
      getNewsData();
      apiSet();
      // console.log("처음실행됨");
    } else {
      getNewsDataNav();
      apiSet();
      // console.log("네브실행됨");
    }
    // console.log(url);
  }, [menu]);

  useEffect(() => {
    if (keyword == "" || keyword == menu) {
      return;
    } else {
      getNewsDataKeyword();
      setUrlCount(10);
      apiSet();
      // console.log("키워드실행됨");
    }
    // console.log(url);

    // return ()=>{
    //   setKeyword('')
    // }
  }, [keyword]);

  // console.log(news);
  // console.log("keyword는", keyword);

  const appClick = (e) => {
    setKeyword(invalue.current.value);
    // setKeyword("");
    // search()
    // console.log(setKeyword);
    // console.log(`키워드는 : ${keyword}`);
  };

  const moveToPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getMore = async () => {
    setUrlCount((urlCount += 10));
    if (keyword !== "" && keyword !== keyword) {
      getNewsDataKeyword();
      // console.log(url);
    } else if (
      (menu == "" || menu == "business") &&
      (keyword == "" || keyword != keyword)
    ) {
      setKeyword(menu);
      getNewsData();
      // console.log(url);
    } else if (menu !== "" && keyword == "") {
      setKeyword(menu);
      setKeyword("");
      getNewsDataNav();
      // console.log(url);
    }else{
      getNewsDataNav();
      // console.log(url);
    }
    // else{
    //   getNewsDataNav();
    // }

    // url = moreUrl
    let response = await fetch(url, {
      headers: header,
    });
    let data = await response.json();
    let newsData = data.articles;
    // console.log(newsData);
    // console.log("키워드는", keyword);
    // console.log(url);

    setNews(newsData);
    // console.log(news);
    // apiSet();
  };

  return (
    <div className="app">
      <div className="header">
        <div>
          <input
            ref={invalue}
            className="searchBox"
            type="text"
            placeholder="검색어를 입력하세요"
            onKeyPress={(e) => search(e)}
          />
          <button onClick={appClick}>검색</button>
        </div>
        <h1>오늘의 뉴스</h1>
        <div className="login">로그인</div>
      </div>
      <button className="tothetop" onClick={moveToPage}>
        ↑
      </button>
      <Navbar setMenu={setMenu} menuList={menuList} />
      <Product news={news} />
      <button className="get-more-btn" onClick={getMore}>
        더보기
      </button>
    </div>
  );
}

export default App;

/* 
  useEffect 
  컴포넌트 lifeCycle은 mount(로딩이라고보면됨) -> update -> unmount 순임
  유즈이펙트는 간섭을한다? 라고보면됨
  유즈이펙트는 마운트시,로딩시 출력됨
  html이 렌더링후 동작한다 유즈이펙트는
  [](디펜던시어레이)는 실행조건넣는곳, 그안의 state가 변할때만 실행됨
  마운트시에도 실행됨
*/
