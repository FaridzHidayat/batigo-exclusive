"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {

  return (
    <footer className="bg-teal-700 dark:bg-darkmode-theme-light">
      <div className="container">
        <div className="lg:flex py-10 lg:justify-between">          
          <div className="mb-8 text-center lg:text-left text-dark dark:text-darkmode-light">
            <div style={{fontFamily:"arial", fontSize:"18px", fontWeight:"bold"}}>Our Store</div>
              <Social source={social.store} className="social-icons" />
          </div>
          <div className="mb-8 text-center lg:text-left text-dark dark:text-darkmode-light">
            <div style={{fontFamily:"arial", fontSize:"18px", fontWeight:"bold"}}>Contact Us</div>
              <Social source={social.contact} className="social-icons" />
          </div>
          <div className="mb-8 text-center lg:text-left text-dark dark:text-darkmode-light">
            <div style={{fontFamily:"arial", fontSize:"18px", fontWeight:"bold"}}>Our Social Media</div>
            <Social source={social.main} className="social-icons" />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-dark dark:text-darkmode-light">
          <p>Copyright Batigo.Exclusive&copy;2023. All reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
