import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import img404 from "../../public/images/img404.png";

const _404 = () => {
	return (
		<div>
			<Header />
			<div className='dark:bg-darkGray p-2 md:p-20'>
				<Image src={img404} layout='responsive' objectFit='cover' />
			</div>
			<Footer />
		</div>
	);
};

export default _404;
