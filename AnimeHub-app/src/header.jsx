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
        <a href = "#ongoing">Ongoing</a>
        <a href = "#upcoming">Upcoming</a>
        <a href = "#about">Community</a>
        <a href = "#contact">Contact</a>
    </div>
</div>);

export default topHeader;