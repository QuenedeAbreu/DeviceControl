import styled from "styled-components";


export const PageAll = styled.div`
  width: 100%;
  height: 100vh;
  background-color:  #000;
  display: flex;
  flex-direction: column;
  

  .headerContent{
    display: flex;
    width: 100%;
    height: 50px;
    // background-color: #636;
    .headerContent--left{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon--menu{
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        padding: 5px;
        border: 2px solid #fff;
        transition: all 0.5s;
        border-radius: 50%;
        &:hover{
          border-radius: 0%;
          transition: all 0.5s;
          border: 2px solid #fff;
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
        background-color: #1E1E1E;
        padding: 5px 10px;
        border-radius: 20px;
        form{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          .icon--search{
            color: #fff;
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
            color: #fff;
            font-size: 18px;
          }
        }
      }
    }
    .headerContent--right{
      flex: 1;
      background-color: green;
    }
  }

  .bodyContent{
    width: 100%;
    flex: 1;
    display: flex;

    .active{
      margin-left: -25% !important;
      transition: margin-left 0.5s;
    }
  }
  @media (max-width: 600px) {
    .bodyContent{
    .active{
      margin-left: -50% !important;
    }
  }
  }

`;