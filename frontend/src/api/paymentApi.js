import axiosInstance from './config';

export const initiatePayment = async () => {
    try {
        const response = await axiosInstance.get(`/pay`, {
            // params: {
            //     FileName:FileName
            // }
         });
        return response.data; 
    } catch (error) {
        console.error('Error fetching customer files:', error);
        throw error; 
    }
};



