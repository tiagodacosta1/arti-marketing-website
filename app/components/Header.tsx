export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
            {/* Logo */}
            <div className="text-xl font-semibold">Logo</div>

            {/* Navigation */}
            <nav>
                <ul className="flex space-x-8 text-gray-700">
                    <li className="hover:text-gray-900 cursor-pointer">What we offer</li>
                    <li className="hover:text-gray-900 cursor-pointer">For who</li>
                    <li className="hover:text-gray-900 cursor-pointer">Who we are</li>
                    <li className="hover:text-gray-900 cursor-pointer">FAQ</li>
                    <li className="hover:text-gray-900 cursor-pointer">Sign up</li>
                </ul>
            </nav>
        </header>
    );
}
