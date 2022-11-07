import CharacterType from "../../types/CharacterType";

export const characterSelector = (state: any) =>
  state.characters.modifiedData.filter(
    (item: CharacterType) => !item.isDeleted
  );
