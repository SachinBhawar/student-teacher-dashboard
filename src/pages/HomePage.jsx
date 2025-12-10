import React from "react";

const HomePage = () => {
    return (
        <div className="w-full h-[80vh] flex flex-col items-center justify-center space-y-8">
            Welcome to the Student Teacher Dashboard....
            <p className="text-sm mb-4 italic">
                Designed and developed by{" "}
                <a
                    href="https://sachinbhawar.netlify.app"
                    target="_blank"
                    className="text-blue-600 underline hover:text-blue-800 font-bold"
                >
                    Sachin Bhawar
                </a>
                ...
            </p>
        </div>
    );
};

export default HomePage;
