import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const BreadCrump = () => {
    return (
        <nav aria-label="Breadcrumb" className="flex">
            <ol className="flex overflow-hidden rounded-lg bg-black text-[#F8F8F2] border-gray-800 border">
                <li className="flex items-center">
                    <a
                        href="#"
                        className="flex h-10 items-center gap-1.5 px-4 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 text-[#F8F8F2]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        <span className="ms-1.5 text-xs font-medium">Home</span>
                    </a>
                </li>

                <li className="relative flex items-center">
                    <span className="absolute inset-y-0 -start-px h-10 w-4 bg-[#F8F8F2] [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
                    <a
                        href="#"
                        className="flex h-10 items-center pe-4 ps-8 text-xs font-medium transition"
                    >
                        Shirts
                    </a>
                </li>
            </ol>
        </nav>
    );
};

const Notification = () => {
    const [isBoxOpen, setIsBoxOpen] = useState(false);

    return (
        <div className="relative">
            <div
                className="inline-flex items-center overflow-hidden rounded-md border bg-black text-white border-gray-800 "
                onClick={() => setIsBoxOpen(!isBoxOpen)}
            >
                <a
                    href="#"
                    className="border-e px-4 py-2 text-sm/none hover:bg-[#49483E] hover:text-[#A6E22E]"
                >
                    Notifications
                    <span className="whitespace-nowrap rounded-full bg-[#AE81FF] px-2.5 py-0.5 text-sm text-white">
                        12
                    </span>
                </a>
                <button className="h-full p-2 text-[#75715E] hover:bg-[#49483E] hover:text-[#F8F8F2]">
                    <span className="sr-only">Menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isBoxOpen && (
                <div
                    className="absolute end-0 z-10 mt-2 w-96 rounded-md border border-gray-800  bg-black text-[#F8F8F2] shadow-lg"
                    role="menu"
                >
                    <div className="p-2">
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#49483E] hover:text-[#A6E22E]"
                            role="menuitem"
                        >
                            <span className="whitespace-nowrap rounded-full bg-[#AE81FF] px-2.5 py-0.5 text-sm text-[#272822] m-2">
                                Update
                            </span>
                            You received $100 from John Doe
                        </a>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm hover:bg-[#49483E] hover:text-[#A6E22E]"
                            role="menuitem"
                        >
                            <span className="whitespace-nowrap rounded-full bg-[#FD971F] px-2.5 py-0.5 text-sm text-[#272822] m-2">
                                Inbox
                            </span>
                            Swarnendu requested $100 from you
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <div>
                <div className="sm:hidden">
                    <label htmlFor="Tab" className="sr-only">
                        Tab
                    </label>
                    <select id="Tab" className="w-full rounded-md border border-gray-800">
                        <option>Settings</option>
                        <option>Messages</option>
                        <option>Archive</option>
                        <option select>Notifications</option>
                    </select>
                </div>

                <div className="hidden sm:block bg-black text-white">
                    <div className="border border-gray-800 ">
                        <nav
                            className="-mb-px flex gap-6 justify-between"
                            aria-label="Tabs"
                        >
                            <div className="flex items-center">
                                <BreadCrump />
                            </div>

                            <div className="flex items-center">
                                <div className="p-2 cursor-pointer">
                                    <Notification />
                                </div>
                                <div className="p-2">Swarnendu</div>
                                <div className="p-2">
                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Header;
