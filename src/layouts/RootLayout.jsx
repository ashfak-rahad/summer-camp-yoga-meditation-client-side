import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';

const RootLayout = () => {
    return (
        <main>
            <Navbar/>
            <Outlet/>
        </main>
    );
};

export default RootLayout;