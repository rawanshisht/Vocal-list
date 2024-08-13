/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

const AddList = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAddList = async () => {
    try {
      setLoading(true);
      console.log({
        title,
        category,
        items,
      });
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/todolists`,
        {
          title,
          category,
          items,
        }
      );
      console.log(response);
      //setList(response.data); // Assuming response.data is an array of lists
    } catch (err) {
      setLoading(false);
      //setError("Failed to fetch lists. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-100 p-4 h-screen flex items-center ">
      <div className="w-96 mx-auto space-y-4">
        <h2 className="card-title text-teal-950 text-40">Add List</h2>
        <label className="input input-bordered flex items-center gap-2 bg-white">
          <input
            type="text"
            className="grow"
            placeholder="List Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-white">
          <input
            type="text"
            className="grow"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <textarea
          className="textarea textarea-bordered flex grow w-full bg-white"
          placeholder="Items"
          onChange={(e) => setItems(e.target.value)}
        ></textarea>
        <button
          className="btn bg-custom-orange text-gray-100 hover:bg-custom-orange-dark w-full text-lg border-0"
          onClick={handleAddList}
        >
          {loading ? "Adding..." : "Add List"}
        </button>
      </div>
    </div>
  );
};

export default AddList;
