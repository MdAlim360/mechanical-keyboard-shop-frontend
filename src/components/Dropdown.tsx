import React from "react";

interface DropdownProps {
  options: string[];
  selected: string;
  onChange: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onChange }) => {
  return (
    <select
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
