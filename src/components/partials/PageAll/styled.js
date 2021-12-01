import styled from "styled-components";
import colors from "../../../helpers/Colors";
export const PageAll = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-color:  ${colors.black};
  display: flex;
  flex-direction: column;

  .box--all-shadow{
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${colors.black};
    opacity: 0.75;
    animation: shadow-all 0.5s ease-in-out;
    @keyframes shadow-all {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.75;
      }
    }
    /* display: none; */
  }

  .headerContent{
    display: flex;
    width: 100%;
    min-height: 50px;
    z-index: 9999;
    position: relative;
    .headerContent--left{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon--menu{
        color: ${colors.icons};
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        padding: 5px;
        // border: 2px solid #fff;
        transition: all 0.5s;
        &:hover{
          border-radius: 50%;
          transition: all 0.5s;
          border: 2px solid ${colors.icons};
        }
      }

    }
    .headerContent--center{
      display: flex;
      flex: 2;
      align-items: center;
      justify-content: center;
      // background-color: blue;
      .headerContent--center--search{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        height: 60%;
        max-width: 500px;
        background-color: ${colors.secondary};
        padding: 5px 10px;
        border-radius: 20px;
        form{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          .icon--search{
            color: ${colors.icons};
            font-size: 20px;
            font-weight: bold;
            margin-right: 10px;
          }
          input{
            border:none !important;
            width: 80% !important;
            height: 100% !important;
            background: none;
            outline: none;
            color: ${colors.white};
            font-size: 18px;
          }
        }
      }
    }
    .headerContent--right{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon--perfil{
        color: ${colors.icons};
        font-size: 20px;
        margin-right: 50px;
      }

      button{
        text-align: center;
        color: ${colors.icons};
        text-decoration: none;
        background: none ;
        margin-bottom: 5px;
        border: none;
        cursor: pointer;

        .headerContent--right--logout{
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          span{
            font-size: 15px;
          }
          .icon--logout{
            font-size: 23px;
          }
          
        }
      }
    }
  }

  .bodyContent{
    width: 100%;
    min-height: 100% !important;
    display: flex;
    flex-direction: row;
    /* background-color: yellow; */
    .active{
      margin-left: -300px !important;
      transition: margin-left 0.5s;
    }
  }
  @media (max-width: 600px) {
    .bodyContent{
    .active{
      margin-left: -70% !important;
    }
  }
  }

`;