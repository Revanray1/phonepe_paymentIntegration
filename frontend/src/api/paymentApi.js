import axiosInstance from './config';

export const initiatePayment = async (amount) => {
    try {
        const response = await axiosInstance.post(`/pay`, {
                amount:amount
         });
        return response.data; 
    } catch (error) {
        console.error('Error fetching customer files:', error);
        throw error; 
    }
};


