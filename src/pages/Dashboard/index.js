import React from 'react';
import { MdSearch } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar';

import notification from '../../assets/notification.png';
import user from '../../assets/avatar-admin.png';

import {
  Container,
  WrapperDash,
  Header,
  HeaderInput,
  User
} from './styles';

function Home() {

  return (
    <Container>
      <SideBar />

      <WrapperDash>
        <Header>
          <HeaderInput>
            <MdSearch size={30} color="#333" />
            <input
              type="text"
              placeholder="Busque por clientes"
              onChange={() => { }}
            />
          </HeaderInput>

          <img src={notification} alt="notification" className="notification" />

          <User>
            <img src={user} alt="user" />
            <RiArrowDownSLine size={28} color="#333" />
          </User>
        </Header>

        <Outlet />
      </WrapperDash>
    </Container>
  );
}

export default Home;