// import React, {useState} from "react";
// import Datepicker from "react-tailwindcss-datepicker";

type DatePickerProps = {
  label: string;
};

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({ label }: DatePickerProps) => {
  return (
    <div className="p-4">
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <div className="relative max-w-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="date"
          className="block w-full rounded-lg border border-gray-300 bg-sand p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Select date"
        />
      </div>
    </div>
  );
};
