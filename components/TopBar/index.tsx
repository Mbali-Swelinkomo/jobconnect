import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import AppContext from "@/contexts/ AppContextProvider"
import { useRouter } from "next/router";



const TopBar: React.FC<{}> = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isIconChanged, setIsIconChanged] = useState(false);
    const menuZIndex = isMenuVisible ? 1 : -1;
    const { isQuickMenuVisible, setIsQuickMenuVisible } = useContext(AppContext);
    const router = useRouter();


    const handleClickAndCLose = () => {
        setIsMenuVisible(false);
        setIsIconChanged(false);
      };
    
      const handleMenuClick = () => {
        setIsMenuVisible(!isMenuVisible);
        setIsIconChanged(!isIconChanged);
        setIsQuickMenuVisible(!isQuickMenuVisible);
      };

      const getActiveClass = (path: string) => {
        return router.pathname === path ? 'border-b-4 border-[#3D84A8]' : '';
    };
    

    return(
        <div className="bg-white items-center flex shadow-[0px 2px 10px rgba(1, 39, 47, 0.05)] py-[20px] lg:py-[30px]">
            <div className="container mx-auto px-10">
                <div className="flex justify-between items-center border-t-4 border-[#3D84A8] pt-4">
                    <div className="flex items-center">
                        <Link href="/">
                            <h1 className="text-2xl font-bold text-gray-900">JobConnect</h1>
                        </Link>
                    </div>
                    <div className="hidden lg:flex space-x-8">
                        <Link href="/" className={`text-lg text-gray-700 hover:text-gray-900 ${getActiveClass('/')}`}>Home</Link>
                        <Link href="/browse" className={`text-lg text-gray-700 hover:text-gray-900 ${getActiveClass('/browse')}`}>Jobs</Link>
                        <Link href="/career-advice" className={`text-lg text-gray-700 hover:text-gray-900 ${getActiveClass('/career-advice')}`}>Career Advice</Link>
                    </div>
                    <div className="lg:hidden">
                        <Image
                            src="/images/icons/burger-menu.png"
                            width="25"
                            height="25"
                            alt="Menu"
                            className="cursor-pointer"
                            onClick={handleMenuClick}
                            />


        {isMenuVisible && (
                <div className="absolute right-0 mt-2 py-4 w-full h-screen bg-white rounded-lg shadow-xl overflow-auto flex flex-col" 
                    id="menu" style={{ zIndex: menuZIndex }}>
                        <div className="flex justify-end px-4 mb-2">
                        </div>
                        {/* Quick Menu */}
                        <Link
                        href="/"
                        onClick={handleClickAndCLose}
                        className="block px-4 py-3 text-secondary-blue-grey leading-[20px] text-[14px] font-Telkom123-Light py[14px] flex justify-between items-center hover:bg-indigo-500"
                        >
                        <span>Home</span>
                        <img
                            className="ml-2"
                            src="/images/icons/right.svg"
                            alt="Chevron Right"
                        />
                        </Link>
                        <Link
                        href="/browse"
                        onClick={handleClickAndCLose}
                        className="block px-4 py-3 text-secondary-blue-grey leading-[20px] text-[14px] font-Telkom123-Light py[14px] flex justify-between items-center hover:bg-indigo-500"                >
                        <span>Jobs</span>
                        <img
                            className="ml-2"
                            src="/images/icons/right.svg"
                            alt="Chevron Right"
                        />
                        </Link>
                        <Link
                        href="/career-advice"
                        onClick={handleClickAndCLose}
                        className="block px-4 py-3 text-secondary-blue-grey leading-[20px] text-[14px] font-Telkom123-Light py[14px] flex justify-between items-center hover:bg-indigo-500"                >
                        <span>Career Advice</span>
                        <img
                            className="ml-2"
                            src="/images/icons/right.svg"
                            alt="Chevron Right"
                        />
                        </Link>
                    </div>
                    )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;
