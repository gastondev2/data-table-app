import styled from "styled-components";
//import { media } from "../../styles/media";
import colors from "@styles/colors";

interface RowComponentBaseStyledType {
  maxHeight: number;
}

interface ContentHeaderStyledType {
  sortingField: boolean;
}

export const RowComponentBaseStyled = styled.div<RowComponentBaseStyledType>`
  display: flex;
  width: 100%;
  color: ${colors.grey1};
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  height: ${(props) => `${props.maxHeight}px`};
  border-bottom: 1px solid ${colors.grey2};
`;

export const ContentStyled = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.white2};
`;

export const ContentHeaderStyled = styled(ContentStyled)`
  padding: 0 80px;
  background-color: ${colors.grey2};
  color: ${colors.white2};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: 10px;
    }
  }
`;

export const ContentItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 25%;
  cursor: pointer;
`;

export const ContentItemHeaderStyled = styled(
  ContentItemStyled
)<ContentHeaderStyledType>`
  background-color: ${(props) =>
    props.sortingField ? `${colors.grey1}` : `${colors.grey2}`};
`;

export const ActionStyled = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0;

  background-color: ${colors.white2};
  align-items: center;
  width: 100px;
  padding-right: 15px;
  color: ${colors.grey2};
  cursor: pointer;

  svg:hover {
    color: ${colors.red};
  }
`;
