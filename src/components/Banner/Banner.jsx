import banner from './../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero h-[530px] bg-[#B3B99F] text-[#686529]">
                <div className="hero-content flex-col items-center justify-center lg:flex-row-reverse gap-28">
                    <img src={banner} className="max-w-sm h-[450px] rounded-lg shadow-2xl hidden md:flex opacity-90" />
                    <div>
                        <div className=' text-7xl font-bold space-y-5 text-center md:text-left'>
                            <h1>Effortless</h1>
                            <h1>Task Management</h1>
                            <h1>with Quivvy</h1>

                        </div>
                        <button className='btn text-[#686529]  mt-8 bg-base-200  max-w-xs w-full'>Let's Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;