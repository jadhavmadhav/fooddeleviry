import { useLocation } from "react-router-dom";


const PaymentGatWay = () => {

    const Data = useLocation()

    const { GrandTotal } = Data?.state
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

            <h1 style={{ color: 'green' }}>{Math.round(GrandTotal)}</h1>

            <h3 style={{ color: 'red' }}> Integration with UPI Payment GatWay </h3>

        </div>
    );
}

export default PaymentGatWay;
