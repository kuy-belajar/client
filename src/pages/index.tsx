/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Header from "@/parts/Header";
import Hero from "@/parts/Hero";
import Partners from "@/parts/Partners";
import ListCourse from "@/parts/ListCourse";
import ListCategory from "@/parts/ListCategory";
import Footer from "@/parts/Footer";
import {
  MdOutlineBusinessCenter,
  MdOutlineContentPaste,
  MdOutlineNotificationsNone,
  MdOutlineHeadsetMic,
  MdVideogameAsset,
  MdOutlineTravelExplore,
} from "react-icons/md";

const Home: NextPage = () => {
  const courses: object[] = [];
  const categories: any[] = [
    {
      id: 1,
      name: "Business Development",
      icon: MdOutlineBusinessCenter,
      totalCourse: 12493,
    },
    {
      id: 2,
      name: "Content Writer",
      icon: MdOutlineContentPaste,
      totalCourse: 512,
    },
    {
      id: 3,
      name: "Product Advertisement",
      icon: MdOutlineNotificationsNone,
      totalCourse: 6436,
    },
    {
      id: 4,
      name: "Customer Relationship",
      icon: MdOutlineHeadsetMic,
      totalCourse: 214,
    },
    {
      id: 5,
      name: "Game Development",
      icon: MdVideogameAsset,
      totalCourse: 5744,
    },
    {
      id: 6,
      name: "Travel Guidance",
      icon: MdOutlineTravelExplore,
      totalCourse: 24,
    },
  ];
  return (
    <>
      <NextSeo title="Kuy Belajar | Online Course" />
      <Header />
      <main className="mb-12">
        <div className="container mx-auto py-6">
          <Hero />
        </div>
        <div className="container mx-auto py-6">
          <Partners />
        </div>
        <div className="container mx-auto py-6">
          <ListCourse courses={courses} />
        </div>
        <div className="container mx-auto py-6">
          <ListCategory categories={categories} />
        </div>
      </main>
      <Footer />
      {/* <Sidebar /> */}
    </>
  );
};

export default Home;
