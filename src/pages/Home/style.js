import Styled from 'styled-components'
import Colors from '../../helpers/Colors'

export const All = Styled.div`
  flex: 1;
  background-color: ${Colors.quinary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
.container--Body--widget{
  width: calc(100% - 10px);
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 10px 10px;
  /* background-color: red; */
  justify-content: center;
  align-items: center;
}
.container--Body{
  width: 95%;
  height: 95%;
  /* background-color: red; */
  h1{
    color: ${Colors.white};
  }
}
`
