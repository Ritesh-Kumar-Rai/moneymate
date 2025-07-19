import '../ErrorPage.css';

const ErrorPage = ({ error }) => {
    return (
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 h-full w-full flex items-center justify-center p-4 overflow-hidden">
            <div className="perspective-1000 w-full max-w-2xl">
                {/* <!-- 3D Car Scene --> */}
                <div className="relative h-96">
                    {/* <!-- Road --> */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800 rounded-t-xl overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 animate-street-line"></div>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 animate-street-line delay-1000"></div>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 animate-street-line delay-2000"></div>
                    </div>

                    {/* <!-- City Reflection --> */}
                    <div className="absolute bottom-16 left-0 right-0 h-16 bg-gray-700 opacity-30"></div>

                    {/* <!-- The Car --> */}
                    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-64 h-32 transform-style-preserve-3d animate-car-float">
                        {/* <!-- Car Body --> */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl shadow-xl">
                            {/* <!-- Side windows --> */}
                            <div className="absolute top-4 left-4 right-4 h-8 bg-slate-800 rounded-lg"></div>
                            {/* <!-- Front window --> */}
                            <div className="absolute top-4 left-12 w-16 h-8 bg-blue-900 rounded-lg transform rotate-y-15"></div>
                            {/* <!-- Headlights --> */}
                            <div className="absolute bottom-2 right-2 w-6 h-3 bg-amber-200 rounded-full animate-light-glow"></div>
                            {/* <!-- Grill --> */}
                            <div className="absolute bottom-4 right-8 w-16 h-2 bg-gray-800 rounded-full"></div>
                            {/* <!-- Side details --> */}
                            <div className="absolute bottom-6 left-12 w-20 h-1 bg-gray-500 rounded-full"></div>
                            <div className="absolute bottom-8 left-12 w-4 h-1 bg-gray-500 rounded-full"></div>
                        </div>

                        {/* Wheels */}
                        <div className="absolute bottom-0 left-6 w-10 h-10 bg-gray-900 rounded-full border-2 border-gray-700 animate-wheels">
                            <div className="absolute inset-1 w-8 h-8 bg-gray-800 rounded-full"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            </div>
                            <div className="absolute top-0 left-1/2 w-1 h-5 bg-gray-600 transform -translate-x-1/2"></div>
                            <div className="absolute top-1/2 right-0 w-5 h-1 bg-gray-600 transform -translate-y-1/2"></div>
                        </div>
                        <div className="absolute bottom-0 right-6 w-10 h-10 bg-gray-900 rounded-full border-2 border-gray-700 animate-wheels">
                            <div className="absolute inset-1 w-8 h-8 bg-gray-800 rounded-full"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            </div>
                            <div className="absolute top-0 left-1/2 w-1 h-5 bg-gray-600 transform -translate-x-1/2"></div>
                            <div className="absolute top-1/2 right-0 w-5 h-1 bg-gray-600 transform -translate-y-1/2"></div>
                        </div>

                        {/* Spoiler  */}
                        <div className="absolute top-0 left-1/2 w-16 h-2 bg-gray-800 transform -translate-x-1/2 -translate-y-full rounded-sm"></div>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-particle opacity-70"></div>
                        <div className="absolute top-20 right-32 w-1 h-1 bg-white rounded-full animate-particle opacity-70 delay-500"></div>
                        <div className="absolute top-40 left-40 w-1 h-1 bg-white rounded-full animate-particle opacity-70 delay-1000"></div>
                        <div className="absolute top-16 left-3/4 w-1 h-1 bg-white rounded-full animate-particle opacity-70 delay-1500"></div>
                    </div>
                </div>

                {/*  Call to Action  */}
                <div className="mt-16 text-center animate-fade-in">
                    <h1 className="text-9xl font-bold text-white mb-4">404</h1>
                    <h2 className="text-gray-500 text-2xl mb-8 max-w-md mx-auto">Sorry, We couldn't find what you are looking for!</h2>
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
                        Go to Home
                    </button>
                </div>
            </div>
        </section>
    )
};

export default ErrorPage;