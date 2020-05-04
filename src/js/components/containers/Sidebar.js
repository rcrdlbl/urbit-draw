import React from "react";

const Sidebar = () => {
  return (
    <div
      className="bn br-m br-l br-xl b--gray4 b--gray1-d lh-copy h-100
      flex-shrink-0 mw5-m mw5-l mw5-xl pt3 pt0-m pt0-l pt0-xl
     relative dn-s flex-basis-100-s flex-basis-30-ns"
    >
      <div className="overflow-y-scroll h-100">
        <div className="w-100 bg-transparent">
          <a href="/~draw/new" className="dib f9 pointer green2 gray4-d pa4">
            New Canvas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
