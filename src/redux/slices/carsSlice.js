import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12, filters = {} } = {}) => {
    const params = { page, limit, ...filters };
    const response = await axios.get(
      "https://car-rental-api.goit.global/cars",
      { params }
    );
    return { ...response.data, page };
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id) => {
    const response = await axios.get(
      `https://car-rental-api.goit.global/cars/${id}`
    );
    return response.data;
  }
);

export const fetchBrands = createAsyncThunk("cars/fetchBrands", async () => {
  const response = await axios.get("https://car-rental-api.goit.global/brands");
  return response.data;
});

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    selectedCar: null,
    brands: [],
    totalCars: 0,
    page: 1,
    totalPages: 1,
    loading: false,
    error: null,
    filters: {
      brand: "",
      priceFrom: "",
      priceTo: "",
      mileageFrom: "",
      mileageTo: "",
    },
    favorites: [],
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.page = 1;
      state.cars = [];
    },
    addFavourite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavourite: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.totalCars = action.payload.totalCars;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;

        if (action.payload.page === 1) {
          state.cars = action.payload.cars;
        } else {
          state.cars = [...state.cars, ...action.payload.cars];
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
    builder
      .addCase(fetchCarById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedCar = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
    builder
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.error = action.error.message || "Failed to load brands";
      });
  },
});

export const { setFilters, addFavourite, removeFavourite } = carsSlice.actions;
export default carsSlice.reducer;
