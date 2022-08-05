/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Page500: NextPage = () => {
  return (
    <>
      <NextSeo title="500 Internal Server Error" />
      <section className="flex justify-center items-center bg-white dark:bg-gray-900 min-h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              500
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Internal Server Error.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              We are already working to solve the problem.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page500;
