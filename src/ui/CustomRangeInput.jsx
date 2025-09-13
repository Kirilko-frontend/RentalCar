const CustomRangeInput = ({ fromValue, toValue, onFromChange, onToChange }) => {
  return (
    <div className="flex w-[320px] border border-gray-light rounded-[12px] overflow-hidden">
      <input
        type="text"
        value={fromValue}
        onChange={(e) => onFromChange(e.target.value)}
        placeholder="From"
        className="w-[160px] h-[44px] px-4 border-r border-gray-light rounded-l-[12px] focus:outline-none"
      />

      <input
        type="text"
        value={toValue}
        onChange={(e) => onToChange(e.target.value)}
        placeholder="To"
        className="w-[160px] h-[44px] px-4 rounded-r-[12px] focus:outline-none"
      />
    </div>
  );
};

export default CustomRangeInput;
