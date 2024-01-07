import React, { useState} from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useLocation} from "react-router-dom";
import { AiFillDashboard} from 'react-icons/ai';
import { FaShoppingCart} from 'react-icons/fa';
import { BsPerson} from 'react-icons/bs';
import { AiOutlineBars} from 'react-icons/ai';



const Header = () => {
  const [show, setShow] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split("/");



  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to="/">PRODUCT ADMIN</Link>
        </h1>
        <nav>
          <ul>
            <li
              className={
                splitLocation[1] === "dashboard" ? `${styles.active}` : ""
              }
            >
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/dashboard"
                    : "/"
                }
              >
                <div className="icon" ><AiFillDashboard/></div >
                <br />
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "products" ? `${styles.active}` : ""
              }
            >
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/products"
                    : "/"
                }
              >
                <div className="icon" ><FaShoppingCart/></div >
                <br />
                <span>Products</span>
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "account" ? `${styles.active}` : ""
              }
            >
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/account"
                    : "/"
                }
              >
               <div className="icon" ><BsPerson/></div >
                <br />
                <span>Account</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.logout}>
          {JSON.parse(localStorage.getItem("loginStatus")) === true && (
            <Link
              to="/"
              onClick={() => localStorage.setItem("loginStatus", false)}
            >
              Admin, <b className="log">Logout</b>
            </Link>
          )}
        </div>
      </header>
      <div className={styles.headermob}>
        <header>
          <h1>
            <Link to="/dashboard">PRODUCT ADMIN</Link>
          </h1>
          
          <div className="icon" onClick={() => setShow(!show)} ><AiOutlineBars/></div >
        </header>
        {show && (
          <>
            <nav>
              <ul>
                <li
                  className={
                    splitLocation[1] === "dashboard" ? `${styles.active}` : ""
                  }
                >
                  <Link
                    to={
                      JSON.parse(localStorage.getItem("loginStatus")) === true
                        ? "/dashboard"
                        : "/"
                    }
                  >
                    <br />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "products" ? `${styles.active}` : ""
                  }
                >
                  <Link
                    to={
                      JSON.parse(localStorage.getItem("loginStatus")) === true
                        ? "/products"
                        : "/"
                    }
                  >
                    <br />
                    <span>Products</span>
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "account" ? `${styles.active}` : ""
                  }
                >
                  <Link
                    to={
                      JSON.parse(localStorage.getItem("loginStatus")) === true
                        ? "/account"
                        : "/"
                    }
                  >
                    <br />
                    <span>Account</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default Header;