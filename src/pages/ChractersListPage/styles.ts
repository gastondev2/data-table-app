import styled from "styled-components";
import { SearchBarComponentBaseStyled } from "../../components/SearchBarComponent/styles";
import { DataTableComponentBaseStyled } from "../../components/DataTableComponent/styles";
import { media } from "../../styles/media";

export const CharactersListPageBaseStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  max-width: 1200px;

  ${SearchBarComponentBaseStyled} {
    width: auto;
    ${media.desktop} {
      margin: 20px;
      width: 100%;
    }
  }

  ${DataTableComponentBaseStyled} {
    margin: 20px;
  }

  ${media.desktop} {
    width: 100%;
    margin: auto;
  }
`;
