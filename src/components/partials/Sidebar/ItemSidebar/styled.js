import Styled from 'styled-components';
import colors from "../../../../helpers/Colors";
import { Link } from "react-router-dom";
import Colors from '../../../../helpers/Colors';

export const SidebarLink = Styled(Link)`
  display: flex;
  color: ${colors.white};
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  list-style:none;
  height: 60px;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  

  &:hover {
    background-color: ${Colors.tertiary};
    border-left: 4px solid ${Colors.inforOne};
    cursor: pointer;
  }
`;

export const SidebarLabel = Styled.span`
  margin-left: 16px;
  font-weight: bold;
`;

export const DropdownLink = Styled(Link)`
  @keyframes slide {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }  
  background: ${Colors.quaternary};
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colors.white};
  font-size: 18px;
  animation: slide 0.5s ease-in-out;
  &:hover {
    background: ${Colors.inforOne};
    cursor: pointer;
  }
`;