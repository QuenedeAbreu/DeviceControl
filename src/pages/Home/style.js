import Styled from 'styled-components'

export const All = Styled.div`
  max-width: 100vw !important;
  min-height: 100vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252525;
  flex-direction: column;
  .containerAll{
    width: 100%;
    flex: 1;
    display: flex;
    background-color: red;
    .containerBody{
      flex: 1;
      background-color: #525;
    }
  }
  h1{
    font-size: 3rem;
    color: #fff;
  }
  p{
    font-size: 1.5rem;
    color: #fff;
  }
  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }


`
