import { BrowserView, MobileView } from 'react-device-detect'
import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

export default function TopBar() {

    const [bottomOpen, setBottomOpen] = useState(false)

    return (
        <>
            <BrowserView>
                <nav className="bg-white shadow-xl sticky rounded-xl px-4">
                    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1
                            onClick={() => window.location.href = "/"}
                            className="text-4xl font-bold text-gray-800 hover:cursor-pointer hover:text-blue-500 transition-transform transform"
                        >
                            EmrD
                        </h1>
                        <ul className="flex space-x-12">
                            <li>
                                <a
                                    onClick={() => window.scrollTo({ top: 550, behavior: "smooth" })}
                                    className="relative font-bold inline-block text-gray-800 
     hover:text-blue-500 transition-transform transform hover:scale-110
     after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] 
     after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                                >
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => window.scrollTo({ top: 1150, behavior: "smooth" })}
                                    className="relative font-bold inline-block text-gray-800 
     hover:text-blue-500 transition-transform transform hover:scale-110
     after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] 
     after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => window.scrollTo({ top: 1950, behavior: "smooth" })}
                                    className="relative font-bold inline-block text-gray-800 
     hover:text-blue-500 transition-transform transform hover:scale-110
     after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] 
     after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                                >
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => window.scrollTo({ top: 5000, behavior: "smooth" })}
                                    className="relative font-bold inline-block text-gray-800 
     hover:text-blue-500 transition-transform transform hover:scale-110
     after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] 
     after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </BrowserView>
            <MobileView>
                <nav className="bg-white shadow-xl sticky rounded-xl px-4">
                    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <h1
                            onClick={() => window.location.href = "/"}
                            className="text-4xl font-bold text-gray-800 hover:cursor-pointer hover:text-blue-500 transition-transform transform"
                        >
                            EmrD
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 14"
                            width="1em"
                            height="1em"
                            className='cursor-pointer'
                            onClick={() => setBottomOpen(true)}
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 2H.5m13 5H.5m13 5H.5"
                            ></path>
                        </svg>
                    </div>
                </nav>
                <BottomSheet open={bottomOpen} onDismiss={() => setBottomOpen(false)}>
                    <ul className="flex flex-col space-y-4 text-center px-4 py-8">
                        <li>
                            <a
                                onClick={() => {
                                    window.scrollTo({ top: 550, behavior: "smooth" })
                                    setBottomOpen(false)
                                }}
                                className="font-bold inline-block text-gray-800 
             hover:text-blue-500 transition-transform transform hover:scale-110
             after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] 
             after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full
             focus:outline-none"
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    window.scrollTo({ top: 1700, behavior: "smooth" })
                                    setBottomOpen(false)
                                }}
                                className="relative font-bold inline-block text-gray-800 
                   hover:text-blue-500 transition-transform transform hover:scale-110
                   after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] 
                   after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    window.scrollTo({ top: 3090, behavior: "smooth" })
                                    setBottomOpen(false)
                                }}
                                className="relative font-bold inline-block text-gray-800 
                   hover:text-blue-500 transition-transform transform hover:scale-110
                   after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] 
                   after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    window.scrollTo({ top: 5000, behavior: "smooth" })
                                    setBottomOpen(false)
                                }}
                                className="relative font-bold inline-block text-gray-800 
                   hover:text-blue-500 transition-transform transform hover:scale-110
                   after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] 
                   after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </BottomSheet>
            </MobileView>
        </>
    )
}
