import {
  RowComponentBaseStyled,
  ContentStyled,
  ContentItemStyled,
  ContentItemHeaderStyled,
  ContentHeaderStyled,
  ActionStyled,
} from "./styles";
import { FiDelete, FiEdit3, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";

type RowComponentProps = {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  maxHeight?: number;
  handleDelete: (id: number) => void;
};

type RowHeaderProps = {
  maxHeight?: number;
  handleSort: (field: string, reverse: boolean) => void;
};

const RowHeader = ({ maxHeight = 50, handleSort }: RowHeaderProps) => {
  const [descending, setDescending] = useState(true);
  const [sortingField, setSortingField] = useState("");

  function handleClick(field: string) {
    setDescending(!descending);
    setSortingField(field);
    handleSort(field, descending);
  }

  return (
    <RowComponentBaseStyled maxHeight={maxHeight}>
      <ContentHeaderStyled>
        <ContentItemHeaderStyled
          onClick={() => handleClick("name")}
          sortingField={sortingField === "name"}
        >
          <p>
            <span>name</span>
            {descending ? <FiChevronDown /> : <FiChevronUp />}
          </p>
        </ContentItemHeaderStyled>
        <ContentItemHeaderStyled
          onClick={() => handleClick("status")}
          sortingField={sortingField === "status"}
        >
          <p>
            <span>status</span>
            {descending ? <FiChevronDown /> : <FiChevronUp />}
          </p>
        </ContentItemHeaderStyled>
        <ContentItemHeaderStyled
          onClick={() => handleClick("species")}
          sortingField={sortingField === "species"}
        >
          <p>
            <span>species</span>
            {descending ? <FiChevronDown /> : <FiChevronUp />}
          </p>
        </ContentItemHeaderStyled>
        <ContentItemHeaderStyled
          onClick={() => handleClick("gender")}
          sortingField={sortingField === "gender"}
        >
          <p>
            <span>gender</span>
            {descending ? <FiChevronDown /> : <FiChevronUp />}
          </p>
        </ContentItemHeaderStyled>
      </ContentHeaderStyled>
    </RowComponentBaseStyled>
  );
};

const RowComponent = ({
  id,
  image,
  name,
  status,
  species,
  gender,
  maxHeight = 80,
  handleDelete,
}: RowComponentProps) => (
  <RowComponentBaseStyled maxHeight={maxHeight}>
    <img src={image} alt="character" width="80" />
    <ContentStyled>
      <ContentItemStyled>{name}</ContentItemStyled>
      <ContentItemStyled>{status}</ContentItemStyled>
      <ContentItemStyled>{species}</ContentItemStyled>
      <ContentItemStyled>{gender}</ContentItemStyled>
    </ContentStyled>
    <ActionStyled>
      <FiEdit3 size="24" />
      <FiDelete
        size="24"
        onClick={() => {
          handleDelete(id);
        }}
      />
    </ActionStyled>
  </RowComponentBaseStyled>
);

export { RowComponent, RowHeader };
