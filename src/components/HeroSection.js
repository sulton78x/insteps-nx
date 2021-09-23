import Button from "../utilities/Button";
import Image from "next/image";
import heroImg03 from "../../public/images/heroImg030.jpg";

const HeroSection = () => {
	return (
		<div className='bg-lightGreen dark:bg-darkGreen dark:text-white sm:flex md:flex items-center h-screen overflow-hidden'>
			<div className='py-10 px-10 sm:px-8 md:px-10'>
				<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-darkGray leading-none'>
					Kill your <br /> Tech{" "}
					<span className='text-darkGreen dark:text-white border-b-4 border-white'>
						Interviews
					</span>
				</h1>
				<h2 className='my-5 font-medium md:pr-10 pt-5'>
					With 10,000+ Full-Stack, System Design Devops, Cloud and
					Coding Interviews Questions, answered to get your next
					6-figure job offer.
				</h2>
				<Button text='Start Today' />
			</div>
			<div className='w-full h-full  overflow-hidden'>
				<Image src={heroImg03} layout='responsive' className='' />
			</div>
		</div>
	);
};

export default HeroSection;
