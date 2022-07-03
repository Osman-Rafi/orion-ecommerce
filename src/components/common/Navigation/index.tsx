import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../../contexts/SidebarContext";
import {
  MenuIcon,
  ShoppingCartIcon,
  HeartIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import logo from "../../../static/orion-logo.png";
import navItems, { NavItem } from "./items";

const RenderNavItem = ({ navItem }: { navItem: NavItem }): JSX.Element => {
  return (
    <li className="px-4 py-2">
      <Link className="text-2xl sm:text-sm" to={navItem.link}>
        {navItem.label}
      </Link>
    </li>
  );
};

const NavigationSmScreen = (): JSX.Element => {
  const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <div
      className={
        "fixed md:hidden bg-black left-0 top-0 w-full sm:w-3/6 h-full text-white transition delay-50 duration-200 ease-in-out" +
        (sidebarOpen ? " translate-x-0" : " -translate-x-full")
      }
    >
      <div className="p-3 flex justify-end" onClick={toggleSidebar}>
        <XIcon className="h-6 w-6" />
      </div>
      <ul className="font-thin text-center">
        {navItems.map((navItem: NavItem, index) => (
          <Fragment key={index}>
            <RenderNavItem navItem={navItem} />
            {index !== navItems.length - 1 && (
              <hr className="mb-4 mx-4 border-t-slate-900" />
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

const Navigation = (): JSX.Element => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <nav className="flex justify-between px-5 py-3">
      <NavigationSmScreen />
      <div className="block lg:hidden" onClick={toggleSidebar}>
        <MenuIcon className="h-6 w-6" />
      </div>
      <div>
        <img src={logo} alt="logo" className="w-20 xs:w-24 sm:w-28" />
      </div>
      <div className="grow lg:flex justify-center hidden">
        <ul className="flex">
          {navItems.map((navItem: NavItem, index: number) => (
            <RenderNavItem navItem={navItem} key={index} />
          ))}
        </ul>
      </div>
      <div className="flex">
        <div className="mr-6 hidden md:block">
          <HeartIcon className="h-6 w-6" />
        </div>
        <div className="mr-3 xs:mr-6">
          <SearchIcon className="h-6 w-6" />
        </div>
        <div>
          <ShoppingCartIcon className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
