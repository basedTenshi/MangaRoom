import logoImage from './AnimeHub-LogoText.png';

const topHeader = (
    <div className="flex">
        <div className="flex flex-row p-3">
            <picture>
                <source srcSet={logoImage} type="image/webp" />
                <img src={logoImage} alt="AnimeHub Logo" width="145px" height="100px"/>
            </picture>
        </div>
        <div className="flex flex-row uppercase font-medium">
            <a href="#home" className="p-5">Home</a>
            <a href="#ongoing" className="p-5">On-air</a>
            <a href="#upcoming" className="p-5">Genres</a>
            <a href="#about" className="p-5">Discussions</a>
            <a href="#contact" className="p-5">Reviews</a>
        </div>
    <div className="flex flex-row ml-auto uppercase font-medium">
        <h3 className="p-5 ml-2 border rounded-lg">Search</h3>
        <h3 className="p-5 ml-3 border rounded-lg ">Login</h3>
    </div>
    </div>
);

export default topHeader;
