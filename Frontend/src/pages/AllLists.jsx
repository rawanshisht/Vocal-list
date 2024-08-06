/* eslint-disable no-unused-vars */
import { useState } from "react";
import ListIcon from "../assets/List.svg";
import AddIcon from "../assets/Add.svg";
import { ListCard } from "./ListCard";

const AllLists = () => {
  const [myLists, setMyLists] = useState([
    {
      id: 1,
      name: "list1",
      items: ["milk", "coffee"],
    },
    {
      id: 2,
      name: "list2",
      items: ["milk", "coffee"],
    },
    {
      id: 3,
      name: "list3",
      items: ["milk", "coffee"],
    },
    {
      id: 4,
      name: "list4",
      items: ["milk", "coffee"],
    },
  ]);
  return (
    <div className="bg-gray-100 p-4 lg:p-12">
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
        <img
          src={AddIcon}
          alt="Add icon"
          className="w-12 h-12 md:w-16 md:h-16 mt-2"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {myLists.map((list) => (
          <ListCard key={list.id} listId={list.id} />
        ))}
      </div>
    </div>
  );
};

export default AllLists;
