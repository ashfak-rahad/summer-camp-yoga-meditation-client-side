import usePayment from "../../hooks/usePayment";

import PaymentHistoryTable from "../components/PaymentHistoryTable";



const PaymentHistory = () => {
   
    const {paymentHistory} = usePayment()

    
    return (
        <main className='h-screen overflow-hidden'>
        <section  className='h-[650px] mt-2 overflow-x-auto relative'>
            <table className='w-full'>
                <thead >
                    <tr className='bg-indigo-600 sticky top-0 px-10'>
                        <th className='py-3  text-white'></th>
                        <th className='py-3  text-white'>Transaction Id</th>
                        <th className='py-3  text-white'>Price</th>
                        <th className='py-3  text-white'>Payment Date</th>
                    </tr>
                </thead>
                <tbody >

                    {
                        paymentHistory && paymentHistory.map((payment, i) => <PaymentHistoryTable key={payment._id} payment={payment} i={i}/>)
                    }
                    
                </tbody>
            </table>
        </section>
    </main>
    );
};

export default PaymentHistory;