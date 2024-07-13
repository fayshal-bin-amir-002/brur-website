import Container from "../shared/Container";
import img from "../../assets/student.jpg";
import { Link } from "react-router-dom";

const StudentCorner = () => {
    return (
        <div className="py-12 md:py-16 lg:py-24">
            <Container>
                <div className="mb-8 lg:mb-10">
                    <h3 className="text-3xl md:text-4xl font-semibold mb-3">Student Corner</h3>
                    <p className="opacity-80">Stay up to date with your favorite BRUR teams wherever you are!</p>
                </div>
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
                    <Link className="w-full lg:w-1/2 group">
                        <div className="bg-gray-200 p-5 rounded shadow lg:translate-x-10">
                            <p className="mb-4 opacity-80">2023-08-17</p>
                            <h3 className="text-xl lg:text-2xl font-medium text-[#055b8e] group-hover:text-orange-600 mb-4">BRUR STUDENT AWARDED WITH PRIME MINISTER GOLD MEDAL AWARD</h3>
                            <p className="opacity-80">Six (06) Students of Begum Rokeya University, Rangpur achieved Prime Minister Gold Medal Award 2017 on July 25 2018. University Grant Commission (UGC) gives this award on the basis of extra-ordinary result of students in....</p>
                        </div>
                    </Link>
                    <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
                        <img src={img} alt="" className="w-full h-full" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StudentCorner;