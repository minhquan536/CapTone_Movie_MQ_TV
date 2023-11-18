import css from "./header.module.css";
import clsx from "classnames/bind";
const cx = clsx.bind(css);
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={cx("header")}>
      <img src="" alt="" />

      <div className={cx("left")}>
        <div>
          <Link to={"/"} />
          Home
        </div>
        <div>
          <Link to={"/"} />
          Info
        </div>
        <div>
          <Link to={"/"} />
          InPost
        </div>
        <div>
          <Link to={"/"} />
          App
        </div>
        <div>
          <button className={cx("button")}>
            <Link to={"/"} />
            LoGin
          </button>
        </div>
        <div>
          <button className={cx("button")}>
            <Link to={"/"} />
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
