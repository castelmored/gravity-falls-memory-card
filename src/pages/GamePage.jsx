import campVideo from "../assets/img/camp.mp4";
import logo from "../assets/img/logo.png";
import cardBack from "../assets/img/card_background.jpg";

function GamePage({ difficultyLevel }) {
  return (
    <>
      <div className="font-potta relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 z-0 w-auto 
    min-w-full min-h-full object-cover"
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
          <div className="flex justify-center gap-10 mt-10">
            <img
              src={cardBack}
              alt="Card Back"
              className="w-44 h-auto rounded-lg shadow-lg cursor-pointer"
            />
            <img
              src={cardBack}
              alt="Card Back"
              className="w-44 h-auto rounded-lg shadow-lg cursor-pointer"
            />
            <img
              src={cardBack}
              alt="Card Back"
              className="w-44 h-auto rounded-lg shadow-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GamePage;
