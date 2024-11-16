import dipperRunning from "../assets/img/dipper_running.gif";

function LoadingPage() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-28">
          <img src={dipperRunning} alt="Dipper Running" />
          <p className="text-center font-potta">Loading...</p>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
