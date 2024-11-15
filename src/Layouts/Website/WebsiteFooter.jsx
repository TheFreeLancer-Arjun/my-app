import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-black text-white py-8 bg-cover bg-center w-full p-6 lg:p-10  lg:h-[16cm] flex flex-col  justify-end"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/abstract-black-fabric-background-with-copy-space-3d-render_46250-2957.jpg')",
        }}
      >
        <div className="container mx-auto px-4 border-b-[10px] border-r-[10px] border-t-[10px] border-gray-500 rounded-2xl p-6 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8  ">
            {/* Column 1 */}
            <div className="">
              <h3 className="font-bold text-xl lg:text-2xl  xs:ml-10 ">
                Important Pages
              </h3>
              <ul className="mt-4 space-y-2 text-sm md:text-base xs:ml-20">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:underline">
                    Photos
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="">
              <h3 className="font-bold text-xl lg:text-2xl  xs:ml-10">
                Association
              </h3>
              <ul className="mt-4 space-y-2 text-sm md:text-base xs:ml-20">
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/achievement/shivchhatrapati-awardee"
                    className="hover:underline"
                  >
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link to="/history/fencing" className="hover:underline">
                    History
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="">
              <h3 className="font-bold text-xl lg:text-2xl xs:ml-10">
                Important Links
              </h3>
              <ul className="mt-4 space-y-2 text-sm md:text-base xs:ml-20">
                <li>
                  <Link to="/team/office-bearer" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <a
                    href="https://mahafencing.in/home/privacy_policy"
                    className="hover:underline"
                  >
                    Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://mahafencing.in/home/terms_conditions"
                    className="hover:underline"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-col items-start ">
              <h3 className="font-bold text-xl lg:text-2xl mb-4">Follow</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaYoutube size={20} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-xs md:text-sm lg:text-start mb-[2cm] w-screen flex ">
          <div className="w-[50%] ">
            <div className="flex justify-center lg:justify-start space-x-2 mt-1  mb-2 ">
              <a
                href="https://mahafencing.in/home/privacy_policy"
                className="underline hover:text-gray-400"
              >
                Privacy Policy & Refund Policy
              </a>
              <span>|</span>
              <a
                href="https://mahafencing.in/home/terms_conditions"
                className="underline hover:text-gray-400"
              >
                Terms & Conditions
              </a>
            </div>

            <a href="https://www.sublimetechnologies.in/">
              {" "}
              <p>&copy;  </p>
            </a>


            <Link to="/admin">

            admin
            </Link>
          </div>

          <div className="w-[50%]">
            <div className="w-[90%] flex justify-end">
              {/* <img
                src="https://www.sublimetechnologies.in/sublime_assets/images/logo_black.png"
                alt="Logo"
                className="h-[1cm] mr-8"
              /> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
