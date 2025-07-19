import React from 'react'


const addTransactionModal = ({ children }) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            {/* modal */}
            <button
                onClick={openModal}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                type="button"
            >
                Toggle modal
            </button>

            {/* <!-- Main modal --> */}
            {isOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black  bg-opacity-50 transition-opacity duration-300"
                >
                    {/* Modal content with scale and opacity transition */}
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 dark:bg-gray-900 dark:text-white transform transition-transform transition-opacity duration-300"
                        style={{
                            // Animate scale up and fade in
                            transform: isOpen ? 'scale(1)' : 'scale(0.95)',
                            opacity: isOpen ? 1 : 0,
                        }}
                    >
                        {/* Modal header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">Create a New Item</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Form */}
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={3}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Your message"
                                />
                            </div>
                            {/* Submit button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
};

export default addTransactionModal;