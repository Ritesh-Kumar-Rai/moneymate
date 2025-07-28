import {
  LuHandCoins,
  LuLayoutDashboard,
  LuLogOut,
  LuWalletMinimal,
} from "react-icons/lu";
import { MdOutlineAdd } from "react-icons/md";

// SideMenu Navigation data

export const SIDE_MENU_DATA = [
  {
    id: 1,
    type: "link",
    label: "Dashboard",
    icon: LuLayoutDashboard,
    path: "/",
  },
  {
    id: 2,
    type: "link",
    label: "Income",
    icon: LuWalletMinimal,
    path: "/income",
  },
  {
    id: 3,
    type: "link",
    label: "Expense",
    icon: LuHandCoins,
    path: "/expenses",
  },
  {
    id: 4,
    type: "button",
    label: "Add Transaction",
    icon: MdOutlineAdd,
    path: "#",
  },
  {
    id: 5,
    type: "link",
    label: "Logout",
    icon: LuLogOut,
    path: "/logout",
  },
];

// context data structure

{
  transaction_entries: [
    {
      date: "",
      payee: "",
      transaction_type: "income/expense",
      amount: {
        amount_value: "$90",
        currency_type: "usd",
      },
      category: "",
      notes: "",
    },
  ];
}
