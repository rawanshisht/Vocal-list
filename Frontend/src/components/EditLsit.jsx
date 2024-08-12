const EditList = () => {
  return (
    <div className="bg-gray-100 p-4 h-screen flex items-center ">
      <div className="w-96 mx-auto space-y-4">
        <h2 className="card-title text-teal-950 text-40">Edit List</h2>
        <label className="input input-bordered flex items-center gap-2 bg-white">
          <input type="text" className="grow" placeholder="List Title" />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-white">
          <input type="text" className="grow" placeholder="Category" />
        </label>
        <textarea
          className="textarea textarea-bordered flex grow w-full bg-white"
          placeholder="Items"
        ></textarea>
        <button className="btn bg-custom-orange text-gray-100 hover:bg-custom-orange-dark w-full text-lg border-0">
          Edit List
        </button>
      </div>
    </div>
  );
};

export default EditList;
