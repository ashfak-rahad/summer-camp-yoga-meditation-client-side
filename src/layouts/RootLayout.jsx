import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';

const RootLayout = () => {
    return (
        <main>
            <Navbar/>
            <div className='mt-[80px] mx-auto'><Outlet/></div>
        </main>
    );
};

export default RootLayout;