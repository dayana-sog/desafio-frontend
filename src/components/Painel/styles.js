import styled from 'styled-components';

export const Container = styled.article`
  padding: 30px;
  background: #E5E5E5;
  height: 89vh;
  
`;

export const Geral = styled.div`
  color: #333;

  h1 {
    font-size: 18px;
    color: #333;
    border-left: 4px solid #5595C6;
    padding-left: 15px;
  }

  ul {
    margin: 30px 0;
    list-style-type:none;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    li {
      padding: 15px 30px;
      background: #fff;
      font-size: 18px;
      box-shadow: 0.2px 0.2px #888888;

      p {
        margin-bottom: 10px;
      }

      strong {
        color: #5595C6;
        font-size: 25px;
      }
    }
  }

`;
export const Costumers = styled.div`
  margin-top: 55px;

  h1 {
    font-size: 18px;
    color: #333;
    border-left: 4px solid #5595C6;
    padding-left: 15px;
    margin-bottom: 30px;
  }

  ul {
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
  }

  .scroll {
    height: 425px;
  }
`;
