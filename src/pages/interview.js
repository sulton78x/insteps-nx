import Link from "next/link";
import {
	Download,
	Facebook,
	Instagram,
	Linkedin,
	Twitter,
} from "react-feather";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuestionCard from "../utilities/QuestionCard";

const Interview = () => {
	return (
		<div>
			{/* <Header /> */}
			<div className='bg-lighterGreen py-10 px-5'>
				<h2 className='text-gray font-semibold'>
					Cheatsheets / Learn HTML
				</h2>
				<div className=' flex flex-col justify-center  w-full items-center'>
					<h3 className='text-darkGreen font-bold my-2 text-3xl'>
						Javascript
					</h3>
					<button className='flex justify-center items-center gap-2 whitespace-nowrap bg-darkGreen py-2 p-4 rounded-lg text-white my-2 md:my-3 sm:my-4'>
						<span>
							<Download />
						</span>
						Donwload Cheatsheet
					</button>
					<div className='flex space-x-6 mt-10 '>
						<div className='p-2 sm:p-3 md:p-4 rounded-full bg-blue'>
							<Facebook className='text-white' />
						</div>
						<div className='p-2 sm:p-3 md:p-4 rounded-full bg-instagram'>
							<Instagram className='text-white' />
						</div>
						<div className='p-2 sm:p-3 md:p-4 rounded-full bg-linkedIn'>
							<Linkedin className='text-white' />
						</div>
						<div className='p-2 sm:p-3 md:p-4 rounded-full bg-twitter'>
							<Twitter className='text-white' />
						</div>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className='flex gap-3 my-5 mx-3'>
				{/* Sidebar */}
				<div className='hidden sm:inline-flex text-xs sm:text-sm md:text-lg leading-none whitespace-nowrap'>
					<div className='rounded-lg overflow-hidden'>
						<p className='bg-darkGreen p-2 font-semibold'>
							<label id='lang'>Languages</label>
						</p>
						<div className='bg-midGray p-2'>
							<p>
								<input type='radio' id='' /> Web Development
							</p>
							<p>
								<input type='radio' id='' /> Javascript
							</p>
							<p>
								<input type='radio' id='' /> Data Science
							</p>
							<p>
								<input type='radio' id='' /> Python
							</p>
							<p>
								<input type='radio' id='' /> Web Development
							</p>
							<p>
								<input type='radio' id='' /> Javascript
							</p>
							<p>
								<input type='radio' id='' /> Data Science
							</p>
							<p>
								<input type='radio' id='' /> Python
							</p>
							<p>
								<input type='radio' id='' /> Web Development
							</p>
							<p>
								<input type='radio' id='' /> Javascript
							</p>
							<p>
								<input type='radio' id='' /> Data Science
							</p>
							<p>
								<input type='radio' id='' /> Python
							</p>
						</div>
					</div>
				</div>
				{/* Main Content */}
				<div className='w-full'>
					<ul className='flex justify-between items-center  bg-midGray rounded-lg whitespace-nowrap overflow-hidden shadow-md'>
						<li>Beginner</li>
						<li>Intermediate</li>
						<li>Expert</li>
					</ul>
					{/* Interview Questions */}
					<div className='bg-lightGreen md:mx-4 sm:mx-8 px-5 rounded-lg py-10 my-4 md:my-8'>
						<h2 className='font-bold text-xl text-darkGray text-center mb-3'>
							Top Interview Questions
						</h2>
						<div className='text-center'>
							<select className='px-3 py-2 rounded-lg my-3 outline-none'>
								<option>Javascript</option>
								<option>Python</option>
								<option>Web Development</option>
								<option>Data Science</option>
							</select>
						</div>

						<div className=''>
							<div className=''></div>

							<h3 className='text-darkGray font-bold text-xl my-2'>
								Questions
							</h3>

							<div>
								<QuestionCard
									questionNo='1'
									question='What will be the result of `console.log(x * 5)?'
								/>
								<QuestionCard
									questionNo='2'
									question='What will be the result of `console.log(x * 5)?'
								/>
								<QuestionCard
									questionNo='3'
									question='What will be the result of `console.log(x * 5)?'
								/>
								<QuestionCard
									questionNo='4'
									question='What will be the result of `console.log(x * 5)?'
								/>
								<QuestionCard
									questionNo='5'
									question='What will be the result of `console.log(x * 5)?'
								/>
								<QuestionCard
									questionNo='6'
									question='What will be the result of `console.log(x * 5)?'
								/>
								<QuestionCard
									questionNo='7'
									question='What will be the result of `console.log(x * 5)?'
								/>
								<QuestionCard
									questionNo='8'
									question='What will be the result of `console.log(x * 5)?'
								/>
								<QuestionCard
									questionNo='9'
									question='What will be the result of `console.log(x * 5)?'
								/>
								<QuestionCard
									questionNo='10'
									question='What will be the result of `console.log(x * 5)?'
								/>
							</div>

							<Link href='/'>
								<a className='text-blue font-semibold text-lg'>
									View More Questions
								</a>
							</Link>
						</div>
					</div>

					{/* Interview Articles */}
					<div>
						<h4 className='font-bold text-xl text-darkGray'>
							More Articles
						</h4>
						<div>{/* Video Frames */}</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Interview;
