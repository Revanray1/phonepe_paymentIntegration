import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initiatePayment } from '../api/paymentApi'


const PaymentPage = () => {
    const navigate = useNavigate();

    const fetchInitiatePayment = async () => {
        try {
            const response = await initiatePayment()
            console.log(response)
            // navigate(response)
            window.location.href = response
        } catch (err) {
            console.error('Error fetching claim data:', err)
        }
    }

    useEffect(() => {
        fetchInitiatePayment()
    }, [])
    return (
        <div className='container'>
            <h1>Payment Page</h1>
            <button onClick={fetchInitiatePayment}>Pay Now</button>

        </div>
    );
};

export default PaymentPage;
