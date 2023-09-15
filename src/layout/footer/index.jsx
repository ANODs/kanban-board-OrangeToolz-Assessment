import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  const date = new Date();
  return (
    <footer className={classes.footerContent}>
      <div>
        <h3>© {date.getFullYear()} All Rights Reserved.</h3>
        <p>
          Developed by:{" "}
          <a
            href="https://github.com/ANODs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Timoshkin Timofey
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
