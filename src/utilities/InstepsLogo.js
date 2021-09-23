import { useRouter } from "next/dist/client/router";

const InstepsLogo = () => {
	const router = useRouter();

	return (
		<div className='font-nunito'>
			<button
				onClick={() => router.push("/")}
				className='text-black dark:text-white font-poppins font-bold text-xl md:text-3xl'
			>
				In<span className='text-darkGreen'>steps</span>
			</button>
		</div>
	);
};

export default InstepsLogo;
