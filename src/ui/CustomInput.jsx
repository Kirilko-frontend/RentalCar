const CustomInput = ({ value, onChange, placeholder = "", className = "" }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`rounded-[12px] px-5 py-3 w-[576px] h-[48px] border border-gray-second focus:outline-none focus:ring-2 focus:ring-light-blue ${className}`}
  />
);

export default CustomInput;
