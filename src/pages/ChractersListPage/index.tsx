import { useEffect } from "react";
import { fetchCharacters } from "../../redux/slices/charactersSlice";
import {
  deleteItem,
  sortCharacters,
  filterCharacters,
} from "../../redux/slices/charactersSlice";
import { useDispatch, useSelector } from "react-redux";
import DataTableComponent from "@components/DataTableComponent";
import SearchBarComponent from "@components/SearchBarComponent";
import sortBy from "../../utils/sortBy";
import { characterSelector } from "../../redux/selectors/characterSelectors";

import { CharactersListPageBaseStyled } from "./styles";

const CharactersListPage = () => {
  const dispatch: any = useDispatch();
  const characters = useSelector((state: any) => characterSelector(state));

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  function handleDelete(id: number) {
    dispatch(deleteItem(id));
  }

  const handleSort =
    (sortByCallback: any) => (field: any, reverse: boolean) => {
      dispatch(sortCharacters({ sortByCallback, field, reverse }));
    };

  const handleSortBy = handleSort(sortBy);

  const handleFilter = (word: string) => {
    dispatch(filterCharacters({ word }));
  };

  return (
    <CharactersListPageBaseStyled>
      <SearchBarComponent handleFilter={handleFilter} />
      <DataTableComponent
        data={characters}
        handleDelete={handleDelete}
        handleSort={handleSortBy}
      />
    </CharactersListPageBaseStyled>
  );
};

export default CharactersListPage;
