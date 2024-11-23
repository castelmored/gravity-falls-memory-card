import campVideo from "../assets/img/camp.mp4";
import logo from "../assets/img/logo.png";
import cardBack from "../assets/img/card_background.jpg";
import bill from "../assets/img/characters/bill.webp";
import dipper from "../assets/img/characters/dipper.webp";
import ford from "../assets/img/characters/ford.png";
import gideon from "../assets/img/characters/gideon.webp";
import mable from "../assets/img/characters/mabel.webp";
import robbie from "../assets/img/characters/robbie.webp";
import soos from "../assets/img/characters/soos.webp";
import stan from "../assets/img/characters/stan.webp";
import waddles from "../assets/img/characters/waddles.webp";
import wendy from "../assets/img/characters/wendy.webp";
import { useState, useEffect } from "react";

function GamePage({ difficultyLevel }) {
  const cardData = [
    { id: 1, name: "Bill", image: bill },
    { id: 2, name: "Dipper", image: dipper },
    { id: 3, name: "Ford", image: ford },
    { id: 4, name: "Gideon", image: gideon },
    { id: 5, name: "Mable", image: mable },
    { id: 6, name: "Robbie", image: robbie },
    { id: 7, name: "Soos", image: soos },
    { id: 8, name: "Stan", image: stan },
    { id: 9, name: "Waddles", image: waddles },
    { id: 10, name: "Wendy", image: wendy },
  ];

  // const cardsToDisplay = cardData.slice(0, difficultyLevel[1]);

  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);

    setTimeout(() => {
      shuffle(charactersToPlayWith);
    }, 800);

    setTimeout(() => {
      setFlipped(false);
    }, 1300);
  };

  const [charactersToPlayWith, setCharactersToPlayWith] = useState([]);

  useEffect(() => {
    getCharactersToPlayWith();

    return () => {
      setCharactersToPlayWith([]);
    };
  }, []);

  const getCharactersToPlayWith = () => {
    let randomCharacters = [];

    while (randomCharacters.length < difficultyLevel[0]) {
      const randNum = Math.floor(Math.random() * 10);

      if (!randomCharacters.includes(cardData[randNum])) {
        randomCharacters.push(cardData[randNum]);
      }
    }

    setCharactersToPlayWith(randomCharacters);
    shuffle(randomCharacters);
    console.log(randomCharacters);
  };

  const [charactersToDisplay, setCharactersToDisplay] = useState([]);

  const shuffle = (array) => {
    let shuffledCharacters = [];
    let clicked = 0;

    while (shuffledCharacters.length < difficultyLevel[1]) {
      const randNum = Math.floor(Math.random() * array.length);
      const character = array[randNum];
      if (
        !shuffledCharacters.includes(character) &&
        (clicked < difficultyLevel[1] - 1 || !character.clicked)
      ) {
        shuffledCharacters.push(character);
        clicked += +character.clicked;
      }
      setCharactersToDisplay(shuffledCharacters);
    }
    console.log(shuffledCharacters);
  };

  return (
    <>
      <div className="font-potta relative h-screen overflow-hidden ">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 z-0 w-auto 
    min-w-full min-h-full object-cover "
          autoPlay
          muted
          loop
        >
          <source src={campVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main Content */}
        <div className="absolute top-0 left-0 z-10 w-full h-full">
          {/* Header */}
          <div className=" max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">
            <img src={logo} alt="Game Logo" className="h-auto w-44" />
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Score: <span className="font-normal">0</span>
              </p>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Best Score: <span className="font-normal">0</span>
              </p>
            </div>
          </div>

          {/* Cards Section */}
          <div
            onClick={handleFlip}
            className="cursor-pointer flex justify-center gap-10 mt-10 "
          >
            {charactersToDisplay.map((card) => (
              <div
                key={card.id}
                className={`relative w-48 h-auto flip-card ${
                  isFlipped ? "flipped" : ""
                }`}
              >
                <div className="flip-card-inner">
                  <img
                    src={cardBack}
                    alt="Card Back"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <img
                    src={card.image}
                    alt={card.name}
                    className={`absolute top-4 left-4 w-40 h-56 rounded-lg shadow-lg cursor-pointer object-cover ${
                      isFlipped ? "hidden" : ""
                    }`}
                  />
                  <p
                    className={`text-white absolute inset-x-0 bottom-0 text-center ${
                      isFlipped ? "hidden" : ""
                    }`}
                  >
                    {card.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <p className="text-white text-lg">
              {0}/{difficultyLevel[0]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GamePage;
