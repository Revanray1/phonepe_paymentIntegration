import React from 'react';
import { useParams } from 'react-router-dom';

const RedirectPage = () => {
  const { merchantTransactionId } = useParams();

  return <h1>Redirect Page for Transaction ID: {merchantTransactionId}</h1>;
};

export default RedirectPage;
