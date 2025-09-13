import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../redux/slices/carsSlice";
import CustomButton from "../ui/CustomButton";
import { useNavigate } from "react-router-dom";

const CarItem = ({ car }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cars.favorites);
  const isFavourite = favorites.includes(car.id);

  const toogleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(car.id));
    } else {
      dispatch(addFavourite(car.id));
    }
  };

  const handleClick = () => {
    navigate(`/catalog/${car.id}`);
  };
  return (
    <li key={car.id} className="relative w-[276px]">
      <div>
        <img src={car.img} alt={car.model} className="rounded-2xl" />
        <button
          type="button"
          onClick={toogleFavourite}
          className="absolute top-2 right-2"
        >
          {isFavourite ? (
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.99978 1.31405C12.4378 -3.24795 23.5338 4.73505 7.99978 15.0001C-7.53422 4.73605 3.56178 -3.24795 7.99978 1.31405Z"
                fill="#3470FF"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.9999 2.74805L7.2829 2.01105C5.5999 0.281049 2.5139 0.878049 1.39989 3.05305C0.876895 4.07605 0.758895 5.55305 1.71389 7.43805C2.63389 9.25305 4.5479 11.427 7.9999 13.795C11.4519 11.427 13.3649 9.25305 14.2859 7.43805C15.2409 5.55205 15.1239 4.07605 14.5999 3.05305C13.4859 0.878049 10.3999 0.280049 8.7169 2.01005L7.9999 2.74805ZM7.9999 15C-7.33311 4.86805 3.27889 -3.03995 7.82389 1.14305C7.88389 1.19838 7.94256 1.25538 7.9999 1.31405C8.05623 1.25501 8.11494 1.1983 8.17589 1.14405C12.7199 -3.04195 23.3329 4.86705 7.9999 15Z"
                fill="#F2F4F7"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="pt-4">
        <div className="flex justify-between mb-2">
          <h3 className="font-medium text-base leading-[1.25] text-dark">
            {car.brand} <span className="text-light-blue">{car.model}</span>,{" "}
            {car.year}
          </h3>
          <p className="font-medium text-base leading-[1.25] text-dark">
            ${car.rentalPrice}
          </p>
        </div>
        <div className="mb-5">
          <p className="font-normal text-xs leading-[1.33] text-gray-third">
            {car.address} | {car.rentalCompany} | {car.type} | {car.mileage} km
          </p>
        </div>
        <CustomButton onClick={handleClick} className="text-white">
          Read more
        </CustomButton>
      </div>
    </li>
  );
};

export default CarItem;
