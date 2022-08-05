import type { IconType } from "react-icons";

type Category = {
  icon: IconType;
  name: string;
  totalCourse: number;
};

type CategoryItemProps = {
  [key: string]: Category;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <>
      <div className="px-4 py-6 group transition-all duration-300 h-full border rounded space-y-8 hover:bg-primary-700 cursor-pointer hover:shadow-2xl">
        <span className="text-3xl lg:text-6xl text-gray-600 group-hover:text-white">
          <category.icon />
        </span>
        <div className="space-y-3">
          <h4 className="text-md xl:text-xl text-gray-900 group-hover:text-white table-caption">
            {category.name}
          </h4>
          <h5 className="text-sm text-gray-600 group-hover:text-gray-300">
            {category.totalCourse} Courses
          </h5>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
