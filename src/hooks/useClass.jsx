import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "../context/AuthProvider";

const useClass = (id) => {
    const {user, loading} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    const {data: singleClass = {}} = useQuery({
        queryKey: ['class', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/class/${id}`)
            return res.data
        }
    })
    return {singleClass}
};

export default useClass;