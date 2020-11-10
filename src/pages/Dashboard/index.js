import React, { useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar';
// import Lottie from 'lottie-react-web';

// import animation from '../../loading.json';
import notification from '../../assets/notification.png';
import user from '../../assets/avatar-admin.png';

import { Context } from '../../Context';

import {
  Container,
  WrapperDash,
  Header,
  HeaderInput,
  User,
  CustomerSearch
} from './styles';

function Home() {
  const {
    handleSearch,
    customerSearch,
    customers,
    loading
  } = useContext(Context);

  console.log(loading);

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
              onChange={e => handleSearch(e.target.value)}
            />
          </HeaderInput>

          <img src={notification} alt="notification" className="notification" />

          <User>
            <img src={user} alt="user" />
            <RiArrowDownSLine size={28} color="#333" />
          </User>
        </Header>

        {customerSearch.length === customers.length?
          <Outlet />
          :
          customerSearch.map(search => (
            <CustomerSearch key={search.name}>
              <li>
                <img src={search.profile_url} alt={search.name} />
                <p>{search.name}</p>
                <p>{search.email}</p>
                <p>{search.phone}</p>
                <span
                  className={search.status === 'overdue' ? 'overdue' : 'paying'}
                >{search.status === 'overdue' ? 'Inadimplente' : 'Adimplente'}</span>
              </li>
            </CustomerSearch>
          ))}

      </WrapperDash>
    </Container>
  );
}

export default Home;