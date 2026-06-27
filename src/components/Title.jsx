import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center gap-3 mb-3">
      <p className="text-sm uppercase tracking-[0.24em] text-gray-500 sm:text-base">
        {text1} <span className="text-gray-900 font-semibold">{text2}</span>
      </p>
      <span className="h-[1px] w-12 bg-gray-800 sm:w-16"></span>
    </div>
  );
};

export default Title;
