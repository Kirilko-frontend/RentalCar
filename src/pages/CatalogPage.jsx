import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CustomButton from "../ui/CustomButton";
import CustomRangeInput from "../ui/CustomRangeInput";
import CustomSelect from "../ui/CustomSelect";
import { fetchBrands, fetchCars } from "../redux/slices/carsSlice";
import CarItem from "../components/CarItem";

import ClipLoader from "react-spinners/ClipLoader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { cars, loading, error, page, totalPages, brands } = useSelector(
    (state) => state.cars
  );

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  useEffect(() => {
    dispatch(fetchCars({ page: 1, limit: 12 }));
    dispatch(fetchBrands());
  }, [dispatch]);

  const buildFilters = () => {
    const filters = {};
    if (selectedBrand) filters.brand = selectedBrand;
    if (priceFrom) filters.priceFrom = priceFrom;
    if (priceTo) filters.priceTo = priceTo;
    if (selectedPrice) {
      const [min, max] = selectedPrice.split("-");
      filters.priceFrom = min;
      filters.priceTo = max;
    }
    return filters;
  };

  const handleSearch = () => {
    dispatch(fetchCars({ page: 1, limit: 12, filters: buildFilters() }));
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(
        fetchCars({ page: page + 1, limit: 12, filters: buildFilters() })
      );
    }
  };

  return (
    <div className="container mx-auto pt-20">
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="flex flex-col gap">
          <p className="font-normal text-xs leading-[1.33] text-gray-third pl-3">
            Car brand
          </p>
          <CustomSelect
            options={brands}
            selected={selectedBrand}
            onChange={setSelectedBrand}
            placeholder="Choose a brand"
          />
        </div>
        <div className="flex flex-col gap">
          <p className="font-normal text-xs leading-[1.33] text-gray-third pl-3">
            Price/ 1 hour
          </p>
          <CustomSelect
            options={[
              "30",
              "40",
              "50",
              "60",
              "70",
              "80",
              "90",
              "100",
              "110",
              "120",
            ]}
            selected={selectedPrice}
            onChange={setSelectedPrice}
            placeholder="Choose a price"
          />
        </div>
        <div className="flex flex-col gap">
          <p className="font-normal text-xs leading-[1.33] text-gray-third pl-3 ">
            Сar mileage / km
          </p>
          <CustomRangeInput
            fromValue={priceFrom}
            toValue={priceTo}
            onFromChange={setPriceFrom}
            onToChange={setPriceTo}
          />
        </div>
        <CustomButton onClick={handleSearch} className="text-white">
          Search
        </CustomButton>
      </div>

      {loading && (
        <div className="flex justify-center mt-20">
          <ClipLoader size={50} color="#2563eb" />
        </div>
      )}

      {error && <p className="text-red-500 text-center">{error}</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-14">
        {cars.map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </ul>

      {page < totalPages && (
        <div className="flex justify-center mt-10 text-dark">
          <CustomButton
            className="bg-white bg-opacity-50 border border-blue-500 text-blue-500 hover:bg-blue-100"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
