import Marquee from "react-fast-marquee";
import Container from "../shared/Container";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NoticeMarque = () => {
    return (
        <Container>
            <div className="border rounded border-red-400 p-5">
                <Marquee pauseOnHover={true}>
                <span className="flex justify-center items-center gap-1 cursor-pointer text-lg text-gray-700 mr-10"><RiErrorWarningFill className="text-[#29abe2] text-lg" /> বেরোবি সাপ্তাহিক ছুটির নোটিস। <Link className="text-[#055b8e] font-medium hover:underline">More Details...</Link></span>
                </Marquee>
            </div>
        </Container>
    );
};

export default NoticeMarque;