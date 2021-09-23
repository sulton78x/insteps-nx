import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/dist/client/router";
import InstepsLogo from "../utilities/InstepsLogo";
import { Search, ArrowRight, ChevronDown, Menu } from "react-feather";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const Header = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<SunIcon
					className='w-7 h-7'
					role='button'
					onClick={() => setTheme("light")}
				/>
			);
		} else {
			return (
				<MoonIcon
					className='w-7 h-7'
					role='button'
					onClick={() => setTheme("dark")}
				/>
			);
		}
	};
	const router = useRouter();
	const [active, setActive] = useState(false);

	const [searchInput, setSearchInput] = useState("");

	return (
		<div className='sticky top-0 w-full z-50'>
			<header className='bg-lightGreen dark:bg-black dark:text-white flex md:flex md:gap-x-10 overflow-hidden items-center justify-between px-4 py-3 sm:p-5 md:p-5 border-b-2 border-white'>
				<div className='flex items-center gap-2 sm:gap-4'>
					{/* Menu */}
					<div className='' onClick={() => setActive(!active)}>
						<Menu className='text-darkGreen font-bold inline md:hidden' />
					</div>
					<InstepsLogo />
				</div>

				<div className='flex overflow-hidden mx-2'>
					<div className='flex items-center bg-white  md:px-2 md:py-2 rounded-l-lg'>
						<Search className='text-gray' />
						<input
							type='text'
							className='w-full bg-transparent md:px-2 outline-none placeholder-gray-500 font-semibold text-midGray'
							placeholder='Search here...'
							value={searchInput}
							onChange={e => setSearchInput(e.target.value)}
						/>
					</div>
					<button className='sm:inline md:px-2 md:py-2 bg-darkGreen rounded-r-lg'>
						<ArrowRight className=' text-white' />
					</button>
				</div>
				{/* Test */}
				<nav className='hidden md:block transition transform duration-200 ease-in'>
					<ul className='font-semibold flex  text-darkGreen dark:text-white space-y-1 '>
						<li
							onClick={() => router.push("/catalog")}
							className='flex items-center hover:text-white hover:bg-darkGreen px-5 py-1'
						>
							Catalog <ChevronDown className='pl-1' />
						</li>
						<li
							onClick={() => router.push("/cheatsheet")}
							className='flex items-center hover:text-white hover:bg-darkGreen px-5 py-1'
						>
							Cheatsheet <ChevronDown className='pl-1' />
						</li>
						<li
							onClick={() => router.push("/resources")}
							className='flex items-center hover:text-white hover:bg-darkGreen px-5 py-1'
						>
							Resources <ChevronDown className='pl-1' />
						</li>
						<li
							onClick={() => router.push("/pricing")}
							className='hover:text-white hover:bg-darkGreen px-5 py-1 whitespace-nowrap'
						>
							Premium Pricing
						</li>
					</ul>
				</nav>

				{/* Test */}
				<div>{renderThemeChanger()}</div>
			</header>
			<div className=''>
				{/* Navigation Links */}
				{active ? (
					<nav className='transition transform duration-200 ease-in flex flex-col h-auto border-b-2 border-white bg-lightGreen py-1'>
						<ul className='font-semibold text-darkGreen space-y-1 '>
							<li
								onClick={() => router.push("/catalog")}
								className='flex items-center hover:text-white hover:bg-darkGreen px-5 py-1'
							>
								Catalog <ChevronDown className='pl-1' />
							</li>
							<li
								onClick={() => router.push("/cheatsheet")}
								className='flex items-center hover:text-white hover:bg-darkGreen px-5 py-1'
							>
								Cheatsheet <ChevronDown className='pl-1' />
							</li>
							<li
								onClick={() => router.push("/resources")}
								className='flex items-center hover:text-white hover:bg-darkGreen px-5 py-1'
							>
								Resources <ChevronDown className='pl-1' />
							</li>
							<li
								onClick={() => router.push("/pricing")}
								className='hover:text-white hover:bg-darkGreen px-5 py-1'
							>
								Premium Pricing
							</li>
						</ul>
					</nav>
				) : null}
			</div>
		</div>
	);
};

// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// class Question extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer />? </h3>
//   }
// }

export default Header;
