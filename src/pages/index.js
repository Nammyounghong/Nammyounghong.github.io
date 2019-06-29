import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>도시의 시공간을 공부합니다</h1>
    <p></p>
    <Link to="/about/">
      {" "}
      <h2>Hong Nammyoung</h2>{" "}
    </Link>
    <p>nam is starting!</p>
    <img src="images/aachener_dom.jpg" alt="" height="400" />
    <Link to="/test/"> 자기소개</Link>
  </div>
)