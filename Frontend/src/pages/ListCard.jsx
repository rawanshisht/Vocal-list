/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ListIcon from "../assets/List Teal.svg";
import TrashIcon from "../assets/Trash.svg";
import EditIcon from "../assets/Edit.svg";
import InfoIcon from "../assets/Info.svg";
import EyeIcon from "../assets/Eye.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ListModal from "../components/ListModal";
import DeleteList from "../components/DeleteList";
export const ListCard = ({ listId }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();
  const list = {
    id: listId,
    name: "list1",
    items: ["coffee", "milk"],
  };
  const handleNavigateListItem = (path) => {
    navigate(path);
  };
  return (
    <div key={list.id} className="card w-64 md:w-80 shadow-2xl p-0 mx-auto m-2">
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
          <button
            onClick={() => setShowModal(true)}
            className="focus:outline-none"
          >
            <img
              src={EyeIcon}
              alt="Eye icon"
              className="w-4 h-4 lg:w-8 lg:h-8"
            />
          </button>
          <button onClick={() => handleNavigateListItem(`/my-list/${listId}`)}>
            <img
              src={InfoIcon}
              alt="Info icon"
              className="w-4 h-4 lg:w-8 lg:h-8"
            />
          </button>
          <img
            src={EditIcon}
            alt="Edit icon"
            className="w-4 h-4 lg:w-8 lg:h-8"
          />
          <button
            onClick={() => setShowDeleteModal(true)}
            className="focus:outline-none"
          >
            <img
              src={TrashIcon}
              alt="Trash icon"
              className="w-4 h-4 lg:w-8 lg:h-8"
            />
          </button>
        </div>
      </div>
      {showModal && (
        <ListModal listId={listId} onClose={() => setShowModal(false)} />
      )}
      {showDeleteModal && (
        <DeleteList listId={listId} onClose={() => setShowDeleteModal(false)} />
      )}
    </div>
  );
};
