import Header from "../../components/Header";
import BlogPageCard from "../../utilities/BlogPageCard";

const Blog = () => {
	return (
		<div>
			<Header />
			<div className='flex flex-wrap'>
				<BlogPageCard />
				<BlogPageCard />
				<BlogPageCard />
				<BlogPageCard />
				<BlogPageCard />
				<BlogPageCard />
			</div>
		</div>
	);
};

export default Blog;
