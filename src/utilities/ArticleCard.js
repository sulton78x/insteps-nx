import Image from "next/image";

const ArticleCard = ({ articleImg, articleTitle, articleContent }) => {
	return (
		<div className='bg-white flex items-center my-3 rounded-lg'>
			<div className='relative hidden sm:inline rounded-lg overflow-hidden object-contain w-1/3 h-1/3'>
				<Image
					src={articleImg}
					alt='Artticle Card'
					objectFit='cover'
					className=''
					layout='responsive'
				/>
			</div>
			<div className='m-3 sm:m-5 '>
				<h4 className='font-semibold'>{articleTitle}</h4>
				<p className='my-3'>{articleContent}</p>
			</div>
		</div>
	);
};

export default ArticleCard;
