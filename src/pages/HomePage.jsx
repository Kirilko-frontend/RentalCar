import homeBg from "../assets/images/home-bg.png";
import CustomButton from "../ui/CustomButton";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="pt-[540px] pb-[60px] flex flex-col items-center">
        <h1 className="font-manrope font-bold text-[60px] leading-[1.2] text-center text-white mb-5">
          Find your perfect rental car
        </h1>
        <p className="font-manrope font-bold text-[24px] leading-[1.3] text-center text-white mb-11">
          Reliable and budget-friendly rentals for any journey
        </p>
        <CustomButton onClick={handleClick} className="text-white">
          View Catalog
        </CustomButton>
      </div>
    </div>
  );
};

export default HomePage;
