import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
const brandData = {
  columnOne: [
    {
      name: "Agri Investor",
      id: 1,
    },
    {
      name: "Buyouts",
      id: 2,
    },
    {
      name: "Infrastructure Investor",
      id: 3,
    },
  ],
  columnTwo: [
    {
      name: "PE Hub",
      id: 1,
    },
    {
      name: "PE Hub Europe",
      id: 2,
    },
    {
      name: "PERE",
      id: 3,
    },
  ],
  columnThree: [
    {
      name: "Private Debt Investor",
      id: 1,
    },
    {
      name: "RCW",
      id: 2,
    },
    {
      name: "REC Europe",
      id: 3,
    },
  ],
  columnFour: [
    {
      name: "Responsible Investors",
      id: 1,
    },
    {
      name: "Secondaries Investors",
      id: 2,
    },
    {
      name: "VCJ",
      id: 3,
    },
  ],
};
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      console.log("window", windowDimensions);
    }
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = () => {
    if (windowDimensions.width <= 450) {
      return true;
    }
    return false
  };
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="footer">
        <div className="footer-container">
          <div className="Pei-icons">
            <div className="Pei-icon">
              <Image
                src="/pei-group1.svg"
                alt="account icon"
                width="150"
                height="70"
              />
            </div>
            <div className="social-media">
              <Image
                src="/linkedin.svg"
                alt="account icon"
                width="70"
                height="40"
              />
              <Image
                src="/twitter.svg"
                alt="account icon"
                width="70"
                height="40"
              />
            </div>
          </div>
          <div className="brand">
            <h3 className="brand-heading">Our brands</h3>
            <i
              className="fa-solid fa-chevron-down arrow-icon"
              onClick={toggleAccordion}
            ></i>
          </div>

          <div className="container">
             <div className="row resp-data">
              <div className="footer-col footer-col-1">
                {brandData.columnOne?.map((data) => {
                  return (
                    <ul key={data.id}>
                      <li>
                        <a href="#">{data.name}</a>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="footer-col footer-col-2">
                {brandData.columnTwo?.map((data) => {
                  return (
                    <ul key={data.id}>
                      <li>
                        <a href="#">{data.name}</a>
                      </li>
                    </ul>
                  );
                })}
              </div>

              <div className="footer-col footer-col-3">
                {brandData.columnThree?.map((data) => {
                  return (
                    <ul key={data.id}>
                      <li>
                        <a href="#">{data.name}</a>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="footer-col footer-col-4">
                {brandData.columnFour?.map((data) => {
                  return (
                    <ul key={data.id}>
                      <li>
                        <a href="#">{data.name}</a>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            {isOpen && (
              <div className="row resp">
                <div className="footer-col footer-col-1">
                  {brandData.columnOne?.map((data) => {
                    return (
                      <ul key={data.id}>
                        <li>
                          <a href="#">{data.name}</a>
                        </li>
                      </ul>
                    );
                  })}
                </div>
                <div className="footer-col footer-col-2">
                  {brandData.columnTwo?.map((data) => {
                    return (
                      <ul key={data.id}>
                        <li>
                          <a href="#">{data.name}</a>
                        </li>
                      </ul>
                    );
                  })}
                </div>

                <div className="footer-col footer-col-3">
                  {brandData.columnThree?.map((data) => {
                    return (
                      <ul key={data.id}>
                        <li>
                          <a href="#">{data.name}</a>
                        </li>
                      </ul>
                    );
                  })}
                </div>
                <div className="footer-col footer-col-4">
                  {brandData.columnFour?.map((data) => {
                    return (
                      <ul key={data.id}>
                        <li>
                          <a href="#">{data.name}</a>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="social-links">
              <div className="links">
                <a>Home</a>
                <a>About us</a>
                <a>Contact us</a>
                <a>Sign in FAQ</a>
                <a>Privacy notes</a>
                <a>Cookie notes</a>
                <a>Terms & Conditions</a>
              </div>
              <div className="Pei-group">
                <a>@PEI Group</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
