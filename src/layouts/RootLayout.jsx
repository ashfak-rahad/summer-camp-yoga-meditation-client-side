import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <main>
            <Navbar/>
            <div className='mt-[80px] mx-auto'><Outlet/></div>
            <Footer/>
        </main>
    );
};

export default RootLayout;