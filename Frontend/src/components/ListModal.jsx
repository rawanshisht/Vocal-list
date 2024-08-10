/* eslint-disable react/prop-types */
const ListModal = ({ listId, onClose }) => {
  const list = {
    id: listId,
    name: "list1",
    items: ["coffee", "milk"],
  };
  return (
    <div
      className="fixed bg-gray-100 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl shadow-2xl p-4 flex-col relative "
      >
        <div className="flex flex-row justify-between p-4">
          <h2 className="card-title text-teal-950 text-40">{list.name}</h2>
          <button
            className="btn btn-sm btn-circle btn-ghost text-xl"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <ul className="p-4 list-disc list-inside ">
          {list.items.map((item) => (
            <li key={item} className="text-black text-3xl p-2 text-left">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListModal;
