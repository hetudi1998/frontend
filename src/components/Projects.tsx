import { useState, useEffect } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import projectimg1 from "../assets/project/project1.png";
import projectimg2 from "../assets/project/project2.png";

const portfolioItems = [
	{
		id: 1,
		title: "SIYA",
		subtitle: "A heartfelt story that explores self-discovery and inner strength, blending fantasy with emotional depth. Officially selected at Jagran Film Festival and Ahmedabad International Film Festival, this film brings a visually immersive and soulful journey to life.",
		image: projectimg1,
	},
	{
		id: 2,
		title: "VFX SHOWREEL",
		subtitle: "A showcase of my expertise in visual storytelling through seamless compositing, blending live-action and VFX to create captivating cinematic moments. From intricate keying to dynamic scene enhancements, this reel highlights my passion for crafting immersive",
		image: projectimg2,
	},
];

const PortfolioCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	// Autoplay carousel
	useEffect(() => {
		let interval: number;
		if (!isHovered) {
			interval = window.setInterval(() => {
				nextSlide();
			}, 5000);
		}
		return () => window.clearInterval(interval);
	}, [isHovered]);

	const nextSlide = () => {
		const step = window.innerWidth >= 640 ? 2 : 1; // 2 items on sm and above, 1 on mobile
		setActiveIndex((prev) => {
			const next = prev + step;
			return next >= portfolioItems.length ? 0 : next;
		});
	};

	const prevSlide = () => {
		const step = window.innerWidth >= 640 ? 2 : 1; // 2 items on sm and above, 1 on mobile
		setActiveIndex((prev) => {
			const next = prev - step;
			return next < 0 ? portfolioItems.length - (portfolioItems.length % step || step) : next;
		});
	};

	const goToSlide = (index: number) => {
		const step = window.innerWidth >= 640 ? 2 : 1;
		setActiveIndex(Math.floor(index / step) * step);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 50) {
			nextSlide();
		}
		if (touchStart - touchEnd < -50) {
			prevSlide();
		}
	};

	return (
		<section
			className="w-full px-4 sm:px-16 md:px-24 mx-auto min-h-screen flex flex-col justify-center items-center"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Header */}
			<div className="flex flex-col sm:flex-row items-center justify-between w-full mb-12 gap-4">
				<h2 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center sm:text-left">
					Check out my{" "}
					<span className="bg-gradient-to-b from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">
						Portfolio!
					</span>
				</h2>
				<button className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-pink-600 transition whitespace-nowrap">
					See All
				</button>
			</div>

			{/* Carousel Container */}
			<div className="w-full relative">
				{/* Navigation Buttons */}
				<button
					onClick={prevSlide}
					className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-pink-500 p-2 rounded-full shadow-lg transition-all duration-300 hidden sm:block"
					aria-label="Previous slide"
				>
					<ChevronRight className="w-6 h-6 transform rotate-180" />
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-pink-500 p-2 rounded-full shadow-lg transition-all duration-300 hidden sm:block"
					aria-label="Next slide"
				>
					<ChevronRight className="w-6 h-6" />
				</button>

				{/* Carousel */}
				<div
					className="relative w-full overflow-hidden touch-pan-x"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					<div
						className="flex transition-transform duration-700 ease-in-out"
						style={{ transform: `translateX(-${(activeIndex * 100) / (window.innerWidth >= 640 ? 2 : 1)}%)` }}
					>
						{portfolioItems.map((item) => (
							<div key={item.id} className="w-full sm:w-1/2 flex-shrink-0 px-2">
								<div className="relative group h-[300px] sm:h-96 rounded-xl overflow-hidden mx-2 sm:mx-4">
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>

									<div className="absolute bottom-0 left-2 right-2 sm:left-4 sm:right-4 w-auto bg-gradient-to-t from-black/40 via-black/20 to-transparent text-white px-3 sm:px-4 py-3 transform translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-500 ease-in-out backdrop-blur-md rounded-2xl">
										<h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
										<p className="text-sm sm:text-base mt-2 sm:mt-4 text-[#FFEAD5] line-clamp-3">{item.subtitle}</p>
									</div>

									<button
										onClick={nextSlide}
										className="absolute top-4 right-4 bg-white/80 sm:bg-transparent sm:group-hover:bg-gradient-to-r from-[#AB69B3] to-[#C7619C] text-pink-500 border border-pink-500 sm:group-hover:border-transparent rounded-full p-1 transition-all duration-300 sm:group-hover:text-white"
									>
										<ArrowRight className="w-6 h-6 sm:w-10 sm:h-10" />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Mobile Swipe Indicator - Only visible on small screens */}
			<div className="flex items-center gap-2 mt-4 sm:hidden">
				<ChevronRight className="w-4 h-4 text-gray-400" />
				<span className="text-sm text-gray-500">Swipe to see more</span>
			</div>

			{/* Pagination Dots */}
			<div className="flex justify-center mt-4 gap-2">
				{Array.from({ length: Math.ceil(portfolioItems.length / (window.innerWidth >= 640 ? 2 : 1)) }).map((_, idx) => (
					<button
						key={idx}
						onClick={() => goToSlide(idx * (window.innerWidth >= 640 ? 2 : 1))}
						className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
							Math.floor(activeIndex / (window.innerWidth >= 640 ? 2 : 1)) === idx ? "bg-pink-500 scale-125" : "bg-gray-300"
						}`}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>

			{/* Tags */}
			<div className="flex flex-wrap justify-center gap-4 mt-8">
				{[
					"Video Editing",
					"VFX Artist",
					"Filmmaking",
					"Graphic Design",
					"Post-Production",
				].map((tag) => (
					<button
						key={tag}
						className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
					>
						{tag}
					</button>
				))}
			</div>
		</section>
	);
};

export default PortfolioCarousel;
