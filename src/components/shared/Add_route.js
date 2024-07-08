import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRoutePage = () => {
    const [routeName, setRouteName] = useState("");
    const [pageText, setPageText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${routeName}`);
    };

    return (
        <div className="p-10">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-md">
                <label className="block mb-2 font-bold text-gray-700">
                    Route Name:
                </label>
                <input
                    type="text"
                    value={routeName}
                    onChange={(e) => setRouteName(e.target.value)}
                    className="block w-full border border-gray-400 p-2 rounded-lg"
                />
                <label className="block mt-4 mb-2 font-bold text-gray-700">
                    Page Text:
                </label>
                <input
                    type="text"
                    value={pageText}
                    onChange={(e) => setPageText(e.target.value)}
                    className="block w-full border border-gray-400 p-2 mt-2 rounded-lg"
                />
                <button
                    type="submit"
                    className="block w-full mt-4 bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddRoutePage;
