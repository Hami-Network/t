import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FaFacebookF, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import CurrencyModal from "./CurrencyModal";
import HelplineModal from "./HelplineModal";
import LanguageModal from "./LanguageModal";

export default function TopHeader() {
    const [ view, setView ] = useState({
        helpline: false,
        currency:  false,
        language: false
    })
    return (
        <div className="block bg-[#002366]">
        <div className="lg:max-w-screen-xl lg:mx-auto">
            <div className="flex justify-between py-2">
                <span className="flex text-sm relative">
                    <div className="flex items-center text-soft space-x-2 md:space-x-5 border-r  px-3 md:px-5">
                        <span className="text-sm">
                            <FaFacebookF />
                        </span>
                        <span className=" lg:text-lg">
                            <FaInstagram />
                        </span>
                        <span className="text-lg lg:text-xl">
                            <FaGooglePlusG />
                        </span>
                    </div>
                    <div
                        className="text-soft flex space-x-1 items-center px-3 text-xs lg:text-sm whitespace-nowrap cursor-pointer"
                        onClick={() => {
                            setView((prev) => {
                                return {...prev, helpline: !view.helpline}
                            })
                        }}
                    >
                        <span className="text-xs">Help line</span>
                        <span className="text-sm">
                            {view.helpline ? (
                                <AiOutlineUp />
                            ) : (
                                <AiOutlineDown />
                            )}
                        </span>
                    </div>
                    {/* absolute div */}
                    <HelplineModal setView={setView} view={view} />
                    {/* absolute div */}
                </span>
                <span className="flex text-sm">
                    <div className="flex px-5 space-x-2 md:space-x-5 text-soft items-center font-light">
                        <div className="cursor-pointer whitespace-nowrap text-xs lg:text-sm">
                            <a href="https://app.mytcb2b.com/#/login">
                                B2B Login
                            </a>
                        </div>
                        <div
                            className="flex space-x-1 items-center cursor-pointer relative"
                            onClick={() => setView((prev) => {
                                return {...prev, currency: !view.currency}
                            }) }
                        >
                            <span className="text-xs">AED</span>
                            <span className="text-sm">
                                {view.currency ? (
                                    <AiOutlineUp />
                                ) : (
                                    <AiOutlineDown />
                                )}
                            </span>
                            {/* absolute modal */}
                                    <CurrencyModal setView={setView} view={view} />
                            {/* absolute modal */}
                        </div>
                        <div
                            className="flex space-x-2 items-center cursor-pointer"
                            onClick={() =>
                                setView((prev) => {
                                    return {...prev, language: !view.language}
                                })
                            }
                        >
                            <span className="text-xs cursor-pointer">
                                English
                            </span>
                            <span className="text-sm">
                                {view.language ? (
                                    <AiOutlineUp />
                                ) : (
                                    <AiOutlineDown />
                                )}
                            </span>
                            {/* absolute modal */}
                                <LanguageModal setView={setView} view={view} />
                            {/* absolute modal */}
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </div>

    )
}
