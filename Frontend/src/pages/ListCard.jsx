/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ListIcon from "../assets/List Teal.svg";
import TrashIcon from "../assets/Trash.svg";
import EditIcon from "../assets/Edit.svg";
import InfoIcon from "../assets/Info.svg";
import EyeIcon from "../assets/Eye.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ListModal from "../components/ListModal";
import DeleteList from "../components/DeleteList";
import axios from "axios";
import Loading from "../components/Loading";
export const ListCard = ({ listId }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [myList, setMyList] = useState([]);
  const [listTitle, setListTitle] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchLists = async () => {
      setMyList([]);
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/todolists/${listId}`
        );
        setListTitle(response.data.title);
        const itemRequests = response.data.items.map((itemId) =>
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/todos/${itemId}`)
        );
        const itemsResponses = await Promise.all(itemRequests);
        setMyList(itemsResponses.map((response) => response.data));
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        //setError("Failed to fetch lists. Please try again later.");
      }
    };

    fetchLists();
  }, [listId]);

  const handleNavigateListItem = (path) => {
    navigate(path);
  };
  const handleEditList = () => {
    navigate("/edit-list");
  };
  return (
    <div
      key={myList.id}
      className="card w-64 md:w-80 shadow-2xl p-0 mx-auto m-2"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <div className="card-body text-left">
          <div className="flex flex-row items-center space-x-4">
            <img
              src={ListIcon}
              alt="List icon"
              className="w-4 h-4 lg:w-8 lg:h-8"
            />
            <h2 className="card-title text-teal-950 text-40">{listTitle}</h2>
          </div>
          <ul className="p-4 list-disc list-inside">
            {myList.map((item) => (
              <li key={item._id} className="text-black text-3xl p-2">
                {item.name}
                {item.isCompleted}
              </li>
            ))}
          </ul>
          <div className="flex flex-row card-actions justify-end space-x-4 mt-5">
            <button
              onClick={() => setShowModal(true)}
              className="focus:outline-none hover:scale-150"
            >
              <img
                src={EyeIcon}
                alt="Eye icon"
                className="w-4 h-4 lg:w-8 lg:h-8"
              />
            </button>
            <button
              onClick={() => handleNavigateListItem(`/my-list/${listId}`)}
              className="focus:outline-none hover:scale-150"
            >
              <img
                src={InfoIcon}
                alt="Info icon"
                className="w-4 h-4 lg:w-8 lg:h-8"
              />
            </button>
            <button
              className="focus:outline-none hover:scale-150"
              onClick={handleEditList}
            >
              <img
                src={EditIcon}
                alt="Edit icon"
                className="w-4 h-4 lg:w-8 lg:h-8"
              />
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="focus:outline-none hover:scale-150"
            >
              <img
                src={TrashIcon}
                alt="Trash icon"
                className="w-4 h-4 lg:w-8 lg:h-8"
              />
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <ListModal listId={listId} onClose={() => setShowModal(false)} />
      )}
      {showDeleteModal && (
        <DeleteList listId={listId} onClose={() => setShowDeleteModal(false)} />
      )}
    </div>
  );
};
