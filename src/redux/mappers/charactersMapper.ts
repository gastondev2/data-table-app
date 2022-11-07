import CharacterType from "../../types/CharacterType";

export const characterMapper = ({
  id,
  image,
  name,
  status,
  species,
  gender,
}: CharacterType) => ({
  id,
  image,
  name,
  status,
  species,
  gender,
  isDeleted: false,
});
