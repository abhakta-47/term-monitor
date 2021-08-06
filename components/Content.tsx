import React, { ReactElement } from "react";

interface ContentProp {
  mainHeader: string | (string | ReactElement)[];
  subHeader?: string | (string | ReactElement)[];
  children: JSX.Element;
  compClassName?: string;
}

function Content({
  mainHeader,
  subHeader,
  children,
  compClassName,
}: ContentProp) {
  return (
    <div className={`${compClassName} w-full mt-8 mb-12`}>
      <div className="flex justify-between mb-2">
        <div className="text-lg">{mainHeader}</div>
        {subHeader ? <div className="text-sm">{subHeader}</div> : ""}
      </div>
      <div className="bg-white px-5 py-5">{children}</div>
    </div>
  );
}

export default Content;
