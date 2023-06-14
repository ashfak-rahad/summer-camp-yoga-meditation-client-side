
import {motion} from "framer-motion"
import useAuthorization from "../hooks/useAuthorization";

const ClassCard = ({singleClass, seletedClass}) => {
    const {role} = useAuthorization()
    const {class_name, class_image, instructor_name,  instructor_email, avilable_seats, price} = singleClass
    return (        
        <motion.article 
            whileHover={{boxShadow: "0px 0px 8px #F0582C"}}
        className={`${avilable_seats === 0 ? "bg-red-950 bg-opacity-40": ""} p-4 border overflow-hidden rounded-md shadow-md relative`}>
            <div className="overflow-hidden">
                <motion.img 
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                whileHover={{scale: 1.1}}
                transition={{type: "spring", stiffness: 120}}
                src={class_image} alt="" />
            </div>
            <div >
                <motion.h2 
                initial={{x: "-100vw"}}
                animate={{x: 0}}
                className='text-xl font-bold my-2 text-center'>{class_name}</motion.h2>
                <motion.p 
                initial={{x: "100vw"}}
                animate={{x: 0}}
                className='text-center'><span className='font-bold'>instructor name: </span> {instructor_name}</motion.p>
                <motion.p 
                initial={{x: "-100vw"}}
                animate={{x: 0}}
                className='text-center'><span className='font-bold'>instructor email: </span> {instructor_email}</motion.p>
                <motion.p 
                initial={{x: "100vw"}}
                animate={{x: 0}}
                className='text-center'><span className='font-bold'>avilable seats: </span> {avilable_seats}</motion.p>
                <motion.p 
                initial={{x: "-100vw"}}
                animate={{x: 0}}
                className='text-center mb-16'><span className='font-bold'>price: </span> ${price}</motion.p>
            </div>
            <motion.button 
                whileHover={{fontSize: '20px',boxShadow: "0px 0px 8px #F0582C"}}
                disabled={role === "admin" || role === "instructor" || avilable_seats === 0} onClick={() => seletedClass(singleClass)} className={`${role === "admin" || role === "instructor" || avilable_seats === 0 ? "opacity-25 cursor-not-allowed" : ""} bg-indigo-600 px-8 py-2 rounded text-white block my-4 absolute bottom-0 left-0 right-0 mx-4`}>Select</motion.button>
        </motion.article>
    );
};

export default ClassCard;