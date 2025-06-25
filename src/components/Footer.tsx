import InstaIcon from "../assets/icons/insta.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import TikTokIcon from "../assets/icons/tiktok.svg";
import XIcon from "../assets/icons/x-social.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white border-t border-white/20 ">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </div>

          <ul className="flex justify-center gap-2.5">
            <li>
              <InstaIcon />
            </li>
            <li>
              <XIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
            <li>
              <TikTokIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
