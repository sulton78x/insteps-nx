const QuestionCard = ({ questionNo, question }) => {
	return (
		<div className='flex bg-white my-2 text-sm px-3 py-1'>
			<p className='text-darkGray text-xs font-bold whitespace-nowrap'>
				Q{questionNo} -{" "}
			</p>
			<p className='text-darkGray text-xs font-medium'> {question}</p>
		</div>
	);
};

export default QuestionCard;
