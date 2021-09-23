import ArticleCard from "../utilities/ArticleCard";
import blogCardImg03 from "../../public/images/blogCardImg03.png";

const ArticlesSection = () => {
	return (
		<div className='my-5'>
			<h3 className='text-2xl font-semibold text-darkGray mb-5 text-center'>
				More Articles
			</h3>
			<div className='bg-lightGreen py-5 px-5'>
				<ArticleCard
					articleImg={blogCardImg03}
					articleTitle='iPhone Developers Interview'
					articleContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus dolorum ad blanditiis quos ipsam quod voluptatum atque ex porro accusamus necessitatibus quae numquam iure dolor illum, quam dolores a.'
				/>
				<ArticleCard
					articleImg={blogCardImg03}
					articleTitle='iPhone Developers Interview'
					articleContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus dolorum ad blanditiis quos ipsam quod voluptatum atque ex porro accusamus necessitatibus quae numquam iure dolor illum, quam dolores a.'
				/>
				<ArticleCard
					articleImg={blogCardImg03}
					articleTitle='iPhone Developers Interview'
					articleContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus dolorum ad blanditiis quos ipsam quod voluptatum atque ex porro accusamus necessitatibus quae numquam iure dolor illum, quam dolores a.'
				/>
			</div>
			{/* <button></button> */}
		</div>
	);
};

export default ArticlesSection;
