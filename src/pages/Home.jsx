import Award from "../components/Home/Award";
import Banner from "../components/Home/Banner";
import NewsFeatures from "../components/Home/NewsFeatures";
import NoticeMarque from "../components/Home/NoticeMarque";
import StudentCorner from "../components/Home/StudentCorner";
import Divider from "../components/shared/Divider";
import NavBar from "../components/shared/NavBar";

const Home = () => {
    return (
        <>
            <div className="w-full h-2 mainBg"></div>
            <NavBar></NavBar>
            <Divider></Divider>
            <Banner></Banner>
            <NoticeMarque></NoticeMarque>
            <StudentCorner></StudentCorner>
            <Award></Award>
            <NewsFeatures></NewsFeatures>
        </>
    );
};

export default Home;