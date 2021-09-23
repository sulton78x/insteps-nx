import Image from "next/image";
import Button from "../utilities/Button";
import adImg from "../../public/images/adImg.png";

const Ad = () => {
	return (
		<div className='sm:flex sm:items-center my-5 md:my-10'>
			<div className='bg-yellow-200 h-auto w-auto'>
				<Image src={adImg} layout='responsive' alt='' objectFit='' />
			</div>
			<div className='bg-lightGreen py-10 px-10'>
				<h3 className='text-darkGray font-bold text-3xl mb-3'>
					Join W3 Interviews
				</h3>
				<p className='text-darkGray'>
					Sign up to avail the benefits of downloading unlimited
					questions and answers guide for your interviews. We also
					have opportunities of content writers and professionals who
					want to earn with their writing skills. Hurry up!{" "}
				</p>
				<Button text='Join us Today' />
			</div>
		</div>
	);
};

export default Ad;
