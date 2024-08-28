import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="../public/img/iconLogo.png"
              className="h-6 sm:h-9"
              alt="LogoIcon"
            />
            <img
              src="../public/img/textLogo.png"
              className="mr-3 h-6 sm:h-9"
              alt="LogoText"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              예약현황
            </a>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              잔액충전
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
