import Image from "next/image";
import checkoutImg from "../../public/images/checkoutImg.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CheckoutCard from "../utilities/CheckoutCard";
import { Clock } from 'react-feather'

const Checkout = () => {
	return (
		<div>
            <Header />
			<div>
				<div>
                <h3>The Basics of HTML and CSS - Beginner's Course.</h3>
				<div>
					<Image src={checkoutImg} layout='responsive' />
				</div>
				<div>
					<Image src={} layout='responsive' />
					<div>
						<p>Muhammad Arif</p>
						<p>Web Developer</p>
					</div>
				</div>
				<ul>
					<li>Overview</li>
					<li>Curriculum</li>
					<li>Instructor</li>
					<li>Review</li>
				</ul>
				<h4>Description</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Optio architecto omnis vero voluptatum sit ipsam obcaecati
					molestias, excepturi corrupti veritatis quisquam, deleniti
					accusantium beatae est aliquam exercitationem fugit tempora
					id numquam eius. Blanditiis odio voluptas aut! Minus dolorem
					autem necessitatibus!
				</p>
				<h4>Requirements</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Optio architecto omnis vero voluptatum sit ipsam obcaecati
					molestias, excepturi corrupti veritatis quisquam, deleniti
					accusantium beatae est aliquam exercitationem fugit tempora
					id numquam eius. Blanditiis odio voluptas aut! Minus dolorem
					autem necessitatibus!
				</p>
				<h4>Who this Course is for</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Optio architecto omnis vero voluptatum sit ipsam obcaecati
					molestias, excepturi corrupti veritatis quisquam, deleniti
					accusantium beatae est aliquam exercitationem fugit tempora
					id numquam eius. Blanditiis odio voluptas aut! Minus dolorem
					autem necessitatibus!
				</p>
				<h4>What you will Learn</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Optio architecto omnis vero voluptatum sit ipsam obcaecati
					molestias, excepturi corrupti veritatis quisquam, deleniti
					accusantium beatae est aliquam exercitationem fugit tempora
					id numquam eius. Blanditiis odio voluptas aut! Minus dolorem
					autem necessitatibus!
				</p>
                </div>
                <div>
                    <div>
                        <p>$75.99</p>
                        <p>$90.99</p>
                        <p>20% off</p>
                    </div>

                </div>
			</div>
            <div>
                <h5>Related Courses</h5>
                <div>
                    <CheckoutCard />
                    <CheckoutCard />
                    <CheckoutCard />
                </div>
                <div>
				<span><BookOpen /> 20 Lessons</span>
                <span><Eye /> 2383 Views</span>
				<span><Clock /> 3 Hours</span>
			</div>
			<p>This course include:</p>

            </div>
            <Footer />
		</div>
	);
};

export default Checkout;
