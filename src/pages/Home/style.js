import Styled from 'styled-components'
import Colors from '../../helpers/Colors'

export const All = Styled.div`
  
  width: 100%;
  min-height: 100%;
  background-color: ${Colors.tertiary};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 0 10px 0 0;
  align-items: center;
 
  .container--Body{
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  .container--Body--Title{
    width: 100%;
    height: 70px;
    min-height: 70px;
    display: flex;
    align-items: flex-end;
   
    /* background-color:red ; */
    border-bottom: 1px solid ${Colors.secondary};
    h1{
      margin: 0 0 0 10px;
      color: ${Colors.white};
    }
  }

  .container--Body--widget{
    width: calc(100% - 10px);
    height:auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 10px 10px;
    /* justify-content: center; */
    align-items: center;
   
  }

  .container--Body--graphics{
    width:100% ;
    flex: 1;
    display: flex;
    flex-direction: column;
    /* background-color:blue ; */
    position: relative;
    
    //Linha 1 graficos (Greal)
  .container--Body--graphics--row{
    position: relative;
    display: flex;
    width: 100%;
    min-height: 300px;
    justify-content: center;
    margin: 0 0 0 5px;
    /* background-color:red ; */

      .container--Body--graphics--content{
        display: flex;
        margin: 5px;
        background-color: ${Colors.secondary};
        border-radius: 10px;
        box-shadow: 4px 4px 3px 0px ${Colors.darkTransparent};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .container--Body--graphics--content--title{
          width: 100%;
          max-height: 50px; 
          display: flex;
          justify-content: center;
          h1{
            margin: 10px ;
            font-size: 20px;
            color: ${Colors.white};
          }
          /* background-color:red; */
        }
      }
   
      .container--Body--graphics--content:nth-child(1){
        display: flex;
        width: calc(70% - 10px) !important;
        min-height: 300px;
        .container--Body--graphics--content-in{
          width: 100%;
          height: 100%;
        }
      }

      .container--Body--graphics--content:nth-child(2){
        display: flex;
        width: calc(30% - 10px) !important;
        min-height: 300px;
        .container--Body--graphics--content-in{
          width: 100%;
          height: 100%;
        }
      }
    }
   
  }
  @media (max-width: 600px) {
    .container--Body--Title{
      justify-content: center !important;
   }
   .container--Body--graphics--row{
    flex-direction: column;
   
     .container--Body--graphics--content:nth-child(1){
        min-width: calc(100% - 10px);
      }
      .container--Body--graphics--content:nth-child(2){
        min-width: calc(100% - 10px);
      }
      .container--Body--graphics--content:nth-child(3){
        min-width: calc(100% - 10px);
        flex: none;
      }
      .container--Body--graphics--content:nth-child(4){
        min-width: calc(100% - 10px);
        flex: none;
      }
    }
          
}
`
