'use client';
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export default function Navbar() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isSidebarOpen]);

    const navTopLeftItems = [
        {
            label: "ログインでお困りの方",
        },
        {
            label: "お知らせ",
        },
        {
            label: "よくある質問",
        }
    ]

    const navBottomItems = [
        {
            label: "JMarketsの特徴",
        },
        {
            label: "はじめてのCFD",
        },
        {
            label: "マーケット情報",
        },
        {
            label: "キャンペーン",
        },
        {
            label: "お客様サポート",
        }
    ]

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {
                !isMobile ?
                    <div className="pt-12 mb-4 px-40 flex flex-col gap-7">
                        <div className="flex justify-between items-center">
                            <div>
                                <Image src="/icons/navLogo.svg" alt="logo" width={150} height={200} className="cursor-pointer w-auto h-auto transition-transform duration-300 hover:scale-105" />
                            </div>
                            <div className="flex gap-4">
                                {navTopLeftItems.map((item) => (
                                    <div key={item.label}>
                                        <p className="text-[14px] cursor-pointer text-[#B7B7B7] font-inter font-[900] transition-all duration-300 hover:text-[#434343] hover:underline underline-offset-4">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-6">
                                {navBottomItems.map((item) => (
                                    <div key={item.label} className="group relative">
                                        <p className="text-[14px] font-inter font-[600] cursor-pointer text-[#363636] flex items-center gap-2 transition-all duration-300 hover:text-[#434343] hover:translate-x-1">
                                            {item.label}
                                            <Image 
                                                src="/icons/dropdown.svg" 
                                                alt="arrow" 
                                                width={7} 
                                                height={8} 
                                                className="w-auto h-auto transition-transform duration-300 group-hover:rotate-180" 
                                            />
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button className="border border-[#434343] text-[#434343] font-inter rounded-md py-2.5 text-[14px] px-3 font-[900] cursor-pointer transition-all duration-300 hover:bg-[#FFA500] hover:border-[#FFA500] hover:text-white hover:scale-105 active:scale-95">
                                    ログイン
                                </button>
                                <button className="bg-[#434343] text-white rounded-md font-inter py-2.5 text-[14px] px-3 font-[900] cursor-pointer transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105 active:scale-95">
                                    サインイン
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <div className="fixed top-0 left-0 right-0 bg-white px-4 pt-14 pb-4 flex justify-between items-center z-60 shadow-md">
                            <img src="/icons/navLogo.svg" alt="logo" className="h-7 cursor-pointer transition-transform duration-300 hover:scale-105" />
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <button className="border border-[#434343] text-[#434343] font-inter rounded-md py-2 text-[12px] px-2 font-[900] cursor-pointer transition-all duration-300 hover:bg-[#FFA500] hover:border-[#FFA500] hover:text-white active:scale-95">
                                        ログイン
                                    </button>
                                    <button className="bg-[#434343] text-white rounded-md font-inter py-2 text-[12px] px-2 font-[900] cursor-pointer transition-all duration-300 hover:bg-[#2a2a2a] active:scale-95">
                                        サインイン
                                    </button>
                                </div>
                                <button onClick={toggleSidebar} className="p-1 transition-transform duration-300 hover:scale-110 active:scale-95">
                                    <img src="/icons/menu.svg" alt="menu" className="h-3" />
                                </button>
                            </div>
                        </div>

                        {/* Overlay */}
                        {isSidebarOpen && (
                            <div 
                                className="fixed inset-0 backdrop-blur-sm z-[60] transition-opacity duration-300"
                                onClick={closeSidebar}
                            />
                        )}

                        {/* Sidebar */}
                        <div 
                            className={`fixed top-0 right-0 h-full w-80 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${
                                isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        >
                            <div className="flex flex-col h-full">
                                {/* Sidebar Header */}
                                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                                    <img src="/icons/navLogo.svg" alt="logo" className="h-7" />
                                    <button 
                                        onClick={closeSidebar}
                                        className="p-2 transition-transform duration-300 hover:scale-110 active:scale-95"
                                    >
                                        <svg 
                                            className="w-6 h-6 text-[#434343]" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M6 18L18 6M6 6l12 12" 
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Sidebar Content */}
                                <div className="flex-1 overflow-y-auto p-6">
                                    <div className="flex flex-col gap-6">
                                        {/* Top Navigation Items */}
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-[12px] text-[#B7B7B7] font-inter font-[900] uppercase tracking-wider">
                                                サポート
                                            </h3>
                                            {navTopLeftItems.map((item) => (
                                                <button
                                                    key={item.label}
                                                    onClick={closeSidebar}
                                                    className="text-left text-[14px] cursor-pointer text-[#B7B7B7] font-inter font-[900] transition-all duration-300 hover:text-[#434343] hover:translate-x-2 hover:underline underline-offset-4"
                                                >
                                                    {item.label}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Bottom Navigation Items */}
                                        <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                                            <h3 className="text-[12px] text-[#B7B7B7] font-inter font-[900] uppercase tracking-wider">
                                                メニュー
                                            </h3>
                                            {navBottomItems.map((item) => (
                                                <button
                                                    key={item.label}
                                                    onClick={closeSidebar}
                                                    className="text-left text-[14px] font-inter font-[600] cursor-pointer text-[#363636] flex items-center justify-between transition-all duration-300 hover:text-[#434343] hover:translate-x-2 group"
                                                >
                                                    <span>{item.label}</span>
                                                    <Image 
                                                        src="/icons/dropdown.svg" 
                                                        alt="arrow" 
                                                        width={7} 
                                                        height={8} 
                                                        className="w-auto h-auto transition-transform duration-300 group-hover:rotate-90" 
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar Footer */}
                                <div className="p-6 border-t border-gray-200">
                                    <div className="flex flex-col gap-3">
                                        <button 
                                            onClick={closeSidebar}
                                            className="w-full border border-[#434343] text-[#434343] font-inter rounded-md py-3 text-[14px] font-[900] cursor-pointer transition-all duration-300 hover:bg-[#FFA500] hover:border-[#FFA500] hover:text-white active:scale-95"
                                        >
                                            ログイン
                                        </button>
                                        <button 
                                            onClick={closeSidebar}
                                            className="w-full bg-[#434343] text-white rounded-md font-inter py-3 text-[14px] font-[900] cursor-pointer transition-all duration-300 hover:bg-[#2a2a2a] active:scale-95"
                                        >
                                            サインイン
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}