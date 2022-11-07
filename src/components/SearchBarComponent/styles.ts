import styled from "styled-components";
import colors from "../../styles/colors";

export const SearchBarComponentBaseStyled = styled.div`
  display: flex;
  background-color: ${colors.white2};
  border-radius: 8px;
  padding: 16px 24px;
  width: 100%;

  input,
  input:hover {
    border: none;
    background-color: ${colors.white2};
    width: 100%;
    outline: none;
    font-size: 24px;
  }

  svg {
    color: ${colors.grey1};
  }
`;
