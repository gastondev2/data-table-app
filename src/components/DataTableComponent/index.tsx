import { RowComponent, RowHeader } from "../RowComponent";
import { DataTableComponentBaseStyled } from "./styles";
import CharacterType from "../../types/CharacterType";

type DataTableComponentProps = {
  data: CharacterType[];
  handleSort: (field: string, reverse: boolean) => void;
  handleDelete: (id: number) => void;
};

const DataTableComponent = ({
  data,
  handleDelete,
  handleSort,
}: DataTableComponentProps) => (
  <DataTableComponentBaseStyled>
    <RowHeader handleSort={handleSort} />
    {data?.map((item: CharacterType) => (
      <RowComponent {...item} handleDelete={handleDelete} key={item.id} />
    ))}
  </DataTableComponentBaseStyled>
);

export default DataTableComponent;
