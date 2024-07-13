import Container from "../shared/Container";
import img1 from "../../assets/award1.jpg";
import img2 from "../../assets/award2.jpg";
import img3 from "../../assets/student.jpg";
import { Link } from "react-router-dom";

const Award = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                <Link>
                    <div className="relative group overflow-hidden h-[250px]">
                        <img src={img1} alt="" className="w-full h-full object-cover group-hover:scale-105 duration-1000" />
                        <h4 className="w-[90%] uppercase absolute bottom-0 left-0 p-2 bg-[#29abe2] duration-300 text-white group-hover:bg-white group-hover:text-[#29abe2]">icpc: divisional champion...</h4>
                    </div>
                </Link>
                <Link>
                    <div className="relative group overflow-hidden h-[250px]">
                        <img src={img2} alt="" className="w-full h-full object-cover group-hover:scale-105 duration-1000" />
                        <h4 className="w-[90%] uppercase absolute bottom-0 left-0 p-2 bg-[#29abe2] duration-300 text-white group-hover:bg-white group-hover:text-[#29abe2]">2nd runner up at sbys!</h4>
                    </div>
                </Link>
                <Link>
                    <div className="relative group overflow-hidden h-[250px]">
                        <img src={img3} alt="" className="w-full h-full object-cover group-hover:scale-105 duration-1000" />
                        <h4 className="w-[90%] uppercase absolute bottom-0 left-0 p-2 bg-[#29abe2] duration-300 text-white group-hover:bg-white group-hover:text-[#29abe2]">brur student award with...</h4>
                    </div>
                </Link>
            </div>
        </Container>
    );
};

export default Award;