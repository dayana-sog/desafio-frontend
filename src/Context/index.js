import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const Context = createContext({});

function Provider({ children }) {
  const [customers, setCustumers] = useState([]);
  const [customersLength, setCustumersLength] = useState('');
  const [statusOverdue, setStatusOverdue] = useState('');
  const [statusPaying, setStatusPaying] = useState('');
  const [total, setTotal] = useState('');
  const [customerSearch, setCustumerSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function load() {
      const response = await api.get('/customers');
      const overdue = customers.filter(customer => customer.status === 'overdue');
      const paying = customers.filter(customer => customer.status === 'paying');
      const total = customers.reduce(
        (prev, next) => prev + next.subscription_amount,
        0
      );

      setCustumers(response.data);
      setCustumersLength(customers.length);
      setStatusOverdue(overdue.length);
      setStatusPaying(paying.length);
      setTotal(total);
    })()
  }, [customers.length]);


  function handleSearch(e) {
    setLoading(true);

    const search = customers.filter(customer => customer.name.toLowerCase().includes(e));
    
    setCustumerSearch(search);
    setLoading(false);
  }

  return (
    <Context.Provider value={{
      customers,
      customersLength,
      statusOverdue,
      statusPaying,
      total,
      handleSearch,
      loading,
      customerSearch
    }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };