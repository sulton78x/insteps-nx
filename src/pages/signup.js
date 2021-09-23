import { useState } from "react";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Twitter } from "react-feather";
import loginImg from "../../public/images/loginImg.png";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<div className='flex items-center'>
			<div className='hidden sm:inline-flex h-screen w-full'>
				<Image src={loginImg} alt='Image' objectFit='cover' />
			</div>
			<div className='font-poppins h-screen w-full px-10 sm:px-14 md:px-20 py-5'>
				<h3 className='font-bold text-3xl text-darkGray'>
					Get <span className='text-darkGreen'>Started</span>
				</h3>
				<form>
					<div className='flex flex-col'>
						<label>Name / Username</label>
						<input
							value={name}
							type='text'
							className='border-2 border-darkGreen rounded-lg outline-none px-3 py-2 my-3'
							onChange={e => setName(e.target.value)}
							type='text'
						/>
					</div>
					<div className='flex flex-col'>
						<label>Email</label>
						<input
							value={email}
							type='email'
							className='border-2 border-darkGreen rounded-lg outline-none px-3 py-2 my-3'
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex flex-col'>
						<label>Password</label>
						<input
							value={password}
							type='password'
							className='border-2 border-darkGreen rounded-lg outline-none px-3 py-2 my-3'
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className='flex flex-col'>
						<label>Confirm Password</label>
						<input
							value={confirmPassword}
							type='password'
							className='border-2 border-darkGreen rounded-lg outline-none px-3 py-2 my-3'
							onChange={e => setConfirmPassword(e.target.value)}
						/>
					</div>
					<button className='bg-darkGreen py-3 w-full text-white rounded-lg my-5 font-bold'>
						Sign Up
					</button>
				</form>
				<p>or sign up with. </p>
				<div className='w-full justify-center flex space-x-6 mt-10'>
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
	);
};

export default Signup;
