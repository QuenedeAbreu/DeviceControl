import styled from "styled-components";
import Colors from "../../../helpers/Colors";

export const SidebarArea = styled.div`
  position: relative;
  max-width: 300px;
  min-width: 300px;
  width: 25%;
  min-height:calc( 100vh - 50px);
  overflow-y: auto;
  background-color: ${Colors.primary};
  transition: margin-left 0.5s;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 2px 3px 5px 0px ${Colors.tertiary}; 
  box-shadow: 2px 3px 5px 0px ${Colors.tertiary};
  z-index: 9999;
  /* position: absolute; */
  .sidebar--top {
   
  
    flex: 1;
    .sidebar--section{
      font-size: 0.4rem;
      // padding: 10px;
      margin: 20px 0 10px 20px;
      color: ${Colors.icons};
    }
    .bar--bottom--item--sidebar{
      width: 100%;
      height: 1px;
      background-color: ${Colors.tertiary};
    }
    .sidebar--header{
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: ${Colors.quinary};
      border-bottom: 1px solid ${Colors.tertiary};
      h1 {
        font-size: 16px;
        color: ${Colors.inforOneIcon};
      }
      span {
        font-size: 12px;
        color:${Colors.icons};
      }

      .sidebar--header--imgPerfil{
        width: 120px;
        height: 120px;
        background-color: ${Colors.white};
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 20px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .sidebar--bottom {
    width: 100%;
    height: 25px;
    background-color: ${Colors.inforOne};
  
    a{
      height: 100%;
      display: flex;
      justify-content:center;
      align-items: center;
      color: ${Colors.white};
      text-decoration: none;
      span{
        margin-top: 2px;
        font-size: 12px;
        font-weight: bold;
      }
      .icon-bank{
        margin-right: 5px;
        font-size: 20px;
      }
    }
  }
  
  @media (max-width: 600px) {
   
    width: 70% !important;
    max-width: 70% !important;
    min-width: 70% !important;
    min-height:calc( 100% - 50px);
    position: absolute;
  }
`;