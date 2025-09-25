import logoImage from './AnimeHub-LogoText.png';

const topHeader = (<div className="top-header">
    <div className="header-logo">
        <picture>
            <source srcSet={logoImage} type="image/webp"/>
            <img src={logoImage} alt="AnimeHub Logo" width="100px" height="100px"/>
        </picture>
    </div>
    <div className="header-title">
        <h1>AnimeHub</h1>
    </div>
    <div className="header-navigation">
        <a href = "#home">Home</a>
        <a href = "#ongoing">On-air</a>
        <a href = "#upcoming">Genres</a>
        <a href = "#about">Discussions</a>
        <a href = "#contact">Reviews</a>
    </div>
    <div className="header-search">
        <p>Search</p>
    </div>
    <div className="header-login">
        <p>Login</p>
    </div>
    <div className="header-register">
        <p>Register</p>
    </div>

</div>);

export default topHeader;