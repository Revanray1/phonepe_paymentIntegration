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
    return <h1>Payment Page</h1>;
};

export default PaymentPage;
