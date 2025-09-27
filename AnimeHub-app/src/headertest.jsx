import logoImage from './AnimeHub-LogoText.png';
import './index.css';

const topHeader = (
    <div className="flex flex-row gap-x-30">
        <div className="flex-row">
            <picture>
                <source srcSet={logoImage} type="image/webp"/>
                <img src={logoImage} alt="AnimeHub Logo" width="100px" height="100px"/>
            </picture>
        </div>
        <div className="relative flex gap-x-2 right-29">
            <a href = "#home">Home</a>
            <a href = "#ongoing">On-air</a>
            <a href = "#upcoming">Genres</a>
            <a href = "#about">Discussions</a>
            <a href = "#contact">Reviews</a>
        </div>
        <div className="flex gap-x-3">
            <div className="inline-flex">
                <p>Search</p>
            </div>
            <div className="inline-flex">
                <p>Login</p>
            </div>
            <div className="inline-flex">
                <p>Register</p>
            </div>
        </div>

    </div>);

export default topHeader;