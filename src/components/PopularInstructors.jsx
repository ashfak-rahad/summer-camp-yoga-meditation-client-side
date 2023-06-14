import { useQuery } from "react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import InstructorCard from "../dashboard/pages/InstructorCord";




const PopularInstructors = () => {
    const {axiosSecure} = useAxiosSecure()
    const {data: instructors = []} = useQuery({
        queryKey: ["popular-instructor"],
        queryFn: async () => {
            const res = await axiosSecure.get("/popular-instructors")
            return res.data
        }
    })
    return (
        <section className="container mt-[140px]">
           
            <div className="grid md:grid-cols-4 gap-5">
                {
                    instructors.map(instructor => <InstructorCard key={instructor._id} ins={instructor}/>)
                }
            </div>
        </section>
    );
};

export default PopularInstructors;