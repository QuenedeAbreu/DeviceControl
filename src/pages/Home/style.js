import Styled  from 'styled-components'

export const All = Styled.div`
  max-width: 100vw !important;
  min-height: 100vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = Styled.div`
width: 60%;
height: 100% !important;
min-height: 500px;
background-color: #696969;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 15px;
`
export const H1 = Styled.h1`
  color: white;
`
export const P = Styled.p`
color: white;
`
export const Ul = Styled.ul`
`
export const Li = Styled.li`
color: white;
background-color: ${props => props.bgColor};
`
export const A = Styled.a`
color: white;
`