import React from "react";

type CourseItemProps = {
  item: object;
};

const CourseItem = ({ item }: CourseItemProps) => {
  return (
    <>
      <div className="w-1/4 px-4">
        <figure className="w-6 h-4"></figure>
      </div>
    </>
  );
};

export default CourseItem;
