import React, { useState } from "react";
import { Globe, Heart, Clipboard, Facebook, Twitter, Linkedin } from "lucide-react";
import "./HomePage.css";

const languages = {
  en: {
    heading: "Welcome to Universus",
    subtitle: "We endured, we can, and we will.",
    mission: "Our mission is to connect people worldwide, create a space for kindness, empathy, and growth.",
    howWeHelp: "Your support helps us build a global community of kindness and empathy.",
    donateButton: "Share Universus",
    ibanLabel: "Donate with IBAN",
    ibanValue: "RO16ROIN40214U1PTGRK8UFC",
    copySuccess: "IBAN copied!",
  },
  ro: {
    heading: "Bun venit la Universus",
    subtitle: "Am putut, pot și voi putea.",
    mission: "Misiunea noastră este să conectăm oamenii din întreaga lume, să creăm un spațiu pentru bunătate, empatie și creștere.",
    howWeHelp: "Sprijinul tău ne ajută să construim o comunitate globală a bunătății și empatiei.",
    donateButton: "Distribuie Universus",
    ibanLabel: "Donează cu IBAN",
    ibanValue: "RO16ROIN40214U1PTGRK8UFC",
    copySuccess: "IBAN copiat!",
  },
};

const HomePage = () => {
  const [language, setLanguage] = useState("en");
  const [copyMessage, setCopyMessage] = useState("");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ro" : "en"));
  };

  const handleCopyIBAN = () => {
    navigator.clipboard.writeText(languages[language].ibanValue);
    setCopyMessage(languages[language].copySuccess);
    setTimeout(() => setCopyMessage(""), 2000);
  };

  const handleShare = (platform) => {
    const url = "https://universus.app";
    const text = "Check out Universus and support our mission!";
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, "_blank");
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
        <div className="share-buttons">
          <button onClick={() => handleShare("facebook")} className="share-button facebook">
            <Facebook className="icon" /> Facebook
          </button>
          <button onClick={() => handleShare("twitter")} className="share-button twitter">
            <Twitter className="icon" /> Twitter
          </button>
          <button onClick={() => handleShare("linkedin")} className="share-button linkedin">
            <Linkedin className="icon" /> LinkedIn
          </button>
        </div>
      </div>

      <div className="how-we-help-section">
        <h3>{content.howWeHelp}</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: "70%" }}></div>
        </div>

        <div className="iban-section">
          <p>{content.ibanLabel}: <strong>{content.ibanValue}</strong></p>
          <button onClick={handleCopyIBAN} className="iban-button">
            <Clipboard className="icon" /> Copy IBAN
          </button>
          {copyMessage && <p className="copy-success">{copyMessage}</p>}
        </div>

        <div className="payment-options">
          <div className="payment-option">
            <a href="https://revolut.me/alexanjhdu" target="_blank" rel="noopener noreferrer">
              Donate with Revolut
            </a>
          </div>
          <div className="payment-option">
            <a href="https://www.buymeacoffee.com" target="_blank" rel="noopener noreferrer">
              Buy Me a Coffee
            </a>
          </div>
          <div className="payment-option">
            <a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer">
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
