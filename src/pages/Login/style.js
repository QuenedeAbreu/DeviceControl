import Styled from 'styled-components'

export const All = Styled.div`
  max-width: 100vw !important;
  min-height: 100vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`
export const Content = Styled.div`
height: 100% !important;
min-height: 100vh !important;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
@media(max-width: 800px) {
 min-width: 100% !important;
}
`
export const ContentRight = Styled(Content)`
background-color: #1E1E1E;
width: 40% !important;
display: flex;
flex-direction: column;

img {
  width: 100px;
  margin-bottom: 30px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  label{
    background-color: #171717;
    padding: 10px;
    color: white;
    border-radius: 5px;
    border: none;
    font-size: 1.0em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    span{
      margin-left: 10px;
    }
    button {
      display: none ;
    }
    &:hover {
      background-color: #2196F3;
    }
  
    @media(max-width: 800px) {
      width: 85%;
     }
  }
  }
`
export const ContentLeft = Styled(Content)`
width: 60% !important;
@media(max-width: 800px) {
  order: 1;
 }
`
export const H1 = Styled.h1`
  color: white;
  margin-bottom: 20px;
`



