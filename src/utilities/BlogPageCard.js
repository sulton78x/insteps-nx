import Image from "next/image";
import { Calendar, Heart } from "react-feather";
import checkoutImg from "../../public/images/checkoutImg.png";
import profilePic from "../../public/images/messi.jpg";

const BlogPageCard = () => {
	return (
		<div className='border-2 m-4 rounded-lg border-lightGreen shadow-md p-4 w-80'>
			<div className='relative rounded-lg mb-3 overflow-hidden'>
				<Image src={checkoutImg} alt='' layout='responsive' />
			</div>
			<div className='flex items-end justify-between my-2'>
				<div className='flex items-end gap-3'>
					<div className='w-12 h-12 rounded-full relative overflow-hidden'>
						<Image src={profilePic} alt='' layout='responsive' />
					</div>
					<p>Jason Williams</p>
				</div>
				<p className='bg-lightGreen text-darkGreen rounded-lg py-2 px-5 font-semibold outline-none'>
					Science
				</p>
			</div>
			<h3 className='font-bold text-xl my-3'>
				Data Science and Machine Learning
			</h3>
			<div className='flex justify-between items-center my-3'>
				<span className='flex items-center gap-2'>
					<Calendar className='text-darkGreen' /> 21, March 2021
				</span>
				<span className='flex items-center gap-2'>
					<Heart className='text-darkGreen' /> 2,568+
				</span>
			</div>
			<div className='flex justify-center w-full'>
				<button className='border-2 text-center border-darkGreen rounded-lg bg-lightGreen py-2 px-5 text-darkGreen outline-none font-bold mt-3'>
					Read More
				</button>
			</div>
		</div>
	);
};

export default BlogPageCard;
