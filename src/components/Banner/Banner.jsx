import banner from './../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero h-[530px] bg-[#B3B99F] text-[#686529]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-28">
                    <img src={banner} className="max-w-xs rounded-lg shadow-2xl" />
                    <div className=' text-7xl font-bold space-y-5'>
                        <h1>Effortless</h1>
                        <h1>Task Management</h1>
                        <h1>with</h1>
                        <h1>Quivvy</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;