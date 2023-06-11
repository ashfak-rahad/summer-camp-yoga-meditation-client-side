import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import LoadingSpinner from '../../spinner/LoadingSpinner';





const RequiredLogin = ({children}) => {
    const {loading, user} = useAuth()
    const location = useLocation();
    if(loading){
        return <LoadingSpinner/>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace/>;
};

export default RequiredLogin;