import React from "react";
import Link from "next/link"
import Streamline from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import LinkedIn from "../../public/assets/Icon/linkedin.svg";
import GitHub from "../../public/assets/Icon/github.svg"

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Streamline className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">Streamline</strong> is a
            platform that unifies your social accounts in one single place.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <Link href="https://www.facebook.com/profile.php?id=100081522244592" target="_blank">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Facebook className="h-6 w-6" />
              </div>
            </Link>
            <Link href="https://www.twitter.com/TPKjosh" target="_blank">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Twitter className="h-6 w-6" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/tpkjosh" target="_blank">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Instagram className="h-6 w-6" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/tpkjosh" target="_blank">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <LinkedIn className="h-6 w-6" />
              </div>
            </Link>
            <Link href="https://www.github.com/Joshdb-18" target="_blank">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <GitHub className="h-6 w-6" />
              </div>
            </Link>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Streamline</p>
        </div>
        {/* <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div> */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
	  <Link href="/terms-of-service">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
	  </Link>
	  <Link href="/policy">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
	  </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
