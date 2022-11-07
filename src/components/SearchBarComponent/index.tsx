import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchBarComponentBaseStyled } from "./styles";

type SearchBarComponentProps = {
  handleFilter: (word: string) => void;
};

const SearchBarComponent = ({ handleFilter }: SearchBarComponentProps) => {
  const [filteringWord, setFilteringWord] = useState("");

  function handleFilteringWord(value: string) {
    setFilteringWord(value);
    handleFilter(value);
  }
  return (
    <SearchBarComponentBaseStyled>
      <input
        type="text"
        placeholder="Search here by name"
        onChange={(e) => handleFilteringWord(e.target.value)}
        value={filteringWord}
      />
      <div>
        <FiSearch size="24" />
      </div>
    </SearchBarComponentBaseStyled>
  );
};

export default SearchBarComponent;
