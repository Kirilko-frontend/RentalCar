import { useState } from "react";
import CustomButton from "./CustomButton";

const CustomSelect = ({ options = [], placeholder, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative  py-4 px-3">
      <CustomButton
        className="flex justify-between items-center gap-8 font-medium text-base text-dark bg-white-second focus:bg-white hover:bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || placeholder}</span>
        <svg
          className={`w-3 h-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 13 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={
              isOpen
                ? "M6.14663 0.146894C6.19308 0.10033 6.24825 0.0633873 6.309 0.0381808C6.36974 0.0129744 6.43486 0 6.50063 0C6.5664 0 6.63152 0.0129744 6.69226 0.0381808C6.75301 0.0633873 6.80819 0.10033 6.85463 0.146894L12.8546 6.14689C12.9485 6.24078 13.0013 6.36812 13.0013 6.50089C13.0013 6.63367 12.9485 6.76101 12.8546 6.85489C12.7607 6.94878 12.6334 7.00152 12.5006 7.00152C12.3679 7.00152 12.2405 6.94878 12.1466 6.85489L6.50063 1.20789L0.854632 6.85489C0.760745 6.94878 0.633407 7.00152 0.500632 7.00152C0.367856 7.00152 0.240518 6.94878 0.146632 6.85489C0.052745 6.76101 0 6.63367 0 6.50089C0 6.36812 0.052745 6.24078 0.146632 6.14689L6.14663 0.146894Z"
                : "M0.146894 0.146894C0.19334 0.10033 0.248515 0.0633873 0.30926 0.0381808C0.370005 0.0129744 0.435127 0 0.500894 0C0.566661 0 0.631782 0.0129744 0.692528 0.0381808C0.753273 0.0633873 0.808448 0.10033 0.854894 0.146894L6.50089 5.79389L12.1469 0.146894C12.1934 0.100406 12.2486 0.0635292 12.3093 0.0383701C12.37 0.013211 12.4352 0.000261784 12.5009 0.000261784C12.5666 0.000261784 12.6317 0.013211 12.6925 0.0383701C12.7532 0.0635292 12.8084 0.100406 12.8549 0.146894C12.9014 0.193381 12.9383 0.248571 12.9634 0.30931C12.9886 0.370049 13.0015 0.43515 13.0015 0.500894C13.0015 0.566637 12.9886 0.631738 12.9634 0.692477C12.9383 0.753217 12.9014 0.808406 12.8549 0.854894L6.85489 6.85489C6.80845 6.90146 6.75327 6.9384 6.69253 6.96361C6.63178 6.98881 6.56666 7.00179 6.50089 7.00179C6.43513 7.00179 6.37001 6.98881 6.30926 6.96361C6.24852 6.9384 6.19334 6.90146 6.14689 6.85489L0.146894 0.854894C0.100331 0.808448 0.0633878 0.753272 0.0381813 0.692527C0.0129749 0.631782 0 0.566661 0 0.500894C0 0.435126 0.0129749 0.370005 0.0381813 0.30926C0.0633878 0.248515 0.100331 0.193339 0.146894 0.146894Z"
            }
            fill="#101828"
          />
        </svg>
      </CustomButton>

      {isOpen && (
        <ul className="absolute top-full mt-1 w-full bg-white-main border border-gray rounded-[12px] shadow-md z-10 max-h-[192px] overflow-y-auto">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer text-gray-second focus:text-dark hover:text-dark"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
