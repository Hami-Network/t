import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import RegisterMobileCard from "../Authentication/RegisterMobileCard";
import LoginMobileCard from "../Authentication/LoginMobileCard";
import { getHome } from "../../redux/slices/generalSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
    const [viewRegister, setViewRegister] = useState(false);
    const [viewlogin, setViewlogin] = useState(false);
    const [viewRegisterMobile, setViewRegisterMobile] = useState(false);
    const [viewloginMobile, setViewloginMobile] = useState(false);


    const dispatch = useDispatch();
    const { home } = useSelector((state) => state.general);
    const { isLoggedIn } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getHome());
    }, [dispatch]);

    return (
        <>
            <div className="bg-soft">
                <div className=" py-1 px-3 lg:max-w-screen-xl lg:mx-auto">
                    <div className="flex justify-between">
                        <Link to="/">
                            <div className="">
                                <img
                                    className="h-8 md:h-14"
                                    src={"http://127.0.0.1:5000" + home?.logo}
                                    alt={"img"}
                                />
                            </div>
                        </Link>
                        <div className="flex space-x-5">
                            {/* <span className='lg:hidden flex items-center text-stone-600 text-2xl '><CgProfile /></span> */}
                            {/* <span className='lg:hidden flex items-center text-stone-600 text-2xl' onClick={() => setViewMenu(!viewMenu)}><AiOutlineMenu /></span> */}
                            {/* <span className='hidden lg:flex items-center text-stone-600 text-2xl'><AiOutlineQuestionCircle /> </span> */}
                            {!isLoggedIn ? (
                                <>
                                    <span
                                        className="hidden lg:flex items-center text-light text-xs lg:text-sm bg-main px-2 lg:px-3 py-2 lg:my-3 rounded-lg shadow-sm cursor-pointer"
                                        onClick={() =>
                                            setViewRegister(!viewRegister)
                                        }
                                    >
                                        Register{" "}
                                    </span>
                                    <span
                                        className="hidden lg:flex items-center text-light text-xs lg:text-sm bg-blue px-2 lg:px-3 py-2 lg:my-3 rounded-lg shadow-sm cursor-pointer"
                                        onClick={() => setViewlogin(!viewlogin)}
                                    >
                                        Sign in
                                    </span>
                                </>
                            ) : (
                                <div className="hidden lg:flex  items-center">
                                    <div className="text-sm bg-lightblue px-3 py-2 rounded-md text-light">Logged In</div>
                                </div>
                            )}
                            {!isLoggedIn ? (
                            <>
                            <span
                                className="lg:hidden flex items-center text-light text-xs lg:text-sm bg-main px-2 lg:px-3   rounded-lg shadow-sm cursor-pointer"
                                onClick={() =>
                                    setViewRegisterMobile(!viewRegisterMobile)
                                }
                            >
                                Register{" "}
                            </span>
                            <span
                                className="lg:hidden flex items-center text-light text-xs lg:text-sm bg-blue px-2 lg:px-3   rounded-lg shadow-sm cursor-pointer"
                                onClick={() =>
                                    setViewloginMobile(!viewloginMobile)
                                }
                            >
                                Sign in
                            </span>
                            </>
                            ) : (
                                <div className='lg:hidden flex items-center'>
                                <div className="text-xs bg-lightblue px-2 py-1 rounded-md text-light">Logged In</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <>
                <div>
                    <RegisterMobileCard
                        viewRegisterMobile={viewRegisterMobile}
                        setViewRegisterMobile={setViewRegisterMobile}
                    />
                    {viewRegisterMobile && (
                        <div
                            className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20`}
                            onClick={() =>
                                setViewRegisterMobile(!viewRegisterMobile)
                            }
                        ></div>
                    )}
                </div>

                <div>
                    <LoginMobileCard
                        viewloginMobile={viewloginMobile}
                        setViewloginMobile={setViewloginMobile}
                    />
                    {viewloginMobile && (
                        <div
                            className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20`}
                            onClick={() => setViewloginMobile(!viewloginMobile)}
                        ></div>
                    )}
                </div>

                {viewRegister && (
                    <div
                        className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20  duration-200 ease-in transition-all `}
                    >
                        <div
                            className={`absolute right-20  top-16 flex justify-center items-center bg-trans text-darktext h-16 w-16 rounded-full text-4xl`}
                            onClick={() => setViewRegister(!viewRegister)}
                        >
                            <AiOutlineClose />
                        </div>
                        <Register
                            setViewRegister={setViewRegister}
                            setViewlogin={setViewlogin}
                            viewRegister={viewRegister}
                            viewlogin={viewlogin}
                        />
                    </div>
                )}
                {viewlogin && (
                    <div
                        className={`fixed top-0 bottom-0 left-0 right-0 lightglass z-20  duration-200 ease-in transition-all `}
                    >
                        <div
                            className={`absolute right-20  top-16 flex justify-center items-center bg-trans text-darktext h-16 w-16 rounded-full text-4xl`}
                            onClick={() => setViewlogin(!viewlogin)}
                        >
                            <AiOutlineClose />
                        </div>
                        <Login
                            setViewRegister={setViewRegister}
                            setViewlogin={setViewlogin}
                            viewRegister={viewRegister}
                            viewlogin={viewlogin}
                        />
                    </div>
                )}
            </>
        </>
    );
}

export default Navbar;
