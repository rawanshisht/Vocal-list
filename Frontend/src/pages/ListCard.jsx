/* eslint-disable react/prop-types */
import ListIcon from "../assets/List Teal.svg";
import TrashIcon from "../assets/Trash.svg";
import EditIcon from "../assets/Edit.svg";
import InfoIcon from "../assets/Info.svg";
import { Link } from "react-router-dom";

export const ListCard = ({ listId }) => {
  const list = {
    id: listId,
    name: "list1",
    items: ["coffee", "milk"],
  };
  return (
    <Link to={`/my-list/${listId}`}>
      <div
        key={list.id}
        className="card w-64 md:w-80 shadow-2xl p-0 mx-auto m-2"
      >
        <div className="card-body text-left">
          <div className="flex flex-row items-center space-x-4">
            <img
              src={ListIcon}
              alt="List icon"
              className="w-4 h-4 lg:w-8 lg:h-8"
            />
            <h2 className="card-title text-teal-950 text-40">{list.name}</h2>
          </div>
          <ul className="p-4 list-disc list-inside">
            {list.items.map((item) => (
              <li key={item} className="text-black text-3xl p-2">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-row card-actions justify-end space-x-4 mt-5">
            <Link>
              <img
                src={InfoIcon}
                alt="Info icon"
                className="w-4 h-4 lg:w-8 lg:h-8"
              />
            </Link>
            <Link>
              <img
                src={EditIcon}
                alt="Edit icon"
                className="w-4 h-4 lg:w-8 lg:h-8"
              />
            </Link>
            <Link>
              <img
                src={TrashIcon}
                alt="Trash icon"
                className="w-4 h-4 lg:w-8 lg:h-8"
              />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
