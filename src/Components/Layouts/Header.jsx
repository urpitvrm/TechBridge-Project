
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Feedback", href: "/feedback" },
  { name: "About Us", href: "/about" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <Disclosure
      as="nav"
      className="border-b border-gray-200 bg-white shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-blue-600 hover:text-blue-800"
            >
              MovieLookup
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-6 sm:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  location.pathname === item.href
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-blue-600",
                  "px-2 py-2 text-sm font-medium transition"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden items-center space-x-4 sm:flex">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
                >
                  Register
                </Link>
              </>
            ) : (
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://i.pravatar.cc/300"
                    alt="User"
                  />
                </MenuButton>
                <MenuItems className="absolute right-0 z-20 mt-2 w-40 rounded-md bg-white text-black shadow-lg ring-1 ring-black/10 focus:outline-none">
                  <MenuItem>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {({ open }) =>
                open ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )
              }
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <DisclosurePanel className="border-t border-gray-200 bg-white px-4 pb-3 pt-4 sm:hidden">
        <div className="space-y-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className={classNames(
                location.pathname === item.href
                  ? "border-l-4 border-blue-600 bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600",
                "block rounded-md py-2 pl-3 pr-4 text-base font-medium transition"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <div className="mt-4 flex flex-col space-y-2">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="block rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block rounded-md border border-blue-600 px-4 py-2 text-center text-sm font-medium text-blue-600 transition hover:bg-blue-50"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="block rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="block w-full rounded-md px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
