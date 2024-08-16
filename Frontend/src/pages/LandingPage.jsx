import logo from "../../public/logo.svg";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-teal-950 grid grid-cols-1 md:grid-cols-2 p-4 lg:p-12 justify-items-center ">
        <div className="order-2 md:order-1">
          <p className="text-130 text-gray-100 font-bold m-0 text-left ">
            Vocal List
          </p>
          <p className="text-40 font-semibold text-custom-orange m-0 text-left">
            Your To-Do List, Now Voice-Activated
          </p>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <img
            src={logo}
            className="object-cover h-60 w-auto sm:h-80 md:h-96 lg:h-full lg:w-auto"
          />
        </div>
      </div>
      <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:p-12 justify-items-center h-screen">
        <div className="flex items-center justify-center h-5/6">
          <img
            src={logo}
            className="object-cover h-60 w-auto sm:h-80 md:h-96 lg:h-full lg:w-auto "
          />
        </div>
        <div className="flex items-center justify-center h-5/6">
          <p className="text-lg sm:text-xl md:text-3xl lg:text-40 text-black  m-0 text-left">
            Experience effortless productivity with Vocallist. Our app
            transforms your voice commands into actionable tasks, allowing you
            to manage your schedule, create tasks, and set reminders—all
            hands-free. With a sleek and user-friendly interface, Vocallist
            keeps you organized and on track.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
