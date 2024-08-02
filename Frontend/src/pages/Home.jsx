/* eslint-disable no-unused-vars */
import MicIcon from "../assets/Mic.svg";
import PenIcon from "../assets/Pen.svg";
import AddIcon from "../assets/Add.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-gray-100 p-4 lg:p-12">
      <p className="text-custom-orange text-center text-100 font-semibold">
        Get started with Vocal List
      </p>
      <p className="text-black text-center text-40 text-balance">
        Choose your preferred method to add tasks to your to-do list. Whether
        you prefer speaking your tasks aloud or typing them out, Vocal List
        makes it easy and convenient.
      </p>
      <div className="grid grid-rows-4 mt-8 justify-items-center items-center">
        <div className="flex items-center text-center">
          <Link className="flex-none">
            <img src={MicIcon} alt="Mic icon" className="w-28 h-28" />
          </Link>
          <p className="text-black text-3xl grow ml-4 pr-4">
            Simply press the record button and speak your tasks. Vocal List will
            automatically convert your voice into actionable items.
          </p>
        </div>
        <div className="flex items-center text-center">
          <Link className="flex-none">
            <img src={PenIcon} alt="Pen icon" className="w-28 h-28" />
          </Link>
          <p className="text-black text-3xl grow ml-4 ">
            Prefer typing? Click the type button to manually enter your tasks
            and manage your to-do list effortlessly.
          </p>
        </div>
        <div>
          <p className="text-custom-orange text-center text-100 font-semibold">
            OR
          </p>
        </div>
        <div className="flex items-center text-center">
          <Link className="flex-none ">
            <img src={AddIcon} alt="Add icon" className="w-28 h-28 mt-4" />
          </Link>
          <p className="text-black text-3xl w-screen text-left grow ml-4 ">
            Add a new list, then decide later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
