import { ChevronRight } from "react-feather";

const CourseCard = ({ icon, courseTitle }) => {
	return (
		<div className='shadow-md p-3 w-64 rounded-lg dark:bg-gray'>
			<div className='text-white bg-darkGreen p-4 inline-block rounded-full my-2'>
				<span className='left-0'>{icon}</span>
			</div>
			<p className='font-semibold text-midGray dark:text-darkGreen text-xl my-2 whitespace-normal'>
				{courseTitle}
			</p>
			<div className='text-lg flex justify-end items-center ml-auto text-midGray'>
				<p className='text-right font-medium'>Learn </p>
				<span>
					<ChevronRight className='inline' />
				</span>
			</div>
		</div>
	);
};

export default CourseCard;
