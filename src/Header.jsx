import { BrowserView, MobileView } from 'react-device-detect'

export default function Header() {
    const stats = [
        { id: 1, name: 'Development Experience', value: '+5 Years' },
        { id: 2, name: 'GitHub Repositories', value: '+200' },
        { id: 3, name: 'Events - Projects - Courses', value: '+50' },
        { id: 4, name: 'Technologies', value: '+25' },
        { id: 5, name: 'Developer Tools Published', value: '+8' },
    ]

    const languages = [
        "Python",
        "JavaScript",
        "Java",
        "C#",
        "C++",
        "C",
        "Flutter",
        "React",
        "Java Spring Boot",
        "J2EE Servlet",
        "Node.JS Express",
        "Hibernate ORM",
        "Git",
        ".NET"
    ]

    const languages2 = [
        "Gradle",
        "Maven",
        "Docker",
        "Kubernetes",
        "Apache Kafka",
        "RabbitMQ",
        "MongoDB",
        "PostgreSQL",
        "DB2",
        "Firebase / Google Cloud",
        "ElasticSearch",
        "Redis",
        "Cisco Packet Tracer",
        "IBM Mainframe (COBOL, z/OS JCL etc.)"
    ]
    return (
        <>
            <header className="flex flex-col items-center justify-center text-center flex-grow px-6 bg-white-500 py-12">
                <img
                    src="https://avatars.githubusercontent.com/u/127445447?v=4"
                    alt="profil"
                    className="rounded-full w-32 h-32 mb-4 shadow-lg"
                />
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                    I'm EmrD...
                </h2>
                <p className="mt-2 text-gray-600 max-w-md text-2xl font-bold">
                    Full-Stack Developer, Vulnerability Researcher
                </p>
                <a
                    onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
                    className="font-bold mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition cursor-pointer"
                >
                    Get More Information
                </a>
            </header>
            <div className="mt-24" id='about'>
                <div className="text-center font-bold text-4xl mt-4 mb-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                    About Me
                </div>
                <p className="mt-2 text-gray-600 text-center">
                    I started learning in 2019. I am a passionate software developer who loves turning ideas into reality. With a strong curiosity for technology and innovation, I strive to create applications that make a positive impact. I am motivated by continuous learning and enjoy exploring new possibilities to bring creative solutions to life. I can speak Türkçe, English and Deutsch.
                </p>
                <div className="text-left mt-8 px-8 font-bold">
                    <div className="bg-white-900 py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-5">
                                {stats.map((stat) => (
                                    <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 text-zinc-950">
                                        <dt className="text-base/7 text-zinc-400">{stat.name}</dt>
                                        <dd className="order-first text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="text-center font-bold text-4xl mt-4 mb-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent pb-4">
                    Projects
                </div>
                <BrowserView>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-3 justify-center gap-x-8 gap-y-8 mt-8 px-8">
                            <a href="#" className="block w-[300px] h-[250px] p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Sound Sharing</h5>
                                <p className="font-normal text-gray-700">You can listen your computer's sound on your phone. This project is useful for computers which does not have Bluetooth support.</p>
                            </a>
                            <a href="#" className="block w-[300px] h-[250px] p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Remotive</h5>
                                <p className="font-normal text-gray-700">You can control your computer with out eyes and optionally with your phone app.</p>
                            </a>
                            <a href="#" className="block w-[300px] h-[250px] p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Double Space to Enter</h5>
                                <p className="font-normal text-gray-700">You can double click to space to enter with this extention. You can access on Visual Studio Marketplace.</p>
                            </a>
                            <a href="#" className="block w-[300px] h-[250px] p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Clean # From Text</h5>
                                <p className="font-normal text-gray-700">You can simply use this extention to clean # from text. You can access on Visual Studio Marketplace. This extention is useful for Git commit messages.</p>
                            </a>
                            <a href="#" className="block w-[300px] h-[250px] p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">React + Tailwind CSS Google IDX Template</h5>
                                <p className="font-normal text-gray-700">I developed Google IDX template to getting started with React and Tailwind at the same time.</p>
                            </a>
                            <a href="#" className="block w-[300px] h-[250px] p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Todo CLI Package</h5>
                                <p className="font-normal text-gray-700">To manage your project's todos, you can use this CLI package. I published on npmjs.org</p>
                            </a>
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="flex items-center justify-center px-4 mt-8">
                        <div className="grid grid-cols-1 gap-y-6 w-full max-w-md">
                            <a href="#" className="block w-full h-auto p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Sound Sharing</h5>
                                <p className="font-normal text-gray-700">You can listen your computer's sound on your phone. This project is useful for computers which does not have Bluetooth support.</p>
                            </a>
                            <a href="#" className="block w-full h-auto p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Remotive</h5>
                                <p className="font-normal text-gray-700">You can control your computer with out eyes and optionally with your phone app.</p>
                            </a>
                            <a href="#" className="block w-full h-auto p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Double Space to Enter</h5>
                                <p className="font-normal text-gray-700">You can double click to space to enter with this extention. You can access on Visual Studio Marketplace.</p>
                            </a>
                            <a href="#" className="block w-full h-auto p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Clean # From Text</h5>
                                <p className="font-normal text-gray-700">You can simply use this extention to clean # from text. You can access on Visual Studio Marketplace. This extention is useful for Git commit messages.</p>
                            </a>
                            <a href="#" className="block w-full h-auto p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">React + Tailwind CSS Google IDX Template</h5>
                                <p className="font-normal text-gray-700">I developed Google IDX template to getting started with React and Tailwind at the same time.</p>
                            </a>
                            <a href="#" className="block w-full h-auto p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Todo CLI Package</h5>
                                <p className="font-normal text-gray-700">To manage your project's todos, you can use this CLI package. I published on npmjs.org</p>
                            </a>
                        </div>
                    </div>
                </MobileView>
                <div className="text-center font-bold text-4xl mt-4 mb-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent pb-4 pt-8">
                    Technologies that I use
                </div>
                <BrowserView>
                    <div className="flex justify-center items-center mt-8">
                        <div className="grid grid-cols-2 gap-x-4">
                            <ul className="list-disc">
                                {languages.map((language, index) => (
                                    <li key={index} className="text-xl font-bold">{language}</li>
                                ))}
                            </ul>
                            <ul className="list-disc">
                                {languages2.map((language2, index) => (
                                    <li key={index} className="text-xl font-bold">{language2}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <ul className="list-disc text-center">
                        {languages.map((language, index) => (
                            <li key={index} className="text-xl font-bold">{language}</li>
                        ))}
                        {languages2.map((language2, index) => (
                            <li key={index} className="text-xl font-bold">{language2}</li>
                        ))}
                    </ul>
                </MobileView>
                <div className="text-center font-bold text-4xl mt-4 mb-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent pb-4 pt-8">
                    Contact
                </div>

                <BrowserView>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-1 justify-center gap-x-8 gap-y-8 mt-8 px-8">
                            <a href="#" className="block w-[300px] h-[120px] p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">GitHub</h5>
                                <a className="font-normal text-blue-700" href='https://github.com/EmrD'>GitHub Page</a>
                            </a>
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="flex items-center justify-center px-4 mt-8">
                        <div className="grid grid-cols-1 gap-y-6 w-full max-w-md">
                            <a href="#" className="block w-full h-auto p-6 bg-white border-2 border-zinc-950 rounded-lg shadow-sm hover:bg-gray-100 text-center">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">GitHub</h5>
                                <a className="font-normal text-blue-700" href='https://github.com/EmrD'>GitHub Page</a>
                            </a>
                        </div>
                    </div>
                </MobileView>

            </div>
        </>
    )
}