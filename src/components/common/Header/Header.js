import React from "react";
import {Link} from 'react-router-dom'
import TriButton from "../Buttons/TriButton";
import TriButtonOutline from "../Buttons/TriButtonOutline";

const Header = () => {
  return (
    <header className="sticky-top navigation nav-bg">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <Link to= "/" className="navbar-brand">
            <strong>Xperia</strong>
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navigation">
            <ul className="navbar-nav mx-auto align-items-center">
              <li className="nav-item">
                <Link to= "/" clasName="nav-link">
                  Home
                  </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Author
                </a>

                <ul className="dropdown-menu p-3" aria-labelledby="navbarDropdown">
                  <span className="arrowtop"> </span>
                  <div className="row">
                    <div className="col-lg-3 ">
                      <h6 className="text-left p-2">
                        <strong>For Writers</strong>
                      </h6>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                    </div>
                    <div className="col-lg-3 ">
                      <h6 className="text-left p-2">
                        <strong>For Authors</strong>
                      </h6>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                      <TriButtonOutline title="Collaborate" />
                    </div>
                    <div className="col-lg-3 ">
                      <img
                        src=" https://static.wixstatic.com/media/e00cc9_e18ebaabf3c541fb98d36aabcf82ae48~mv2.jpg/v1/fill/w_221,h_352,al_c,q_80,usm_0.66_1.00_0.01/e00cc9_e18ebaabf3c541fb98d36aabcf82ae48~mv2.webp"
                        className="mt-4"
                        width="75%"
                        alt="trivadi"
                      />
                    </div>
                    <div className="col-lg-3 ">
                      <p>
                        "It Was A Wonderful Experience Interacting With You And
                        Appreciate The Way You Have Planned And Executed The
                        Whole Publication Process Within The Agreed Timelines.”
                      </p>
                      <span>Subrat Saurabh</span>
                      <br />
                      <span>Author Of Kuch Woh Pal</span>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Artist
                </a>

                <ul className="dropdown-menu p-3" aria-labelledby="navbarDropdown">
                  <span className="arrowtop"> </span>
                  <div className="row">
                    <div className="col-lg-3 ">
                      <h6 className="text-left p-2">
                        <strong>For Writers</strong>
                      </h6>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                    </div>
                    <div className="col-lg-3 ">
                      <h6 className="text-left p-2">
                        <strong>For Authors</strong>
                      </h6>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link dropdown-item" href="#">
                          <strong>Get Published</strong>
                          <p className="text-truncate fs-7">
                            bhsdgfukshcjmhvnkjdxbjbvjhxbvkjdsvhbkdjv
                          </p>
                        </a>
                      </li>
                      <TriButtonOutline title="Collaborate" />
                    </div>
                    <div className="col-lg-3 ">
                      <img
                        src=" https://static.wixstatic.com/media/e00cc9_e18ebaabf3c541fb98d36aabcf82ae48~mv2.jpg/v1/fill/w_221,h_352,al_c,q_80,usm_0.66_1.00_0.01/e00cc9_e18ebaabf3c541fb98d36aabcf82ae48~mv2.webp"
                        className="mt-4"
                        width="75%"
                        alt="trivadi"
                      />
                    </div>
                    <div className="col-lg-3 ">
                      <p>
                        "It Was A Wonderful Experience Interacting With You And
                        Appreciate The Way You Have Planned And Executed The
                        Whole Publication Process Within The Agreed Timelines.”
                      </p>
                      <span>Subrat Saurabh</span>
                      <br />
                      <span>Author Of Kuch Woh Pal</span>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>

            
               
                
                <Link to="/login">
                  <TriButton title="Login" />
                </Link> 
               
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
