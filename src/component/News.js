import React from 'react'

const News = ({news}) => {
  console.log(news);
  console.log(news[0]);
  return (
    <div>
      <div className="row item">
    <div className="col-lg-4">
      <img className="item-img-size" src={news[1].media} />
    </div>
    <div className="col-lg-8">
      <a href="${item.link}" target="_blank">
        <h2></h2>
      </a>
      <p>
      </p>
      <div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default News