import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const Context = createContext({});

function Provider ({ children }) {
  const [customers, setCustumers] = useState([]);
  const [customersLength, setCustumersLength] = useState('');
  const [statusOverdue, setStatusOverdue] = useState('');
  const [statusPaying, setStatusPaying] = useState('');

  useEffect(() => {
    (async function load() {
      const response = await api.get('/customers');
      const overdue = customers.filter(customer => customer.status === 'overdue');
      const paying = customers.filter(customer => customer.status === 'paying');
      const total = customers.reduce(
        (prev, next) => prev + next.subscription_amount,
        0
      );

      console.log('Total', total);
      
      setCustumers(response.data);
      setCustumersLength(customers.length);
      setStatusOverdue(overdue.length);
      setStatusPaying(paying.length);
    })()
  }, [customers.length]);



  return (
    <Context.Provider value={{ customers, customersLength, statusOverdue, statusPaying }}>
      {children}
    </Context.Provider>
  );
};

export {Context, Provider};