import TopBarProjects from "./TopBarProjects"

export default function Projects() {
    return (
        <>
            <TopBarProjects />
            <div class="container">
                <div
                    class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
                >
                    <div class="flex flex-row-reverse md:contents">
                        <div
                            class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                        >
                            <h3 class="font-semibold text-lg mb-1">Remotive</h3>
                            <p class="leading-tight text-justify">
                                Remotive is an software which helps with controlling the computer with eyes and mobile application without destination requirements. For now, Remotive is close-source project.
                            </p>
                        </div>
                        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                    </div>
                    <div class="flex md:contents">
                        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                        <div
                            class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                        >
                            <h3 class="font-semibold text-lg mb-1">ASP.NET Help Desk</h3>
                            <p class="leading-tight text-justify">
                                This project helps with managing the help desk and customers with ASP.NET.
                            </p>
                            <a href="https://github.com/EmrD/dotnet-support-portal-api" className="font-bold underline">GitHub Repository</a>
                        </div>
                    </div>
                    <div class="flex flex-row-reverse md:contents">
                        <div
                            class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                        >
                            <h3 class="font-semibold text-lg mb-1">Java Spring User Confirmation System</h3>
                            <p class="leading-tight text-justify">
                                You can manage and allow or reject users with this system. Written in Java with Spring.
                            </p>
                            <a href="https://github.com/EmrD/java-user-confirmation-api" className="font-bold underline">GitHub Repository</a>
                        </div>
                        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                    </div>
                    <div class="flex md:contents">
                        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                        <div
                            class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                        >
                            <h3 class="font-semibold text-lg mb-1">React Camera Ball Game</h3>
                            <p class="leading-tight text-justify">
                                This is an web game which users can play with real-time camera and image recognization systems. You must touch the all balls!
                            </p>
                            <a href="https://react-camera-game-dev.vercel.app" className="font-bold underline">Access in production</a>
                        </div>
                    </div>
                    <div class="flex flex-row-reverse md:contents">
                        <div
                            class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                        >
                            <h3 class="font-semibold text-lg mb-1">Java Android Earthquake Communication System</h3>
                            <p class="leading-tight text-justify">
                                With this app, users can make calls or notificatins more simple. Operators can use this infrastructure.
                            </p>
                            <a href="https://github.com/EmrD/emergency-app-test" className="font-bold underline">GitHub Repository</a>
                        </div>
                        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                    </div>
                    <div class="flex md:contents">
                        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                        <div
                            class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                        >
                            <h3 class="font-semibold text-lg mb-1">Java Android Daily Water Tracking Application</h3>
                            <p class="leading-tight text-justify">
                                Users can track his/her daily water consumption with widgets and choose an target.
                            </p>
                            <a href="https://github.com/EmrD/java-android-water-tracker-with-widget" className="font-bold underline">GitHub Repository</a>
                        </div>
                    </div>
                    <div class="flex flex-row-reverse md:contents">
                        <div
                            class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                        >
                            <h3 class="font-semibold text-lg mb-1">Cisco Office Networking Scheme</h3>
                            <p class="leading-tight text-justify">
                                Office network managers can use this scheme and design their own network.
                            </p>
                            <a href="https://github.com/EmrD/cisco-pt-office-network-design" className="font-bold underline">GitHub Repository</a>
                        </div>
                        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                    </div>
                    <div class="flex md:contents">
                        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                        <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                            <h3 class="font-semibold text-lg mb-1">Python Customer Management System</h3>
                            <p class="leading-tight text-justify">
                                Companies can use this system to manage their customers with SQL.
                            </p>
                            <a href="https://github.com/EmrD/Customer-Manager" className="font-bold underline">GitHub Repository</a>
                        </div>
                    </div>
                    <div class="flex flex-row-reverse md:contents">
                        <div
                            class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                        >
                            <h3 class="font-semibold text-lg mb-1">AInternet</h3>
                            <p class="leading-tight text-justify">
                                AI uses browser, makes your actions. Written in Python. Requires API key.
                            </p>
                            <a href="https://github.com/EmrD/ainternet-control-browser-with-ai" className="font-bold underline">GitHub Repository</a>
                        </div>
                        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}