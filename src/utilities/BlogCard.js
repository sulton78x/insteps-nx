import Image from "next/image";

const BlogCard = ({ blogImg, blogTitle, blogContent }) => {
	return (
		<div className='shadow-lg bg-white rounded-lg overflow-hidden w-72'>
			<div className='relative object-cover shadow-md rounded-lg overflow-hidden'>
				<Image
					src={blogImg}
					alt='blog Image'
					objectFit='cover'
					className=''
					layout='responsive'
				/>
			</div>
			<div className='p-3 text-center'>
				<h3 className='font-semibold text-darkGray'>{blogTitle}</h3>
				<p className='text-darkGray text-base my-2'>{blogContent}</p>
				<button className='border-2 my-1 border-darkGreen py-2 outline-none px-3 rounded-lg bg-white text-darkGreen font-medium'>
					View More
				</button>
			</div>
		</div>
	);
};

export default BlogCard;
