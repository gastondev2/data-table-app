import CharacterType from "../types/CharacterType";

const filter = (data: CharacterType[], word: string) => {
  const plainWord = word.toLowerCase();
  return data.filter(
    (item: CharacterType) =>
      item.name.toLowerCase().includes(plainWord) && !item.isDeleted
  );
};

export default filter;
