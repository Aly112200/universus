import React, { useState } from "react";
import { Globe, Heart } from "lucide-react";
import "./HomePage.css";

const languages = {
  en: {
    heading: "Welcome to Universus",
    subtitle: "We endured, we can, and we will.",
    mission: "Our mission is to connect people worldwide, create a space for kindness, empathy, and growth.",
    howWeHelp: "Your support helps us build a global community of kindness and empathy.",
    donateButton: "Support Universus",
  },
  ro: {
    heading: "Bun venit la Universus",
    subtitle: "Am putut, pot și voi putea.",
    mission: "Misiunea noastră este să conectăm oamenii din întreaga lume, să creăm un spațiu pentru bunătate, empatie și creștere.",
    howWeHelp: "Sprijinul tău ne ajută să construim o comunitate globală a bunătății și empatiei.",
    donateButton: "Sprijină Universus",
  },
};

const HomePage = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ro" : "en"));
  };

  const content = languages[language];

  return (
    <div className="homepage-container">
      <header className="header">
        <button onClick={toggleLanguage} className="language-button">
          <Globe className="icon" /> {language === "en" ? "Română" : "English"}
        </button>
      </header>

      <div className="hero-section">
        <h1 className="main-title">{content.heading}</h1>
        <h2 className="hero-title">{content.subtitle}</h2>
        <p className="hero-text">{content.mission}</p>
        <button className="donate-button">
          <Heart className="icon" /> {content.donateButton}
        </button>
      </div>

      <div className="how-we-help-section">
        <h3>{content.howWeHelp}</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: "70%" }}></div>
        </div>
        <div className="payment-options">
          <div className="payment-option">
            <a href="https://revolut.me/alexanjhdu" target="_blank" rel="noopener noreferrer" className="revolut">
              Donate with Revolut
            </a>
          </div>
          <div className="payment-option">
            <a href="#" target="_blank" rel="noopener noreferrer" className="RO16ROIN40214U1PTGRK8UFC">
              Donate with IBAN
            </a>
          </div>
          <div className="payment-option">
            <a href="https://www.buymeacoffee.com" target="_blank" rel="noopener noreferrer" className="buymeacoffee">
              Buy Me a Coffee
            </a>
          </div>
          <div className="payment-option">
            <a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer" className="gofundme">
              GoFundMe
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>Visit us at <a href="https://universus.app" target="_blank" rel="noopener noreferrer">universus.app</a></p>
        <p>&copy; 2025 Universus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
