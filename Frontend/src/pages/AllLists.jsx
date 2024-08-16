/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ListIcon from "../assets/List.svg";
import AddIcon from "../assets/Add.svg";
import { ListCard } from "./ListCard";
import { useNavigate } from "react-router-dom";
// import { Loading } from "../components/Loading";
import axios from "axios";
import Loading from "../components/Loading";

const AllLists = () => {
  const [myLists, setMyLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleAddList = () => {
    navigate("/add-list");
  };
  useEffect(() => {
    const fetchLists = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/todolists`
        );
        console.log(response.data.data);
        setMyLists(response.data.data); // Assuming response.data is an array of lists
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        //setError("Failed to fetch lists. Please try again later.");
      }
    };

    fetchLists();
  }, []);

  return (
    <div className="bg-gray-100 p-4 lg:p-12 h-full">
      <div className="flex flex-row items-center space-x-4 justify-between">
        <div className="flex flex-row items-center space-x-4">
          <img
            src={ListIcon}
            alt="List icon"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <p className="text-custom-orange text-center text-40 md:text-100 font-semibold">
            All Lists
          </p>
        </div>
        <button onClick={handleAddList}>
          <img
            src={AddIcon}
            alt="Add icon"
            className="w-12 h-12 md:w-16 md:h-16 mt-2 hover:scale-105"
          />
        </button>
      </div>
      {isLoading ? (
        <div className="text-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
          {myLists.map((list) => (
            <ListCard key={list._id} listId={list._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllLists;
