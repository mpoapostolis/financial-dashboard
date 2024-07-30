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
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex w-full items-center gap-3 2xsm:gap-7">
          {/* <!-- User Area --> */}

          <div className=" mx-auto flex w-fit gap-2">
            <Select defaultValue="1">
              <SelectItem value="1">Option One</SelectItem>
              <SelectItem value="2">Option Two</SelectItem>
              <SelectItem value="3">Option Three</SelectItem>
            </Select>
            <DateRangePicker />
          </div>
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
