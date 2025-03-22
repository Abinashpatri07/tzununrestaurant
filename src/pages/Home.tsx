import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { img, img1, img2, img3, video, reservation1, full, medium, medium1, medium2, medium3, medium4, medium5, c1, c2, c3 } from "../assets/video";
import Map from "../Components/Map/Map";
import Video from "../Components/Video/Video";

const Home: React.FC = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 }); // Triggers when 30% of the section is in view

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Tablet breakpoint
        settings: {
          arrows: false, // Hide arrows on smaller screens
        },
      },
    ],
  };

  useEffect(()=>{
    const eleMents = document.querySelectorAll(".hide");
    const eleMents1 = document.querySelectorAll(".hide1");
    const eleMents3 = document.querySelectorAll(".hide3");
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add("show")
        }else{
          entry.target.classList.remove("show")
        }
      })
    },{
      rootMargin:"-100px"
    })

    const observer2 = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add("show1")
        }else{
          entry.target.classList.remove("show1")
        }
      })
    },{
      rootMargin:"-100px"
    })

    eleMents.forEach((ele)=>observer.observe(ele))
    eleMents1.forEach((ele)=>observer.observe(ele))
    eleMents3.forEach((ele)=>observer2.observe(ele))
  },[])


  return (
    <div className="w-full min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Full-Screen Video Section */}
      <div className="relative w-full h-[60vw] max-h-screen">
        {/* <video autoPlay loop muted controls className="absolute top-0 left-0 w-full h-full object-cover">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <Video src={video}/>
      </div>

      {/* Reservation Section */}
      <div className={`w-full py-12 bg-black text-white`} style={{ backgroundImage: `url(${reservation1})` }}>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-center mb-6">SECURE YOUR SPOT</h1>
          <div className="flex justify-center items-center mb-6 bg-no-repeat bg-contain bg-center">
            <iframe
              frameBorder="0"
              height="530"
              id="yelp-reservations-widget"
              src="https://www.yelp.com/reservations/tzunun-pleasant-hill-2/widget?orientation=vertical&color-scheme=light"
              title="Make a reservation"
              width="250"
              scrolling="no"
              style={{ overflow: "hidden", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Beginning Section */}
      <div className="w-full bg-gray-900 text-white flex flex-col">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 hide">
            <img src={img} alt="Restaurant Interior" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-8 text-center md:text-left hide3">
            <h2 className="text-3xl font-bold mb-4">BEGINNING</h2>
            <p className="text-lg">
              At T’zunun, we are more than just a restaurant; we are a celebration of family, tradition, and the vibrant flavors of Mexico.
              Our story began with a dream to bring the rich culinary heritage of Mexico to our community, combining time-honored recipes
              with the warmth and hospitality of our family.
            </p>
          </div>
        </div>

        {/* Section 2 (Image on Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 hide1">
            <img src={img1} alt="Mexican Dish" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-8 text-center md:text-left hide3">
            <h2 className="text-3xl font-bold mb-4">OUR PASSION</h2>
            <p className="text-lg">
              Inspired by generations of culinary excellence, we have crafted a menu that honors traditional Mexican dishes while infusing them with our own unique touch. From our homemade tortillas to our flavorful salsas, every dish is prepared with love, using the finest ingredients and authentic techniques.
            </p>
          </div>
        </div>

        {/* Section 3 (Image on Left) */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 hide">
            <img src={img2} alt="Chefs in Kitchen" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-8 text-center md:text-left hide3">
            <h2 className="text-3xl font-bold mb-4">T'ZUNUN</h2>
            <p className="text-lg">
              In Mayan languages, T'zunun refers to hummingbird. In Mayan culture, hummingbirds are often admired for their beauty and agility. They are associated with joy, happiness, and celebration. Their presence is considered auspicious and may bring positive energy and good fortune.
            </p>
          </div>
        </div>

        {/* Section 4 (Image on Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 hide1">
            <img src={img3} alt="Restaurant Atmosphere" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-8 text-center md:text-left hide3">
            <h2 className="text-3xl font-bold mb-4">SYNTHESIS</h2>
            <p className="text-lg">
              The T'zunun experience is a reflection of our family's passion for good food and meaningful connections. Marked by local and Mexican wines, and hand-crafted cocktails, perfectly paired with delicate, yet approachable dishes.
            </p>
          </div>
        </div>
      </div>

      {/* Delight Section */}
      <motion.div
        className="relative w-full h-[400px] flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
        ref={sectionRef}
        style={{ backgroundImage: `url(${reservation1})` }}
        initial={{ opacity: 0.5, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-6">DELIGHT YOUR TASTE BUDS</h2>
        <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
          MENU
        </button>
      </motion.div>

      {/* Full-Screen Carousel Section */}
      <div className="relative w-full h-[70vw] max-h-screen overflow-hidden">
        <Slider key={String(isPlaying)} ref={setSliderRef} {...carouselSettings}>
          <div><img src={c1} alt="Slide 1" className="w-full object-cover" /></div>
          <div><img src={c2} alt="Slide 2" className="w-full object-cover" /></div>
          <div><img src={c3} alt="Slide 3" className="w-full object-cover" /></div>
        </Slider>

        {/* Controls */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 transform -translate-y-1/2">
          <button onClick={() => sliderRef?.slickPrev()} className=" bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75">
            <FaArrowLeft size={24} />
          </button>
          <button onClick={() => sliderRef?.slickNext()} className="bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75">
            <FaArrowRight size={24} />
          </button>
        </div>

        {/* Play/Pause Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button onClick={() => setIsPlaying(!isPlaying)} className=" bg-opacity-50 text-white px-6 py-3 rounded-full hover:bg-opacity-75">
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>
        </div>
      </div>

      {/* Review Section */}
      <div className="w-full bg-gray-900 text-white py-12">
        <h2 className="text-4xl font-bold text-center mb-6">REVIEWS</h2>
        <Slider key={String(isPlaying)} {...carouselSettings} className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <p className="text-lg italic">"Amazing food and great atmosphere!"</p>
            <p className="mt-2 font-bold">- John Doe</p>
            <div className="flex justify-center mt-2 text-yellow-400">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg italic">"Best experience, highly recommended!"</p>
            <p className="mt-2 font-bold">- Jane Smith</p>
            <div className="flex justify-center mt-2 text-yellow-400">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>
        </Slider>
      </div>

      {/* Uploaded Images Section */}
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-5 md:grid-rows-2  p-4 bg-gray-900">
        {/* Left-Side Large Image (Full Height) */}
        <div className="md:col-span-2 md:row-span-2 overflow-hidden">
        <img 
          src={full} 
          alt="Uploaded Content 1" 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        </div>

        {/* First Row on Right */}
        <div className="overflow-hidden">
  <img src={medium} alt="Uploaded Content 2" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
</div>
<div className="overflow-hidden">
  <img src={medium1} alt="Uploaded Content 3" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
</div>
<div className="overflow-hidden">
  <img src={medium2} alt="Uploaded Content 4" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
</div>

{/* Second Row on Right */}
<div className="overflow-hidden">
  <img src={medium3} alt="Uploaded Content 5" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
</div>
<div className="overflow-hidden">
  <img src={medium4} alt="Uploaded Content 6" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
</div>
<div className="overflow-hidden">
  <img src={medium5} alt="Uploaded Content 7" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
</div>

      </div>

      {/* Email Subscription Section */}
      <div 
        className="w-full py-12 text-white flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${reservation1})` }}
      >
        <h2 className="text-4xl font-bold mb-4">NEWSLETTER</h2>
        <p className="text-lg text-center mb-6">Sign up for our newsletter & get exclusive offers and invites!</p>

        <form className="w-full max-w-md bg-black bg-opacity-50 p-6 rounded-lg">
          <label className="block text-lg mb-2">Email (required)</label>
          <input 
            type="email" 
            placeholder="e.g. email@example.com" 
            className="w-full p-3 border border-white bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required 
          />
          <button 
            type="submit" 
            className="w-full mt-4 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
            SUBMIT
          </button>
        </form>
      </div>

      {/* Map Section */}
      <Map />
    </div>
  );
};

export default Home;