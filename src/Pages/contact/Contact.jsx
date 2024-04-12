/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div className="min-h-[93vh]">
            <Helmet><title> Contact </title></Helmet>
            <div className="grid  grid-cols-1 gap-8 px-8 py-16 mt-28   mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-800">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2 pt-10 pl-10">
                        <h2 data-aos='fade-right' data-aos-duration='1000' className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div data-aos='fade-right' data-aos-duration='1000' data-aos-delay="200" className="dark:text-gray-600 mt-2">Vivamus in nisl metus? Phasellus.</div>
                        <div className="space-y-4 pt-8">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span data-aos='fade-right' data-aos-duration='1000' data-aos-delay="400" >Fake address, 9999 City</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span data-aos='fade-right' data-aos-duration='1000' data-aos-delay="600" >123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span data-aos='fade-right' data-aos-duration='1000' data-aos-delay="800" >contact@business.com</span>
                            </p>
                        </div>
                    </div>
                    <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;