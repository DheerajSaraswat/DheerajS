import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import Signature from "../../assets/Signature.png"
import "../Home/Home.css"

function Home() {


  return (
    <div className="home">
      <h1 className="text-[2.2rem] font-bold tracking-tight name">
        Dheeraj Saraswat
      </h1>
      <p className="text-black mb-6 tracking-tighter">
        designer • developer • programmer
      </p>
      <p className="text-[#746f72] text-sm mb-6">
        Hi there, I'm Dheeraj, a 19 y/o CS undergrad student at BPIT Delhi. I
        love creating cool stuff in{" "}
        <span className="text-black">web development</span> (MERN Stack). I'm
        also a <span className="text-black">designer</span>, passionate about{" "}
        <span className="text-black">UI design</span>, with a minimalist touch.
        When I'm not coding, I'm diving into{" "}
        <span className="text-black">new trends</span>, experimenting with them
        to upskill myself as a developer.
      </p>
      <div className="text-[#746f72] mb-8">
        <Link
          to={
            "https://drive.google.com/file/d/1tH4O7PSc5dMwbXNPPuzOE3nfyWqSXJcy/view?usp=sharing"
          }
          target="_blank"
          className="flex group tracking-tighter"
        >
          <span className="group-hover:text-[#00997e] group-hover:underline">
            resume
          </span>
          <GoArrowUpRight className="opacity-0 group-hover:text-[#00997e] group-hover:opacity-100 h-4 w-4" />
        </Link>
        <Link
          to={"https://github.com/DheerajSaraswat"}
          target="_blank"
          className="flex group tracking-tighter"
        >
          <span className="group-hover:text-[#00997e] group-hover:underline">
            github
          </span>
          <GoArrowUpRight className="opacity-0 group-hover:text-[#00997e] group-hover:opacity-100 h-4 w-4" />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/dheeraj-saraswat-428080260/"}
          target="_blank"
          className="flex group tracking-tighter"
        >
          <span className="group-hover:text-[#00997e] group-hover:underline">
            linkedin
          </span>
          <GoArrowUpRight className="opacity-0 group-hover:text-[#00997e] group-hover:opacity-100 h-4 w-4" />
        </Link>
      </div>
      <div className="text-lg tracking-tight text-[#434040] mb-5">Projects</div>
      <div className="w-full text-[#746f72] tracking-tight flex flex-col gap-3">
        <Link
          to={"https://crypto-dashboard-dheeraj.netlify.app/"}
          target="_blank"
          className="w-full group hover:bg-[#d1f9e4] hover:scale-90 duration-300 flex justify-between rounded-lg px-4 py-2"
        >
          <div>
            <p className="text-md text-black group-hover:text-[#00997e]">
              CryptoPlace
            </p>
            <p className="text-sm ">
              Crypto Dashboard to get the details about cryptocurrencies
            </p>
          </div>
          <GoArrowUpRight className="text-[#00997e] opacity-0 group-hover:opacity-100" />
        </Link>
        <Link
          to={"https://ats-scanner.netlify.app/"}
          target="_blank"
          className="w-full group hover:bg-[#d1f9e4] hover:scale-90 duration-300 flex justify-between rounded-lg px-4 py-2"
        >
          <div>
            <p className="text-md text-black group-hover:text-[#00997e]">
              ATS-Scanner
            </p>
            <p className="text-sm ">
              Grab important keywords from the provided text or file
            </p>
          </div>
          <GoArrowUpRight className="text-[#00997e] opacity-0 group-hover:opacity-100" />
        </Link>
        <Link
          to={"https://github.com/DheerajSaraswat/spotify-clone"}
          target="_blank"
          className="w-full group hover:bg-[#d1f9e4] hover:scale-90 duration-300 flex justify-between rounded-lg px-4 py-2"
        >
          <div>
            <p className="text-md text-black group-hover:text-[#00997e]">
              Spotify Clone
            </p>
            <p className="text-sm ">
              A clone to manage your playlist using Spotify API
            </p>
          </div>
          <GoArrowUpRight className="text-[#00997e] opacity-0 group-hover:opacity-100" />
        </Link>
        <Link
          to={"https://github.com/DheerajSaraswat/PLAYTUBE/tree/main/Backend"}
          target="_blank"
          className="w-full group hover:bg-[#d1f9e4] hover:scale-90 duration-300 flex justify-between rounded-lg px-4 py-2"
        >
          <div>
            <p className="text-md text-black group-hover:text-[#00997e]">
              Youtube Backend
            </p>
            <p className="text-sm ">
              Backend model of Youtube with CRUD operations
            </p>
          </div>
          <GoArrowUpRight className="text-[#00997e] opacity-0 group-hover:opacity-100" />
        </Link>
      </div>
      <div className="flex text-[#746f72] group mt-4 text-sm">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 256 256"
          className=" inline-block transition-all duration-300 ease-in-out md:group-hover:scale-125  md:group-hover:text-[#00997e] mt-1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-32.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
        </svg>
        <p>
          Feel free to explore{" "}
          <Link
            to={"https://github.com/DheerajSaraswat"}
            target="_blank"
            className="font-semibold group-hover:text-[#00997e] group-hover:underline"
          >
            Github
          </Link>{" "}
          for more projects.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={Signature} alt="Signature" width={200} />
      </div>
    </div>
  );
}
export default Home