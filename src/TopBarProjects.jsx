export default function TopBarProjects() {

    return (
        <>
            <nav className="bg-white shadow-xl sticky rounded-xl px-4">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1
                        onClick={() => window.location.href = "/"}
                        className="text-4xl font-bold text-gray-800 hover:cursor-pointer hover:text-blue-500 transition-transform transform"
                    >
                        EmrD
                    </h1>
                    <div className="flex space-x-12">
                        <h1 className="relative font-bold inline-block text-gray-800 transition-transform transform hover:scale-110 cursor-default">
                            Projects
                        </h1>
                    </div>
                </div>
            </nav>
        </>
    )
}
