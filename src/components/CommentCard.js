import Image from "next/image";
import { CornerUpLeft } from "react-feather";
import profilePic from "../../public/images/messi.jpg";

const CommentCard = () => {
	return (
		<div className='border-2 rounded-lg border-lightGreen p-4 md:p-7 my-3'>
			<div className='flex items-center justify-between mb-3'>
				<div className='flex gap-4 items-center'>
					<div className='h-14 w-14 overflow-hidden rounded-full border-2 border-lightGreen ring-2 ring-green-200 ring-offset-green-200'>
						<Image src={profilePic} alt='' layout='responsive' />
					</div>

					<div className='tracking-tighter leading-none'>
						<h5 className='font-bold'>Sara Alexander</h5>
						<p className='text-darkGreen font-semibold'>
							Product Designer, USA ||{" "}
							<span className='text-red-300'>
								35 minutes ago.
							</span>
						</p>
					</div>
				</div>
				<button className='flex items-center gap-1 text-darkGreen bg-lightGreen rounded-lg py-2 px-4'>
					<CornerUpLeft className='h-4' />
					<span className='font-semibold'>Reply</span>
				</button>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
				repellendus velit dolorum maxime corporis saepe vero nulla non
				consequatur? Voluptatum fuga magni dolor sint facilis et illum
				eveniet, eum in incidunt ipsam praesentium! Enim porro obcaecati
				vero voluptatum, itaque eligendi.
			</p>
		</div>
	);
};

export default CommentCard;
