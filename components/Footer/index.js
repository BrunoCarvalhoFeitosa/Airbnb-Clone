import { GlobeAltIcon } from '@heroicons/react/solid';
import { RiFacebookFill, RiTwitterFill } from 'react-icons/ri';
import { ImInstagram } from 'react-icons/im';

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 border-b border-gray-200">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-center md:text-left">ABOUT</h5>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">How Airbnb works</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Newsroom</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Investors</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Airbnb Plus</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-center md:text-left">COMMUNITY</h5>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Diversity and belonging</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Acessibility</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Associates of Airbnb</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Guest referrals</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Airbnb.org</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-center md:text-left">HOST</h5>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Stay in your accommodation</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Offer an online experience</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Responsible hosting</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Resource Center</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Community Center</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-center md:text-left">ATTENDANCE</h5>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Our response to the COVID-19 pandemic</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Help Center</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Neighbor Support Channel</p>
          <p className="text-sm text-center md:text-left cursor-pointer hover:underline">Trust and security</p>
        </div>
      </footer>
      <div className="flex flex-col justify-between p-8 py-14 bg-gray-100 text-gray-800 md:py-8 md:px-32 md:flex-row lg:flex-row">
        <div className="flex flex-col justify-center text-center mb-8 align-items space-x-6 md:mb-0 md:flex-row">
          <div>© 2021 Airbnb, Inc.</div>
          <div className="cursor-pointer hover:underline">Privacity</div>
          <div className="cursor-pointer hover:underline">Terms</div>
          <div className="cursor-pointer hover:underline">Sitemap</div>
          <div className="cursor-pointer hover:underline">Company informations</div>
        </div>

        <div className="flex justify-center space-x-4">
          <div className="flex space-x-2 mr-8 cursor-pointer">
            <GlobeAltIcon className="text-gray-800 h-6" />
            <p className="underline">Português (BR)</p>
          </div>
          <div className="flex align-items space-x-4">
            <div className="cursor-pointer">
              <a href="https://www.facebook.com/AirbnbBrasil">
                <RiFacebookFill size={24} />
              </a>
            </div>
            <div className="cursor-pointer">
              <a href="https://twitter.com/airbnb_br">
                <RiTwitterFill size={24} />
              </a>
            </div>
            <div className="cursor-pointer">
              <a href="https://www.instagram.com/airbnb/">
                <ImInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;