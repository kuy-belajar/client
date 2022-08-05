/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import type { IconType } from "react-icons";
import CategoryItem from "./CategoryItem";

type Category = {
  icon: IconType;
  name: string;
  totalCourse: number;
};

type ListCategoryProps = {
  categories?: Category[];
};

const ListCategory = ({ categories = [] }: ListCategoryProps) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 mx-auto max-w-screen-xl px-4">
          <div className="flex justify-between items-center">
            <div className="w-auto">
              <h2 className="text-lg text-gray-600">Category</h2>
              <h3 className="text-xl text-gray-900 font-medium">
                Explore and <span className="text-primary-700">Learn</span>
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-6 gap-6">
            {categories?.length > 0 ? (
              categories.map((category: Category, index) => (
                <div key={index}>
                  <CategoryItem category={category} />
                </div>
              ))
            ) : (
              <div className="w-full text-center font-medium text-lg py-4">
                No Category
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ListCategory;
