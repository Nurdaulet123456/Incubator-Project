import "../../../../index.css";
import "./MainBlock.css";

import React from "react";
import { Link } from "react-router-dom";

const MainBlock = () => {
  return (
    <>
      <div className="main-block">
        <div className="container">
          <div class="arrow bounce">
            <li class="fa fa-arrow-down fa-2x" href="#"></li>
          </div>
          <div className="main-block__inner">
            <div className="main-block__content">
              <h3>
                Where the world builds software
              </h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
              <Link className="main-block__btn" to={"/game"}>
                Go to game
              </Link>
            </div>
            <div className="cover">
              <div className="book">
                <label for="page-1" className="book__page book__page--1">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg"
                    alt=""
                  />
                </label>

                <label for="page-2" className="book__page book__page--4">
                  <div className="page__content">
                    <div className="page__content-blockquote">
                      <Link className="main-block__btn go__game" to={"/game"}>
                        Go to game
                      </Link>
                    </div>
                  </div>
                </label>
                <input type="radio" name="page" id="page-1" />
                <input type="radio" name="page" id="page-2" />
                <label className="book__page book__page--2">
                  <div className="book__page-front">
                    <div className="page__content">
                      <h1 className="page__content-book-title">Foundation</h1>
                      <h2 className="page__content-author">Isaac Asimov</h2>

                      <p className="page__content-credits">
                        Introduction by
                        <span>Paul Krugman</span>
                      </p>

                      <p className="page__content-credits">
                        Illustrations by
                        <span>Alex Wells</span>
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBlock;
