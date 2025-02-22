"use client";
import useSignupStore from "@/store/signup";
import {
  IconApps,
  IconFile,
  IconHome,
  IconHomeDot,
  IconHomeInfinity,
  IconHomeSearch,
  IconLogout,
  IconUsers,
  IconClipboardList,
} from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  {
    id: 1,
    link: "/admin",
    icon: <IconHome />,
    name: "Home",
  },
  {
    id: 2,
    link: "/admin/users",
    icon: <IconUsers />,
    name: "Users",
  },
  {
    id: 3,
    link: "/admin/find-house",
    icon: <IconHomeSearch />,
    name: "Find Me A House",
  },
  {
    id: 4,
    link: "/admin/assets",
    icon: <IconHomeInfinity />,
    name: "Assets",
  },
  {
    id: 5,
    link: "/admin/companies",
    icon: <IconHomeDot />,
    name: "Companies",
  },
  {
    id: 6,
    link: "/admin/properties",
    icon: <IconApps />,
    name: "Tenants",
  },
  {
    id: 7,
    link: "/admin/dueloans",
    icon: <IconApps />,
    name: "Loans",
  },
  {
    id: 8,
    link: "/admin/transactions",
    icon: <IconFile />,
    name: "Transactions",
  },
  {
    id: 9,
    link: "/admin/waitList",
    icon: <IconClipboardList />,
    name: "WaitList",
  },
];

const Sidebar = () => {
  const query = usePathname();
  const router = useRouter();
  const { data, updateData } = useSignupStore((state) => state);

  const handleLogout = () => {
    localStorage.removeItem("ileyah_token");
    router.push("/login");
  };

  return (
    <>
      <div className="z-40 hidden w-full h-full lg:block">
        <div
          className="inset-0 w-full h-full opacity-0"
          onClick="sidebarHandler(false)"
        ></div>
        <div className="w-[320px] absolute left-0 z-40 top-0 flex-col justify-between transition duration-150 ease-in-out h-full bg-[#00000f] text-white shadow-xl">
          <div className="flex flex-col justify-between h-full">
            <div className="px-6 pt-4 overflow-y-auto">
              <div className="flex items-center justify-between">
                <div aria-label="Home" role="img" className="flex items-center">
                  <img
                    src="/assets/images/ileyah logo white.png"
                    alt="logo"
                    className="w-3/5 pt-5 pl-5"
                  />
                </div>
              </div>
              <div className="flex">
                <ul className="pl-5 mt-10 f-m-m">
                  {navLinks.map((nav, i) => (
                    <Link href={nav.link} key={i}>
                      <li
                        className={classNames(
                          "px-6 py-3 rounded-full w-full",
                          query === nav?.link ? "bg-gray-200 text-black" : ""
                        )}
                      >
                        <div className="flex items-center">
                          <div className="w-5 h-5 md:w-6 md:h-6">
                            {nav?.icon}
                          </div>
                          <div className="ml-10 text-lg">{nav?.name}</div>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="border-t border-gray-300">
                <div className="flex items-center justify-between w-full px-6 pt-1">
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={handleLogout}
                  >
                    <IconLogout />
                    <p className="ml-2 text-base leading-4 text-white">
                      Logout
                    </p>
                  </div>
                  <ul className="flex">
                    <li className="pt-5 pb-3 text-white cursor-pointer">
                      <a href="javascript:void(0)">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_dark_page_title_and_white_box-svg4.svg"
                          alt="chat"
                        />
                      </a>
                    </li>
                    <li className="pt-5 pb-3 pl-3 text-white cursor-pointer">
                      <a href="javascript:void(0)">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_dark_page_title_and_white_box-svg5.svg"
                          alt="notifications"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center block md:!hidden z-50">
        <div className="grid grid-cols-3">
          {navLinks.map((n, i) => (
            <Link
              href={n.link}
              key={i}
              className={query === n.link ? "bg-slate-700" : ""}
            >
              <div className="flex flex-col p-6">
                <div className="mx-auto">{n.icon}</div>
                <div className="mx-auto">{n.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
