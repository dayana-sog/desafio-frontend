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

  .notification {
    width: 25px;
    height: 30px;
    align-self: center;
  }
`;

export const HeaderInput = styled.div`
  position: relative;

  input {
    padding: 15px;
    width: 700px;
    border-radius: 40px;
    border: 0.1px solid rgba(0, 0, 0, 0.1);

    &::placeholder {
      padding-left: 30px;
    }   

    &:focus {
      svg {
        display: none;
      }
    }
  }

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


export const CustomerSearch = styled.ul`
  display: grid;
    grid-row-gap: 15px;

    list-style-type:none;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 15px 25px;
      background: #fff;
      box-shadow: 0.2px 0.2px #888888;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }

      .overdue {
        color: red;
      }

      .paying {
        color: #38A549;
        
      }
    }
`;