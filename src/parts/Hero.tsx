/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { FormEvent } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const Hero: NextPage = () => {
  const router = useRouter();
  const memberUrl: string = process.env.CLIENT_MEMBER_URL || "";

  const [email, setEmail] = useState(() => "");
  const clickSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push(`${memberUrl}/register?email=${email}`);
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
          <div className="mx-4 lg:mr-12 place-self-center lg:w-3/4 lg:col-span-6">
            <h1 className="max-w-2xl text-center lg:text-left mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-7xl lg:text-6xl dark:text-white">
              <span className="text-primary-700">The Old</span> Way to Cheat
              Good <span className="text-primary-700">Game</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              We provide tons of catskill that you can choose and focus on
            </p>
            <form className="relative text-gray-700" onSubmit={clickSubmit}>
              <input
                className="w-full h-12 px-4 pl-3 pr-8 text-base placeholder-gray-600 border rounded focus:shadow-outline"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-5 font-bold text-white bg-primary-700 rounded-r hover:bg-primary-800 focus:ring-primary-300">
                Join Now
              </button>
            </form>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <div className="relative w-full">
              <div className="absolute border-primary-300 border right-0 top-0 max-w-sm w-full h-full" />
              <div className="absolute z-10 max-w-sm mt-12 mr-12 right-0 top-0">
                <img src="images/hero-image.jpg" alt="Hero image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
