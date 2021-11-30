import Styled from "styled-components";
import Colors from "../../helpers/Colors"


export const AllWidgetDashboard = Styled.div`
  width: 24%;
  min-width: 180px;
  height: auto;
  min-height: 100px;
  margin: 10px 10px 0 0;
  border-radius: 10px;
  background: ${Colors.primary};
  display: flex;
  /* justify-content: center; */
  box-shadow: 2px 2px 3px 0px ${Colors.lighterWhiteTransparent};
  align-items: center;

  .widget-icon{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${props => props.bgIcon};
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: ${Colors.white};
 }
 .widget-content{
   flex: 1;
   height: 100%;
   /* background: red; */
   .widget-content--title{
     width: 100%;
      height: 65%;
      /* background: red; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #fff;
      padding: 0 0 5px 0;
      h1{
        font-weight:normal;
        color: ${Colors.white};
        font-size: 12px;
        margin: 0 0 5px 0;
      }
      span{
        font-weight:bold;
        color: ${Colors.white};
        font-size: 20px;
      }
   }
   
   .widget-content--value{
     width: 100%;
      height: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        color: ${Colors.white};
      }
   }
  }
  @media (max-width: 600px) {
    min-width: 90%;
  }
`;
