import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { characterMapper } from "../mappers/charactersMapper";
import filter from "../../utils/filter";

const initialState = {
  data: [],
  modifiedData: [],
  loading: false,
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  () => {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => response.data.results.map(characterMapper));
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState: initialState,
  reducers: {
    deleteItem: (state, param) => {
      const { payload: id } = param;

      const newData = state.modifiedData.map((item) =>
        item.id === id ? { ...item, isDeleted: true } : item
      );
      state.modifiedData = [...newData];
      state.data = [...newData];
    },
    filterCharacters: (state, param) => {
      const {
        payload: { word },
      } = param;

      state.modifiedData = filter(state.data, word);
    },
    sortCharacters: (state, param) => {
      const {
        payload: { sortByCallback, field, reverse },
      } = param;
      state.modifiedData = [
        ...state.modifiedData.sort(sortByCallback(field, reverse)),
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.modifiedData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const { deleteItem, sortCharacters, filterCharacters } =
  charactersSlice.actions;
export default charactersSlice.reducer;
