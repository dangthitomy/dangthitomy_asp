import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 mt-10">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold text-red-600">MOCCOM</h2>
                <p className="text-gray-400 mt-2">Chuyên cung cấp điện thoại</p>

                {/* Mạng xã hội */}
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-gray-400 hover:text-red-500 transition text-xl">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-500 transition text-xl">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-500 transition text-xl">
                        <FaTwitter />
                    </a>
                </div>

                {/* Thông tin liên hệ */}
                <div className="mt-4">
                    <p className="text-gray-400">📍 Địa chỉ: 123 TP. HCM</p>
                    <p className="text-gray-400">📞 Hotline: 0123 456 789</p>
                    <p className="text-gray-400">📧 Email: moccom@gmail.com</p>
                </div>

                {/* Bản quyền */}
                <p className="text-gray-500 mt-4 text-sm">
                    © 2024 SGBakes. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
