import React, { useContext } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import { formatPrice } from '../../util/fortmatPrice';
import { Context } from '../../Context';

import {
  Container,
  Geral,
  Costumers,
} from './styles';

function Painel() {
  const { 
    customersLength, 
    customers,
    statusOverdue,
    statusPaying, 
    total
  } = useContext( Context );

  return (
    <Container>
      <Geral>
        <h1>Visão geral</h1>

        <div>
          <ul>
            <li>
              <p>Total de clientes</p>
              <strong>{customersLength}</strong>
            </li>

            <li>
              <p>Clientes inadiplentes</p>
              <strong>{statusOverdue}</strong>
            </li>

            <li>
              <p>Clientes adimplentes</p>
              <strong>{statusPaying}</strong>
            </li>

            <li>
              <p>Total arrecadado</p>
              <strong>{formatPrice(total)}</strong>
            </li>
          </ul>
        </div>
      </Geral>

      <Costumers>
        <h1>Clientes cadastrados</h1>

        <ScrollToBottom
          className="scroll"
        >
          <ul>
            {customers.map(customer => (
              <li key={customer.name}>
                <img src={customer.profile_url} alt={customer.name} />
                <p>{customer.name}</p>
                <p>{customer.email}</p>
                <p>{customer.phone}</p>
                <span 
                  className={customer.status === 'overdue' ? 'overdue' : 'paying' } 
                >{customer.status === 'overdue' ? 'Inadimplente' : 'Adimplente' }</span>
              </li>
            ))}
          </ul>
        </ScrollToBottom>
      </Costumers>
    </Container>
  );
}

export default Painel;