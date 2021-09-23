import { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import loginImg from "../../public/images/loginImg.png";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className='flex items-center font-poppins'>
			<div className='hidden sm:inline-flex h-screen w-full'>
				<Image src={loginImg} alt='Image' objectFit='cover' />
			</div>

			<div className='h-screen w-full px-10 sm:px-14 md:px-20 py-20'>
				<h3 className='text-3xl font-bold text-darkGray mb-5'>
					Log<span className='text-darkGreen'>in</span>
				</h3>
				<form className=''>
					<div className='flex flex-col'>
						<label>Email / Username</label>
						<input
							type='text'
							placeholder='kinmaker.ktk@gmail.com'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='border-2 border-darkGreen rounded-lg outline-none px-3 py-2 my-3'
						/>
					</div>
					<div className='flex flex-col'>
						<label>Password</label>
						<input
							type='password'
							placeholder='*********'
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='border-2 border-darkGreen rounded-lg outline-none px-3 py-2 my-3'
						/>
					</div>
					<p className='text-right my-3 font-medium text-darkGray text-xl'>
						Forgot Password?
					</p>
					<div className='flex items-center justify-between text-sm'>
						<input id='checkbx' type='checkbox' />
						<label htmlFor='checkbx' className='cursor-pointer'>
							I accept the Terms &amp; Conditions.
						</label>
					</div>
					<button className='bg-darkGreen py-3 w-full text-white rounded-lg my-5 font-bold'>
						Login
					</button>
				</form>
				<p className='font-medium text-darkGray text-xl my-2'>
					or Sign up with
				</p>
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

export default Login;
