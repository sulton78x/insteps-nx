import Head from "next/head";
import Ad from "../components/Ad";
import ArticlesSection from "../components/ArticlesSection";
import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import CatalogSection from "../components/CatalogSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TopQuestions from "../components/TopQuestions";
import WhySection from "../components/WhySection";

export default function Home() {
	return (
		<div>
			<Header />
			<div className='font-poppins'>
				<HeroSection />
				<CatalogSection />
				<Ad />
				<FAQSection />
				<TopQuestions />
				<WhySection />
				<Banner />
				<BlogSection />
				<ArticlesSection />
			</div>
			<Footer />
		</div>
	);
}
