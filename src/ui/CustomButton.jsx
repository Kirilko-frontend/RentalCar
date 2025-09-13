const CustomButton = ({ children, className = "", onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-3 py-2 text-base  rounded-2xl w-[276px] h-11 bg-light-blue  font-sans font-[600] text-[16px] leading-[125%] focus:bg-blue hover:bg-blue cursor-pointer ${className}`}
  >
    {children}
  </button>
);

export default CustomButton;
