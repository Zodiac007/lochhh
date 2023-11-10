import { useEffect } from "react";
import NotifiedSection from "./NotifiedSection";
import Testimonials from "./Testimonials";
import WatchSection from "./WatchSection";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);
  return (
    <>
      <Link to="/signup">
        <div className="w-8 h-8 my-3 ml-auto mr-10 lg:mr-40 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M10 11H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V13H10V16L15 12L10 8V11Z"
              fill="rgba(255,255,255,1)"
            ></path>
          </svg>
          <p className="text-xs -ml-0.5 text-white">Signup</p>
        </div>
      </Link>
      <div className="home">
        <NotifiedSection />
        <WatchSection />
        <Testimonials />
      </div>
    </>
  );
}
