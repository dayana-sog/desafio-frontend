import React from 'react';
import { BsChatDotsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import painel from '../../assets/icon1.png';
import settings from '../../assets/icon2.png';

import { 
  Container,
  HeaderSideBar,
  ButtonsSidebar,
  FooterSideBar
} from './styles';

function SideBar() {
  return (
    <Container>
      <HeaderSideBar>
        <img src={logo} alt="logo"/>
      </HeaderSideBar>
      <ButtonsSidebar className="buttons-sidebar">
        <Link to="/dashboard/painel" className="buttons-sidebar__painel">
          <img src={painel} alt="logo"/>
          <span>Painel</span>
        </Link>
        <Link to="/dashboard/config" className="buttons-sidebar__conf">
          <img src={settings} alt="logo"/>
          <span>Configuração</span>
        </Link>
      </ButtonsSidebar>
      <FooterSideBar>
        <BsChatDotsFill size={25} color="#40B6BF" />
        <span>Suporte</span>
      </FooterSideBar>
    </Container>
  );
}

export default SideBar;