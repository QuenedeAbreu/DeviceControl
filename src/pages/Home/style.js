import Styled from 'styled-components'
import Colors from '../../helpers/Colors'

export const All = Styled.div`
  
  width: 100%;
  min-height: 100%;
  background-color: ${Colors.secondary};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
 
  .container--Body{
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;

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
    h1{
    color: ${Colors.white};
    }
  }
@media (max-width: 600px) {
 
  
}
}
`
