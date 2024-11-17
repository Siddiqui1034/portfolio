import Image from "next/image";
import Link from "next/link";
const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

     {/* Text Container */}
     <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 justify-center">
    {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center md:text-start">Hi, It&lsquo;s<br/>Nausheen <span className="text-white"> Siddiqui</span></h1>
      {/* Descriptio */}
      <p className="md:text-xl text-justify">Welcome to my digital canvas, where innovation and creativity converge. with a keen eye for aesthetics and
        a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.
      </p>
      {/* Button */}
      <div className="w-full flex gap-4 md:text-center">
        <button className="p-2 rounded-md right-1 ring-black bg-black text-white "> 
          <Link href="/projects">View My Work</Link>
        </button>
        <button className="p-2 rounded-md right-1 ring-black bg-white text-black">
          <Link href="/contact" > Contact Me</Link>
        </button>
      </div>
    </div>

    {/* Image Container */}
    <div className=" h-1/2 lg:h-full lg:w-1/2 relative lg:-z-0">
    <Image src="/titleimage.png" alt="" fill  className="title-img object-contain"/>
    </div>

   
  </div>;
};

export default Homepage;
