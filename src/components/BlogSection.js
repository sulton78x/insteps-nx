import BlogCard from "../utilities/BlogCard";
import blogCardImg01 from "../../public/images/blogCardImg01.png";
import blogCardImg02 from "../../public/images/blogCardImg02.png";
import blogCardImg03 from "../../public/images/blogCardImg03.png";

const BlogSection = () => {
	return (
		<div className=''>
			<h3 className='font-semibold text-2xl text-darkGray text-center'>
				Blog
			</h3>
			<h4 className='text-center text-xl'>Top Articles</h4>
			<div className='px-5 grid mx-auto grid-cols-1 sm:grid-cols-2 sm:px-10 md:grid-cols-3 md:p-20 gap-10 my-10'>
				<BlogCard
					blogImg={blogCardImg01}
					blogTitle='iPhone Developers Interview'
					blogContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus dolorum ad blanditiis quos ipsam quod voluptatum atque ex porro accusamus necessitatibus quae numquam iure dolor illum, quam dolores a.'
				/>
				<BlogCard
					blogImg={blogCardImg02}
					blogTitle='iPhone Developers Interview'
					blogContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus dolorum ad blanditiis quos ipsam quod voluptatum atque ex porro accusamus necessitatibus quae numquam iure dolor illum, quam dolores a.'
				/>
				<BlogCard
					blogImg={blogCardImg03}
					blogTitle='iPhone Developers Interview'
					blogContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus dolorum ad blanditiis quos ipsam quod voluptatum atque ex porro accusamus necessitatibus quae numquam iure dolor illum, quam dolores a.'
				/>
			</div>
		</div>
	);
};

export default BlogSection;
