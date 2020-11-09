import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const WrapperDash = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 23.5px;

  input {
    padding: 15px;
    width: 700px;
    border-radius: 40px;
    border: 0.1px solid rgba(0, 0, 0, 0.1);

    &::placeholder {
      padding-left: 30px;
    }
  }

  .notification {
    width: 25px;
    height: 30px;
    align-self: center;
  }
`;

export const HeaderInput = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 15px;
    top: 10px;

  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;

    margin-right: 10px;
  }

`;
