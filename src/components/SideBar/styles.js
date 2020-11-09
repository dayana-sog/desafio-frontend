import styled from 'styled-components';

export const Container = styled.aside`
  width: 19%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid rgba(0, 0, 0, 0.3);
`;

export const HeaderSideBar = styled.div`
  padding: 25px;
  margin-top: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;


export const ButtonsSidebar = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 80%;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #333;
    padding: 20px;
    span {
      margin-left: 20px;
      font-weight: 600;
      font-size: 16px;
    }

    &:hover {
      border-left: 10px solid #85D3D6;
      background: #F2FAFB;
    } 
  }
`;

export const FooterSideBar = styled.footer`
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  span {
    margin-left: 20px;
    font-weight: 400;
    font-size: 16px;
  }
`;