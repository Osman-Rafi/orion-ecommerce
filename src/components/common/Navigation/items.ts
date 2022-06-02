import * as ROUTE from "../../../constants/routes";

export interface NavItem {
  link: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    link: ROUTE.HOME,
    label: "Home",
  },
  {
    link: ROUTE.SHOP,
    label: "Shop",
  },
  {
    link: ROUTE.FEATURED,
    label: "Featured",
  },
  {
    link: ROUTE.CART,
    label: "Recommended",
  },
];

export default navItems;
