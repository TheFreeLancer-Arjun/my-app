import React, { useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { Link } from "react-router-dom";

const Medalist = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      pdf: "https://example.com/sample.pdf",
      year: "2023",
      medalistType: "National",
    },
  ]);

  const [pdf, setPdf] = useState("");
  const [year, setYear] = useState("");
  const [medalistType, setMedalistType] = useState("");
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const validateForm = () => {
    const errors = {};
    if (!pdf.trim()) errors.pdf = "PDF link is required.";
    if (!year.trim()) errors.year = "Year is required.";
    if (!medalistType.trim()) errors.medalistType = "Medalist type selection is required.";
    return errors;
  };

  const addRow = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRow = {
      id: rows.length + 1,
      pdf,
      year,
      medalistType,
    };

    setRows([...rows, newRow]);
    setPdf("");
    setYear("");
    setMedalistType("");
    closeModal();
  };

  const deleteRow = (id) => {
    const filteredRows = rows.filter((row) => row.id !== id);
    setRows(filteredRows);
  };

  return (
    <>
      <div className="flex px-4 md:px-7 justify-between items-center flex-wrap w-full">
        <h1 className="font-extrabold py-4 text-center text-2xl md:text-4xl text-black flex items-center justify-center">
          Medalist
        </h1>
        <Link>
          <button
            onClick={openModal}
            type="button"
            className="mt-4 px-4 py-2 bg-green-400 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
          >
            Add Medalist
          </button>
        </Link>
      </div>

      <div className="container p-4 md:p-6">
        <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-[80vw]">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-2 md:px-4 py-2 text-left">Sr. No</th>
                  <th className="px-2 md:px-4 py-2 text-left">Year</th>
                  <th className="px-2 md:px-4 py-2 text-left">PDF</th>
                  <th className="px-2 md:px-4 py-2 text-left">Medalist Type</th>
                  <th className="px-2 md:px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.id} className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="border px-2 md:px-4 py-2">{index + 1}</td>
                    <td className="border px-2 md:px-4 py-2">{row.year}</td>
                    <td className="border px-2 md:px-4 py-2">
                      <a href={row.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        View PDF
                      </a>
                    </td>
                    <td className="border px-2 md:px-4 py-2 text-center">{row.medalistType}</td>
                    <td className="border px-2 md:px-4 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => deleteRow(row.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 border border-b-[5px] border-r-[5px] border-black rounded-t-xl"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 md:px-0">
          <div className="bg-yellow-50 p-4 md:p-8 rounded-lg shadow-lg w-full md:w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl text-center font-semibold text-gray-700">Add Medalist</h2>
              <button className="text-gray-500 font-bold hover:text-gray-700" onClick={closeModal}>
                &#x2715;
              </button>
            </div>
            <form className="space-y-4" onSubmit={addRow}>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">PDF Link</label>
                <input
                  type="url"
                  value={pdf}
                  onChange={(e) => setPdf(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter PDF link"
                />
                {errors.pdf && <p className="text-red-500 text-sm mt-1">{errors.pdf}</p>}
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Year</label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter year"
                />
                {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Select Medalist Type</label>
                <select
                  value={medalistType}
                  onChange={(e) => setMedalistType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Medalist Type</option>
                  <option value="National">National Medalist</option>
                  <option value="International">International Medalist</option>
                </select>
                {errors.medalistType && <p className="text-red-500 text-sm mt-1">{errors.medalistType}</p>}
              </div>
              <button type="submit" className="px-4 py-2 bg-green-400 text-black rounded-md w-full border border-b-[5px] border-r-[5px] border-black rounded-t-xl">
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Medalist;
