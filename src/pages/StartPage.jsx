import logo from "../assets/img/logo.png";
import campVideo from "../assets/img/camp.mp4";

function StartPage({ setDifficultyLevel, playClick }) {
  return (
    <>
      <div
        className="relative flex items-center 
        justify-center h-screen overflow-hidden"
      >
        <video
          className="absolute z-10 w-auto 
        min-w-full min-h-full max-w-none"
          autoPlay
          muted
          loop
        >
          <source src={campVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute z-20" style={{ top: "22%" }}>
          <img src={logo} />
          <h1 className="font-potta text-primary text-6xl text-center m-10 font-bold font-outline-2 ">
            Memory game
          </h1>
          <div className=" flex flex-row justify-center items-center gap-5">
            <button
              onClick={() =>
                //first number - amount of games
                //second number - amount of cards
                {
                  setDifficultyLevel([5, 3]);
                  playClick();
                }
              }
              className="bg-grayish hover:scale-110 text-black font-potta font-bold py-2 px-4 rounded"
            >
              Easy
            </button>
            <button
              onClick={() =>
                //first number - amount of games
                //second number - amount of cards
                {
                  setDifficultyLevel([7, 4]);
                  playClick();
                }
              }
              className="bg-grayish hover:scale-110 text-black font-potta font-bold py-2 px-4 rounded"
            >
              Medium
            </button>
            <button
              onClick={() =>
                //first number - amount of games
                //second number - amount of cards
                {
                  setDifficultyLevel([10, 5]);
                  playClick();
                }
              }
              className="bg-grayish hover:scale-110 text-black font-potta font-bold py-2 px-4 rounded"
            >
              Hard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartPage;
