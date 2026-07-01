import React, { useState, useEffect, useCallback, useRef } from "react";
import { ProposalStep } from "./types";
import ParallaxHero from "./components/Parallex";
import Information from "./components/Information";
// import { generateRomanticPoem } from './services/geminiService';

const App: React.FC = () => {
  return (
    <div className="font-romantic">
      {/* <HeartBackground /> */}

      <ParallaxHero />
      <Information />

      <style>{`
        .pointing {
          animation: pointing 1.2s ease-in-out infinite;
        }

        @keyframes pointing {
          0%, 100% {
            transform: translateY(0);
          }

          20% {
            transform: translateY(-8px);
          }

          40% {
            transform: translateY(0);
          }

          60% {
            transform: translateY(-8px);
          }

          80% {
            transform: translateY(0);
          }
        }


        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9); }
          70% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg) translateX(-2px); }
          50% { transform: rotate(3deg) translateX(2px); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }

        .animate-fadeIn-sec {
          animation: fadeIn 0.7s ease-out forwards;
        }
          
        .animate-popIn {
          animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

  
        .animate-wiggle {
          animation: wiggle 0.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
