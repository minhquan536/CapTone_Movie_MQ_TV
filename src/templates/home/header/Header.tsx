import css from "./header.module.css";
import clsx from "classnames/bind";
const cx = clsx.bind(css);
import React from "react";
import { Link } from "react-router-dom";
import * as S from "./index"

function Header() {
  return (
    <header className={cx("header")}>
      <S.StyledLink to="/"><h1>Movie</h1></S.StyledLink>

      <div className={cx("left")}>
        <div>
          <S.StyledLink to={"/"}>Home</S.StyledLink>
        </div>
        <div>
          <S.StyledLink to={"/"}>Detail</S.StyledLink>
        </div>
        <div>
          <S.StyledLink to={"/"}>Book</S.StyledLink>
        </div>
        <div>
          <S.StyledLink to={"/"}>Infrom</S.StyledLink>
        </div>
        <div>
          <button className={cx("button")}>
            <S.StyledLink to={"/"}>Login</S.StyledLink>
          </button>
        </div>
        <div>
          <button className={cx("button")}>
            <S.StyledLink to={"/"}>Register</S.StyledLink>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
