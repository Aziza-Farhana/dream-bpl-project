import React from 'react';

const Footer = () => {
    return (
        <div className="mx-0 mt-5 rounded-lg ">

            <div className='flex justify-center w-10/12 rounded-lg border-2 border-white mx-auto -mb-40'>
                <div className=' rounded-lg bg-white  m-5 '>
                    <img className='rounded-lg text-center ' src="./assets/bg-shadow.png" alt="" />
                    
                </div>
                <h1 className='absolute text-xl md:text-3xl text-black mt-10 font-bold '>Subscribe To Our Newsletter</h1>
                <h3 className="text-gray-500 text-xl absolute mt-20 -mb-5">Get the News Updates and News Right in Your Inbox</h3>
                <div className='flex absolute mt-40'>
                    <input className='px-5 py-2 border-2 border-gray-300 rounded-lg' type="text" placeholder='Enter Your Email'/>
                    <button className='px-5 py-2 rounded-lg bg-green-500 mx-5 font-semibold'>Subscribe</button>
                </div>
            </div>
            <footer className="bg-black text-white pb-10 pt-40 px-4 md:px-16 rounded-lg px-5 ">
                <div className="w-9/12 mx-auto">
                    <div className="mb-8 flex justify-center">
                        <img className='inline' src="./assets/logo-footer.png" alt="" />
                       
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <h3 className="font-semibold text-lg mb-3 text-left">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-left">
                                <li>
                                    <a className="hover:text-green-600" href="#">Home</a>
                                </li>
                                <li>
                                    <a className="hover:text-green-600" href="#">Insurance</a>
                                </li>
                                <li>
                                    <a className="hover:text-green-600" href="#">About</a>
                                </li>
                                <li>
                                    <a className="hover:text-green-600" href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-lg mb-3 text-left">Our Services</h3>
                            <ul className="space-y-2 text-sm text-left">
                                <li>
                                    <a className="hover:text-green-600" href="#">Insurance</a>
                                </li>
                                <li>
                                    <a className="hover:text-green-600" href="#">About</a>
                                </li>
                                <li>
                                    <a className="hover:text-green-600" href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a className="hover:text-green-600" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-lg mb-3 text-left">Help</h3>
                            <ul className="space-y-2 text-sm text-left">
                                <li>
                                    <a className="hover:text-green-600" href="#">Home</a>
                                </li>
                                <li>
                                    <a className="hover:text-green-600" href="#">Insurance</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-3 text-left">Subscribe</h3>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center">
                                    <input
                                        placeholder="Email Address"
                                        type="text"
                                        className="bg-transparent border-b-2 border-black w-4/6"
                                    />
                                    <button className="w-7 h-7 bg-orange-600 inline-flex rounded-full text-white justify-center items-center">
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </button>
                                </div>
                                <div className="flex justify-between w-2/5 mb-2 mt-8">
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-square-instagram"></i>
                                    <i className="fa-brands fa-square-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center pt-4 mt-4">
                        <p className="text-sm text-gray-600">
                            © 2027 UIDesign.to - All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
