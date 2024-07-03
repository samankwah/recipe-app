import { Link } from "react-router-dom";
import {
  HomeIcon,
  BookmarkIcon,
  HeartIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

const BottomNav = () => {
  //   const location = useLocation();
  return (
    <div
      className="flex fixed bottom-0 z-50 justify-between align-middle w-screen p-3"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      {/* <Link to="/">Hello</Link> */}
      <a
        href="/"
        className={`p-5 ${
          location.pathname === "/" && "bg-[#00B4BF]  rounded-full"
        }`}
      >
        <HomeIcon
          className="size-6"
          color={location.pathname === "/" ? "231F20" : "#807e7f"}
        />
      </a>
      <a
        href="/categories"
        className={`p-5 ${
          location.pathname === "/categories" && "bg-[#00B4BF]  rounded-full"
        }`}
      >
        <BookmarkIcon
          className="size-6"
          color={location.pathname === "/categories" ? "231F20" : "#807e7f"}
        />
      </a>
      <a
        href="/favorites"
        className={`p-5 ${
          location.pathname === "/favorites" && "bg-[#00B4BF]  rounded-full"
        }`}
      >
        <HeartIcon
          className="size-6"
          color={location.pathname === "/favorites" ? "231F20" : "#807e7f"}
        />
      </a>
      <a
        href="/recipes/new"
        className={`p-5 ${
          location.pathname === "/recipes/new" && "bg-[#00B4BF]  rounded-full"
        }`}
      >
        <PlusIcon
          className="size-6"
          color={location.pathname === "/recipes/new" ? "231F20" : "#807e7f"}
        />
      </a>
    </div>
  );
};

export default BottomNav;
