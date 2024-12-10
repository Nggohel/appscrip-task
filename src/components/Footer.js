"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import arrow from "../../public/arrow-right.svg";
import us from "../../public/US.svg";
import Gpay from "../../public/Gpay.svg";
import mastercard from "../../public/mastercard.svg";
import opay from "../../public/opay.svg";
import paypal from "../../public/paypal.svg";
import Amax from "../../public/Amax.svg";
import applepay from "../../public/applepay.svg";
import linkedin from "../../public/linkedin.svg";
import insta from "../../public/Insta_icon.svg";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState({});
  const paymentIcons = [Gpay, mastercard, opay, paypal, Amax, applepay];
  const socialMediaIcons = [insta, linkedin];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 599); // Mobile breakpoint
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (section) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const contentSections = [
    {
      title: "metta muse",
      content: (
        <div className={styles["links-container"]}>
          <a href="#">About Us</a>
          <a href="#">Stories</a>
          <a href="#">Artisans</a>
          <a href="#">Boutiques</a>
          <a href="#">Contact Us</a>
          <a href="#">EU Compliances Docs</a>
        </div>
      ),
    },
    {
      title: "QUICK LINKS",
      content: (
        <div className={styles["links-container"]}>
          <a href="#">Orders & Shipping</a>
          <a href="#">Join/Login as a Seller</a>
          <a href="#">Payment & Pricing</a>
          <a href="#">Return & Refunds</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      ),
    },
    {
      title: "FOLLOW US",
      content: (
        <>
          <div className={styles["social-media-icons"]}>
            {socialMediaIcons.map((icon, index) => (
              <div key={index} className={styles["icon-container"]}>
                <Image src={icon} alt="social media icon" />
              </div>
            ))}
          </div>
          <div className={styles["paymnet-gateway-container"]}>
            <h2>metta muse ACCEPTS</h2>
            <div className={styles["cards-container"]}>
              {paymentIcons.map((icon, index) => (
                <div key={index} className={styles["icon-container"]}>
                  <Image src={icon} alt="payment icon" />
                </div>
              ))}
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["section"]}>
        <div className={styles["form-section"]}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p className={styles["label"]}>
            Sign up for updates from metta muse.
          </p>

          <form
            className={styles["input-form"]}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className={styles["input-wrapper"]}>
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className={styles["email-input"]}
              ></input>
            </div>
            <button className={styles["subscribe-btn"]}>SUBSCRIBE</button>
          </form>
        </div>
        <div className={styles["about-section"]}>
          <h2>CONTACT US</h2>

          <p>+44 221 133 5360</p>
          <p>customercate@mettamuse.com</p>

          <h2>CURRENCY</h2>

          <div className={styles["currency-contaienr"]}>
            <Image
              src={us}
              className={styles["country-icon"]}
              alt="country flag"
            />
            <div className={styles["dot-separater"]}></div>
            <p className={styles["country-name"]}>USD</p>
          </div>
          <p className={styles["description"]}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className={styles["divider-hr"]}></div>

      <div
        className={`${
          isMobile ? styles["accordion-section"] : styles["bottom-section"]
        }`}
      >
        {contentSections.map((section, index) =>
          isMobile ? (
            <div key={index} className={styles["accordion-wrapper"]}>
              <div
                className={styles["accordion-header"]}
                onClick={() => toggleAccordion(section.title)}
              >
                <h2 className={styles["accordion-title"]}>{section.title}</h2>
                <Image
                  src={arrow}
                  alt="toggle arrow"
                  className={`${styles["accordion-arrow"]} ${
                    accordionOpen[section.title] ? styles["open"] : ""
                  }`}
                />
              </div>
              {accordionOpen[section.title] && (
                <div className={styles["accordion-content"]}>
                  {section.content}
                </div>
              )}
            </div>
          ) : (
            <div key={index} className={styles["section-2-card"]}>
              <h2>{section.title}</h2>
              {section.content}
            </div>
          )
        )}
      </div>

      <div className={styles["copyright-container"]}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
}
