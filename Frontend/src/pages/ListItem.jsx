import { useParams } from "react-router-dom";
import ListIcon from "../assets/List.svg";
import PenIcon from "../assets/Pen.svg";
import MicIcon from "../assets/Mic.svg";

export const ListItem = () => {
  const { listId } = useParams();
  const list = {
    id: listId,
    name: "list1",
    items: ["coffee", "milk"],
  };
  return (
    <div key={list.id} className="bg-gray-100 p-4 lg:p-12 h-screen">
      <div className="flex flex-col md:flex-row items-center space-x-4 justify-between mt-4">
        <div className="flex flex-row items-center space-x-4">
          <img
            src={ListIcon}
            alt="List icon"
            className="w-8 h-8 md:w-16 md:h-16"
          />
          <p className="text-custom-orange text-center text-2xl md:text-100 font-semibold">
            All Lists
          </p>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <img
            src={PenIcon}
            alt="Pen icon"
            className="w-12 h-12 md:w-16 md:h-16 mt-2"
          />
          <img
            src={MicIcon}
            alt="Mic icon"
            className="w-12 h-12 md:w-16 md:h-16 mt-2"
          />
        </div>
      </div>
      <div className="card shadow-2xl mt-4">
        <div className="card-body ">
          <ul className="list-disc list-inside">
            {list.items.map((item) => (
              <li key={item} className="text-black text-3xl p-2 text-left">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
