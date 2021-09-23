import { useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "react-feather";

const Footer = () => {
	const [newsInput, setNewsInput] = useState("");

	return (
		<footer className='px-5 md:px-10 bg-darkGreen dark:bg-black text-white py-5 font-poppins'>
			<h2 className=' text-center font-bold text-xl leading-none'>W3</h2>
			<h3 className=' text-center font-bold text-xl leading-none mb-5'>
				Interviews
			</h3>
			<div className='grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-5 md:gap-10 mb-3 sm:mb-7 md:mb-10'>
				{/* Tutorials */}
				<div className='text-xs sm:text-sm md:text-lg space-y-1'>
					<h2 className='font-bold mb-1'>Tutorials</h2>
					<h3>Javascript Tutorial</h3>
					<h3>C Tutorial</h3>
					<h3>Java Tutorial</h3>
					<h3>Kotlin Tutorial</h3>
					<h3>C++ Tutorial</h3>
					<h3>Swift Tutorial</h3>
					<h3>C# Tutorial</h3>
					<h3>Web Development Tutorial</h3>
					<h3>Data Science Tutorial</h3>
				</div>
				{/* Examples */}
				<div className='text-xs sm:text-sm md:text-lg space-y-1'>
					<h2 className='font-bold mb-1'>Examples</h2>
					<h3>Javascript Examples</h3>
					<h3>C Examples</h3>
					<h3>Java Examples</h3>
					<h3>Kotlin Examples</h3>
					<h3>C++ Examples</h3>
					<h3>Swift Examples</h3>
					<h3>C# Examples</h3>
					<h3>Web Development Examples</h3>
					<h3>Data Science Examples</h3>
				</div>
				{/* Company */}
				<div className='text-xs sm:text-sm md:text-lg space-y-1'>
					<h2 className='font-bold mb-1'>Company</h2>
					<h3>About</h3>
					<h3>Privacy Policy</h3>
					<h3>Terms &amp; Conditions</h3>
					<h3>Blog</h3>
				</div>
				{/* Apps */}
				<div className='text-xs sm:text-sm md:text-lg space-y-1'>
					<h2 className='font-bold mb-1'>Apps</h2>
					<h3>Learn Python</h3>
					<h3>Learn C Programming</h3>
					<h3>Learn Javascript</h3>
				</div>
			</div>
			{/* Newsletter */}
			<div>
				<p className='text-xs sm:text-sm md:text-lg font-semibold mb-2'>
					Join our newsletter for the latest updates.
				</p>
				<div className='flex items-center mb-3 overflow-hidden'>
					<input
						type='email'
						className='outline-none p-2 md:p-3 rounded-l-lg text-darkGray w-64 md:w-80'
						placeholder='enter email address'
						value={newsInput}
						onChange={e => setNewsInput(e.target.value)}
					/>
					<button className='p-2 md:p-3 bg-blue outline-none font-semibold rounded-r-lg'>
						Join
					</button>
				</div>
			</div>
			{/* ************ */}
			<div>
				<hr className='bg-white rounded-lg my-2 sm:my-3 md:my-4' />
				<div className='text-xs sm:text-sm md:text-lg'>
					<div className='flex items-center justify-between '>
						<p>
							Insteps Pvt. All Rights Reserved &copy;{" "}
							{new Date().getFullYear()}
						</p>
						<div className='flex items-center space-x-1 sm:space-x-5 md:space-x-10'>
							<Facebook className='inline h-3 sm:h-5 md:h-9' />
							<Instagram className='inline h-3 sm:h-5 md:h-9' />
							<Twitter className='inline h-3 sm:h-5 md:h-9' />
							<Linkedin className='inline h-3 sm:h-5 md:h-9' />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
