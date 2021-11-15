import styled from "styled-components";


export const PageAll = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
  

  .headerContent{
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #636;
  }

  .bodyContent{
    width: 100%;
    flex: 1;
    display: flex;

    .active{
      margin-left: -20% !important;
      transition: margin-left 0.5s;
    }
  }

`;