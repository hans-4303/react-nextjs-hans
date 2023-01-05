import Link from 'next/link'
import React from 'react'
/* index.js를 기준으로 움직이고 있으며
about.js 자체가 하나의 페이지처럼 /about 경로로 호출됐다. */

const about = () => {
  return (
    <div>
      <p>about 페이지입니다</p>
      {/* Link 컴포넌트를 통해 특정 경로로 움직일 수 있다. */}
      <Link href='/'>홈으로 이동</Link>
      {/* 경로를 직접 만들고 페이지를 직접 호출할 수 있다. */}
      <Link href='/user/profile'>프로필로 이동</Link>
    </div>
  )
}

export default about