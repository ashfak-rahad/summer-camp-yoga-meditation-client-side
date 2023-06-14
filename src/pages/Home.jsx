import Banner from "../components/Banner";
import PopularClasses from "../components/PopularClasses";
import PopularInstructors from "../components/PopularInstructors";
import Subscribe from "../components/Subscribe";


const Home = () => {
    return (
        <main>

            <Banner/>
            <PopularInstructors/>
            <PopularClasses/>
            <Subscribe/>
        </main>
    );
};

export default Home;