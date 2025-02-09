import React from 'react';
import Image from 'next/image';

const EmailForm: React.FC = () => {
    return (
        <div className="px-24 py-16 bg-[#FAFDD5]">
            <div className="flex justify-center transform translate-y-12">
                <Image
                    src="/Group727.png"
                    alt="Image 1"
                    width={467.06}
                    height={224.08}
                />
            </div>
            <div className="flex flex-col items-center text-center justify-center space-y-12 bg-white py-12 rounded-3xl">
                <h1>Stay Connected with Arti</h1>
                <h2>Sign up to receive updates, exclusive offers, and more!</h2>
                <form className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-x-4">
                    <input
                        type="name"
                        placeholder="Name"
                        className="px-4 py-4 bg-[#F5F5F5] rounded-3xl"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-4 bg-[#F5F5F5] rounded-3xl"
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-4 bg-[#F5F5F5] rounded-3xl"
                    />
                    <button className="px-12 py-4 bg-blue-500 text-white font-medium rounded-3xl">
                        Sign me up
                    </button>
                </form>
                <p className="max-w-2xl">
                    By signing up, you agree to receive updates, offers, and news from Arti Speech. We respect your privacy and will never share your information with third parties. You can unsubscribe at any time.
                </p>
            </div>
        </div>
    );
};

export default EmailForm;