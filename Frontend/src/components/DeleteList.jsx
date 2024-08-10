/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const DeleteList = ({ listId, onClose }) => {
  const handleDeleteList = (listId) => {
    console.log(listId, "delete");
    onClose();
  };
  return (
    <div
      className="fixed bg-gray-100 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full bg-white rounded-xl shadow-2xl p-4 flex-col relative "
      >
        <div className="flex flex-row justify-between p-4">
          <h2 className="card-title text-teal-950 text-40">Delete List</h2>
          <button
            className="btn btn-sm btn-circle btn-ghost text-xl"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div>
          <h2 className="text-black text-3xl p-2 ">
            Are you sure you want to delete this list?
          </h2>
          <div className="flex flex-row items-center justify-center p-4 space-x-4">
            <button
              className="btn bg-teal-950 text-gray-100 hover:bg-teal-950-dark w-32 text-lg border-0"
              onClick={onClose}
            >
              No
            </button>
            <button
              className="btn btn-error text-gray-100 hover:bg-error-dark w-32 text-lg border-0"
              onClick={() => handleDeleteList(listId)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteList;
