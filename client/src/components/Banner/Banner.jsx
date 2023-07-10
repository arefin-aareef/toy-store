import car1 from '../../assets/car1.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${car1})` , height: '200px' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-3/4">
                <h1 className="mb-5 text-4xl md:text-6xl font-bold">Welcome To Pyrates Toy</h1>
                <p className="mt-6 md:text-xl">Experience the thrill of speed and excitement with our incredible toy cars collection. From sleek race cars to rugged off-roaders, we offer a wide range of high-quality, finely detailed vehicles that will ignite the imagination of every young racing enthusiast.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;