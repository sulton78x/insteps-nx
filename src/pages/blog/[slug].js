import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import checkoutImg from "../../../public/images/checkoutImg.png";
import profilePic from "../../../public/images/messi.jpg";
import {
	Search,
	Calendar,
	Heart,
	Facebook,
	Linkedin,
	Instagram,
	Twitter,
} from "react-feather";
import CommentCard from "../../components/CommentCard";

const BlogSlug = ({ postTitle = "UI/UX Design", postNo = 12 }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [searchInput, setSearchInput] = useState("");

	const router = useRouter();
	const { slug } = router.query;

	return (
		<div className='flex my-5 mx-3'>
			<div>
				<div className='rounded-lg border-2 border-lightGreen p-2 flex items-center w-auto justify-between'>
					<input
						type='search'
						placeholder='Search here'
						value={searchInput}
						className='p-2 bg-transparent outline-none'
						onChange={e => setSearchInput(e.target.value)}
					/>
					<span className='bg-darkGreen p-2 rounded-lg'>
						<Search />
					</span>
				</div>
				{/* Post Category */}
				<h3>Post Category</h3>
				<div className='border-2 p-2 border-lightGreen rounded-lg'>
					<div className='border-2 p-2 border-lightGreen rounded-lg flex justify-between items-center my-1'>
						<h3>{postTitle}</h3>
						<span>({postNo})</span>
					</div>
				</div>

				{/* Recent Post */}
				<h3>Recent Post</h3>
				<div className='border-2 p-2 border-lightGreen rounded-lg'>
					<div className='border-2 p-2 border-lightGreen rounded-lg flex justify-between items-center my-1'>
						<h3>{postTitle}</h3>
						<span>({postNo})</span>
					</div>
				</div>

				{/* Popular Tags */}
				<h3>Popular Tags</h3>
				<div className='border-2 p-2 border-lightGreen rounded-lg'>
					<div className='border-2 p-2 border-lightGreen rounded-lg flex justify-between items-center my-1'>
						<h3>{postTitle}</h3>
						<span>({postNo})</span>
					</div>
				</div>

				{/* Share Course */}
				<h3>Share Course</h3>
				<div className='border-2 p-2 border-lightGreen rounded-lg'>
					<div className='border-2 p-2 border-lightGreen rounded-lg flex justify-between items-center my-1'>
						<h3>{postTitle}</h3>
						<span>({postNo})</span>
					</div>
				</div>
			</div>
			<div className='mx-5'>
				<div className='flex justify-between items-center'>
					<div className='flex items-end gap-2'>
						<div className='h-14 relative w-14 rounded-full overflow-hidden'>
							<Image
								src={profilePic}
								layout='responsive'
								alt=''
							/>
						</div>
						<span>Jason Williams {slug}</span>
					</div>
					<div className='flex justify-between items-end my-3 gap-5'>
						<span className='flex items-center gap-2'>
							<Calendar className='text-darkGreen' /> 21, March
							2021
						</span>
						<span className='flex items-center gap-2'>
							<Heart className='text-darkGreen' /> 2,568+
						</span>
						<p className='bg-lightGreen text-darkGreen rounded-lg py-2 px-5 font-semibold outline-none'>
							Science
						</p>
					</div>
				</div>
				<h3 className='font-bold text-2xl text-darkGray my-2'>
					I will touch upon the Intrinsic and germane type as think
					that these are the most applicable to UX Design.
				</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quaerat cupiditate facilis reprehenderit, eligendi
					architecto dolorem iure distinctio vitae maiores, expedita
					deleniti. Nobis culpa impedit reprehenderit tempora, labore
					quos nostrum sint, harum corrupti placeat aliquam
					praesentium quaerat aspernatur porro incidunt fuga?
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quaerat cupiditate facilis reprehenderit, eligendi
					architecto dolorem iure distinctio vitae maiores, expedita
					deleniti. Nobis culpa impedit reprehenderit tempora, labore
					quos nostrum sint, harum corrupti placeat aliquam
					praesentium quaerat aspernatur porro incidunt fuga?
				</p>
				<div className='my-3 rounded-lg overflow-hidden'>
					<Image src={checkoutImg} layout='responsive' alt='' />
				</div>
				<h4 className='font-bold text-2xl text-darkGray my-2'>
					Intrinsic Cognitive Load
				</h4>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quaerat cupiditate facilis reprehenderit, eligendi
					architecto dolorem iure distinctio vitae maiores, expedita
					deleniti. Nobis culpa impedit reprehenderit tempora, labore
					quos nostrum sint, harum corrupti placeat aliquam
					praesentium quaerat aspernatur porro incidunt fuga?
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quaerat cupiditate facilis reprehenderit, eligendi
					architecto dolorem iure distinctio vitae maiores, expedita
					deleniti. Nobis culpa impedit reprehenderit tempora, labore
					quos nostrum sint, harum corrupti placeat aliquam
					praesentium quaerat aspernatur porro incidunt fuga?
				</p>

				<div>
					<h4>Tags : </h4>
					<div></div>
				</div>
				<div className='flex items-center gap-4'>
					<h5 className='text-2xl font-bold'>Share : </h5>
					<div className='flex space-x-6'>
						<div className='p-2 sm:p-3 md:p-4 rounded-lg bg-blue'>
							<Facebook className='text-white' />
						</div>
						<div className='p-2 sm:p-3 md:p-4 rounded-lg bg-instagram'>
							<Instagram className='text-white' />
						</div>
						<div className='p-2 sm:p-3 md:p-4 rounded-lg bg-linkedIn'>
							<Linkedin className='text-white' />
						</div>
						<div className='p-2 sm:p-3 md:p-4 rounded-lg bg-twitter'>
							<Twitter className='text-white' />
						</div>
					</div>
				</div>
				{/* Comments */}
				<h5>Comments (05)</h5>
				<div>
					<CommentCard />
				</div>
				<div>
					<h6>Leave a Comment</h6>
					<form>
						<div className='flex items-center gap-5'>
							<input
								className='bg-transparent border-2 outline-none border-lightGreen rounded-lg p-2 '
								type='text'
								placeholder='Name'
							/>
							<input
								className='bg-transparent border-2 outline-none border-lightGreen rounded-lg p-2 '
								type='email'
								placeholder='Email'
							/>
						</div>
						<textarea
							cols='30'
							rows='10'
							className='border-2 border-lightGreen p-2 outline-none rounded-lg'
						></textarea>
						<button className='font-semibold bg-darkGreen text-white py-2 px-4 rounded-lg my-2'>
							Submit Now
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BlogSlug;
