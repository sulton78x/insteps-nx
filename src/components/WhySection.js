import { Terminal, Code } from "react-feather";

const WhySection = () => {
	return (
		<div className='px-10 text-center my-5'>
			<h3 className='text-2xl font-semibold text-darkGray'>
				Why In<span className='text-darkGreen'>steps</span> ?
			</h3>
			<div className='sm:flex sm:flex-wrap sm:justify-center md:grid md:grid-cols-3 md:gap-8 space-y-5'>
				<div>
					<Terminal className='inline text-6xl font-bold text-darkGreen' />
					<h4 className='font-semibold my-3'>
						Programming made easy
					</h4>
					<p>
						We focus on simplicity, Programming tutorials and
						examples written in simple, understandable language for
						beginners.
					</p>
				</div>
				<div>
					<Terminal className='inline text-darkGreen' />
					<h4 className='font-semibold my-3'>
						Content you can Trust
					</h4>
					<p>
						A dedicated group of experts continually working to
						create programming resources that are accurate and
						easier to understand.
					</p>
				</div>
				<div>
					<Code className='inline text-darkGreen' />
					<h4 className='font-semibold my-3'>Learn by Doing</h4>
					<p>
						The only way to learn to program is by writing code. We
						provide a bunch of complete examples for you to follow
						so you can start writing and running code on your own.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhySection;
