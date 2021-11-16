import styled from "styled-components";

export const SidebarArea = styled.div`
  width: 25%;
  background-color: #000;
  transition: margin-left 0.5s;
  h1 {
    color: #fff;
  }

  @media (max-width: 600px) {
    width: 50% !important;
  }
`;