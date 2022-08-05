/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CourseItem from "./CourseItem";

type ListCourseProps = {
  courses?: object[];
};

const ListCourse = ({ courses = [] }: ListCourseProps) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 mx-auto max-w-screen-xl px-4">
          <div className="flex justify-between items-center">
            <div className="w-auto">
              <h2 className="text-lg text-gray-600">New Classes</h2>
              <h3 className="text-xl text-gray-900 font-medium">
                Summer <span className="text-primary-700">Productive</span>
              </h3>
            </div>
            <div className="w-auto">
              <Link href="/courses" passHref>
                <a className="text-gray-600 hover:underline text-sm">
                  View All
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center -mx-4 mt-6">
            {courses?.length > 0 ? (
              courses.map((course, index) => (
                <CourseItem key={index} item={course} />
              ))
            ) : (
              <div className="w-full text-center font-medium text-lg py-4">
                No Course
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ListCourse;
