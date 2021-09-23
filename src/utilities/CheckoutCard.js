import Image from "next/image";
import { BookOpen, Eye, Clock } from "react-feather";

const CheckoutCard = () => {
	return (
		<div>
			<div>
				<Image src={} layout='responsive' />
			</div>
			<h5>Create a backend app with javascript</h5>
			<p>$75</p>
			<div>
				<span><BookOpen /> 20 Lessons</span>
                <span><Eye /> 2383 Views</span>
				<span><Clock /> 3 Hours</span>
			</div>
		</div>
	);
};

export default CheckoutCard;
