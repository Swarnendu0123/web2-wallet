import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const BreadCrump = () => {
    return (
        <nav aria-label="Breadcrumb" className="flex">
            <ol className="flex overflow-hidden rounded-lg   text-gray-600">
                <li className="flex items-center">
                    <a
                        href="#"
                        className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
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

                        <span className="ms-1.5 text-xs font-medium"> Home </span>
                    </a>
                </li>

                <li className="relative flex items-center">
                    <span
                        className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                    >
                    </span>

                    <a
                        href="#"
                        className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                    >
                        Shirts
                    </a>
                </li>
            </ol>
        </nav>
    )
}


const Notification = () => {
    const [isBoxOpen, setIsBoxOpen] = useState(false)


    return (
        <div className="relative">
            <div className="inline-flex items-center overflow-hidden rounded-md border bg-white" onClick={() => { setIsBoxOpen(!isBoxOpen) }}>
                <a
                    href="#"
                    className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                >
                    Notifications
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                        12
                    </span>
                </a>

                <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
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

            {isBoxOpen && <div
                className="absolute end-0 z-10 mt-2 w-96 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
            >
                <div className="p-2">

                    <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                    >
                        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                            Update
                        </span>

                        You received $100 from John Doe
                    </a>

                    <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                    >
                        <span className="whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-sm text-orange-700">
                            Inbox
                        </span>
                        Swarnendu requested $100 from you.
                    </a>
                </div>
            </div>}
        </div>
    )
}



const Header = () => {
    return (
        <div>
            <div>
                <div className="sm:hidden">
                    <label htmlFor="Tab" className="sr-only">Tab</label>

                    <select id="Tab" className="w-full rounded-md border-gray-200">
                        <option>Settings</option>
                        <option>Messages</option>
                        <option>Archive</option>
                        <option select>Notifications</option>
                    </select>
                </div>

                <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex gap-6 justify-between" aria-label="Tabs">
                            <div className="flex items-center">
                                <BreadCrump />
                            </div>

                            <div className="flex items-center">
                                <div className="p-2 cursor-pointer">
                                    <Notification />
                                </div>
                                <div className="p-2">
                                    Swarnendu
                                </div>
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
    )
}


export default Header;