import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <input type="text" />
        <button>검색</button>
      </div>
      <h1>오늘의 뉴스</h1>
      <div className='login'>로그인</div>
    </div>
  )
}

export default Header