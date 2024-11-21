import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initiatePayment } from '../api/paymentApi'


const PaymentPage = () => {
    const [amount,setAmount] =useState("")
    const navigate = useNavigate();

    const fetchInitiatePayment = async () => {
        try {
            const response = await initiatePayment({amount})
            console.log(response)
            // navigate(response)
            window.location.href = response
        } catch (err) {
            console.error('Error fetching claim data:', err)
        }
    }

    // useEffect(() => {
    //     // fetchInitiatePayment()
    // }, [])
    return (
        <div className='container' style={{ textAlign: "center" }}>
            <h1 className='font-weight-bold'>Payment Page</h1>

            <form>
                <div class="form-group row">
                    <label  class="col-sm-2 col-form-label font-weight-bold">AMOUNT</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" placeholder="Enter the amount" value={amount}  onChange={(e)=>setAmount(e.target.value)}/>
                    </div>
                </div>
            </form>
            <div className='p-4'>
             <button type='button' class='btn btn-success' onClick={()=>fetchInitiatePayment()}>Pay Now</button>
            </div>

        </div>
    );
};

export default PaymentPage;
