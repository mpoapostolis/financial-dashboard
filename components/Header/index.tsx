"use client";
import DropdownUser from "./DropdownUser";
import useColorMode from "@/hooks/useColorMode";
import {
  DateRangePicker,
  MultiSelect,
  MultiSelectItem,
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";

const Header = (props: {}) => {
  useColorMode();

  return (
    <header className="sticky top-0 z-40 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="mr-auto flex w-full items-center justify-end gap-3 2xsm:gap-7">
          {/* <!-- User Area --> */}

          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
