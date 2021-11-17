import styled from "styled-components";
import Colors from "../../../helpers/Colors";

export const SidebarArea = styled.div`
  max-width: 300px;
  width: 25%;
  background-color: ${Colors.primary};
  transition: margin-left 0.5s;
  .bar--bottom--item--sidebar{
    width: 20px;
    height: 1px;
    background-color: ${Colors.white};
  }
  .sidebar--header{
    width: 100%;
    height: 200px;
    background-color: red;
    h1 {
      color: #fff;
    }
  }

  @media (max-width: 600px) {
    width: 50% !important;
  }
`;