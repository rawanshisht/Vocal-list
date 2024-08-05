/* eslint-disable react/prop-types */
import ListIcon from "../assets/List Teal.svg";
import TrashIcon from "../assets/Trash.svg";
import EditIcon from "../assets/Edit.svg";
import InfoIcon from "../assets/Info.svg";

export const ListCard = ({ list }) => {
  return (
    <div key={list.id} className="card w-96 shadow-2xl">
      <div className="card-body text-left">
        <div className="flex flex-row items-center space-x-4">
          <img src={ListIcon} alt="List icon" className="w-8 h-8" />
          <h2 className="card-title text-teal-950 text-40">{list.name}</h2>
        </div>
        <ul className="p-4">
          {list.items.map((item) => (
            <li key={item} className="text-black text-3xl p-2">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-row card-actions justify-end space-x-4">
          <img src={InfoIcon} alt="Info icon" className="w-8 h-8" />
          <img src={EditIcon} alt="Edit icon" className="w-8 h-8" />
          <img src={TrashIcon} alt="Trash icon" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
