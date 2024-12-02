import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Copyright from "./copyright";

export default function About() {

    const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "light");
  };



    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
      }, [theme]);
    
    return (
       <div>
        <NavBar toggleTheme={toggleTheme} />
        <div class="About  ">
            <h2 className="text-2xl font-bold mt-1 py-1 px-3">
                Sentement Analysis
            </h2>
            <p class="About">Sentiment analysis, also known as opinion mining, is a powerful tool that involves the extraction and interpretation of
                 emotions, opinions, and attitudes from textual data. In the context of COVID-19, this analysis helps us comprehend the 
                 collective emotional response of individuals to the ongoing pandemic, whether it be fear, hope, resilience, or 
                 frustration.</p>
                 <h1 className="text-2xl font-bold mt-1 py-1 px-3">
          Sentiment Analysis for Nepali Text
        </h1>
        
        <p class="About">
          In this project, we used MURIL (Multilingual Unsupervised
          Representations for Indian Languages), a multilingual BERT model, to
          perform sentiment analysis on Nepali text. We fine-tuned it on a
          labeled dataset of Nepali text to optimize it for the specific task of
          sentiment analysis.
        </p>
        </div>
        <Copyright></Copyright>
       </div>
    )
}