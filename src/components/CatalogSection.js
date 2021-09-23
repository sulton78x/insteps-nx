import CourseCard from "../utilities/CourseCard";
import { Facebook } from "react-feather";
import Button from "../utilities/Button";

const CatalogSection = () => {
	return (
		<div className='px-7 my-10 text-center'>
			<h2 className='font-bold text-xl text-midGray text-center'>
				Explore Our Catalogs
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-7 my-10'>
				<CourseCard
					icon={<Facebook />}
					courseTitle='Javascript Programming'
				/>
				<CourseCard
					icon={<Facebook />}
					courseTitle='Python Programming'
				/>
				<CourseCard icon={<Facebook />} courseTitle='Web Development' />
				<CourseCard icon={<Facebook />} courseTitle='Data Science' />
			</div>

			<Button text='View More' />
		</div>
	);
};

export default CatalogSection;
