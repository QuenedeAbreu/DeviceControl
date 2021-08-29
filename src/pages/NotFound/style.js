import Styled from 'styled-components'

export const All = Styled.div`
  max-width: 100vw !important;
  min-height: 100vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  flex-direction: column;
  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }

  h1{
    font-size: 3rem;
    color: #fff;
  }
  p{
    font-size: 1.5rem;
    color: #fff;
  }

  button{
    margin-top: 1rem;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    &:hover{
      background-color: #2196F3;
      color: #fff;
    }
  }


`
