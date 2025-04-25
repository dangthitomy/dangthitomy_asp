import Bannerpic from "../assets/banner5.webp"

const Banner = () => {
    return (
        <div className="relative w-full h-[400px]">
            {/* Hình ảnh banner */}
            <img 
                src={Bannerpic} 
                alt="Banner" 
                className="w-full h-full object-cover rounded-lg"
            />
            {/* Overlay mờ để dễ nhìn chữ */}
            <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center">
                <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition">
                    Xem ngay
                </button>
            </div>
        </div>
    );
};

export default Banner;
