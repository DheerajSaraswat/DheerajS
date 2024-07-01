import { Link } from "react-router-dom";
import "../Colophon/Colophon.css"

function Colophon() {
  return (
    <div>
      <h1 className="text-[2.2rem] font-bold tracking-tight title">Colophon</h1>
      <h2 className="text-base text-black tracking-tight text-title definition">
        /ˈkɒləfən/ — a brief statement at a book's end detailing its production.
      </h2>
      <p className="pt-4 text-sm font-normal text-body text-[#746f72] content">
        Basically, it's a fancy word that I'm using to describe this website.
        This site is crafted with{" "}
        <span className="text-black">React (VITE)</span> and{" "}
        <span className="text-black">Tailwind CSS</span>, hosted on{" "}
        <span className="text-black">Vercel</span>, and designed in{" "}
        <span className="text-black">Figma</span>. Plus, it's{" "}
        <span className="text-black">eco-friendly</span>, producing only{" "}
        <a
          href="https://www.websitecarbon.com/website/lakshb.dev/"
          rel="noopenner noreferrer"
          target="_blank"
          className="text-black underline-offset-4 transition duration-150 ease-in-out md:hover:text-primary md:hover:underline"
        >
          0.02g of CO2
        </a>{" "}
        every time someone visits.
      </p>
      <h2 className="pt-8 text-base font-medium tracking-tight text-[#434040] skills">
        Skills
      </h2>
      <ul className="list-disc px-4 pt-4 text-sm text-body text-[#746f72] skillSet">
        {" "}
        <li>
          {" "}
          <span className="text-black">Javascript</span>
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">jQuery</span>
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">React</span>
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">Node.js</span>
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">MongoDB</span>
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">Express.js</span>
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">Bootstrap</span>
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">Tailwind CSS</span>
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">Chakra UI</span>
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">UX/UI Design</span>
        </li>{" "}
      </ul>
      <h2 className="pt-8 text-base font-medium tracking-tight text-[#434040] inspiration">
        Inspiration
      </h2>
      <p className="pt-4 text-sm font-normal text-[#746f72] inspiration-p">
        This website is heavily inspired by the works of{" "}
        <Link
          to="https://cassandratang.com"
          target="_blank"
          className="underline-offset-4 transition duration-150 ease-in-out md:hover:text-[#00997e] md:hover:underline"
        >
          Cassandra Tang
        </Link>
        ,{" "}
        <Link
          to="https://nexxel.dev"
          target="_blank"
          className="underline-offset-4 transition duration-150 ease-in-out md:hover:text-[#00997e] md:hover:underline"
        >
          nexxel
        </Link>
        ,{" "}
        <Link
          to="https://paco.me/"
          target="_blank"
          className="underline-offset-4 transition duration-150 ease-in-out md:hover:text-[#00997e] md:hover:underline"
        >
          Paco Coursey
        </Link>
        ,{" "}
        <Link
          to="https://emilkowal.ski/"
          target="_blank"
          className="underline-offset-4 transition duration-150 ease-in-out md:hover:text-[#00997e] md:hover:underline"
        >
          Emil Kowalski
        </Link>
        , and many more.
      </p>
      <h2 className="pt-8 text-base font-medium tracking-tight text-[#434040] personal">
        Personal Stack
      </h2>
      <ul className="list-disc px-4 pt-4 text-sm text-body text-[#746f72] mb-8 personal-ul">
        {" "}
        <li>
          {" "}
          <span className="text-black">Edge</span> — A better browser
          (unironically).
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">Spotify</span> — Music for every moment.
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">NotePad</span> — My personal note taking
          app.
        </li>{" "}
        <li>
          {" "}
          <span className="text-black">VSCode</span> — Developer's best friend.
        </li>{" "}
      </ul>
    </div>
  );
}
export default Colophon