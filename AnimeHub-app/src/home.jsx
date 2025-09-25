import topHeader from "./header.jsx";

const home =
    (<div className="home-header">
     {topHeader}
    <div className="home-content">
        <div className="home-search">
            <input type="text" placeholder="Search"/>
        </div>
        <div className="home-content-top-text">
            <h3>
                Welcome to AnimeHub, the ultimate destination for anime lovers!
                <br/>
                <br/>
                Discover the latest ongoing series and find out where to watch them for free.
                <br/>
                <br/>
                Our platform features a user-rating system so you can share your opinions and a vibrant discussion board to
                connect with a passionate community of fans.
            </h3>
            <div className="home-content-top-buttons">
                <h3>Watch Now</h3>
                <h3>Learn More</h3>
            </div>
        </div>
        <div className="home-content-middle-text">
            <div className="home-content-middle-text-separator">
                <h2>Currently On-Air</h2>
            </div>
            <div className="home-content-middle-text-animes">
                <div className="home-content-middle-text-anime-box-one">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>
                <div className="home-content-middle-text-anime-box-two">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>
                <div className="home-content-middle-text-anime-box-three">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>
            </div>
            <div className="home-content-middle-text-browse-genre">
                <div className="home-content-middle-text-browse-action-genre">
                    <h3>Action</h3>
                </div>
                <div className="home-content-middle-text-browse-romance-genre">
                    <h3>Romance</h3>
                </div>
                <div className="home-content-middle-text-browse-comedy-genre">
                    <h3>Comedy</h3>
                </div>
                <div className="home-content-middle-text-browse-adventure-genre">
                    <h3>Adventure</h3>
                </div>
            </div>
            <div className="home-content-middle-text-recent-discussions">
                <div className="home-content-middle-text-recent-discussion-box-one">
                    <h3>Blahblah</h3>
                </div>
                <div className="home-content-middle-text-recent-discussion-box-two">
                    <h3>Blahblah</h3>
                </div>
            </div>
            <div className="home-content-middle-text-recent-reviews">
                <div className="home-content-middle-text-recent-review-box-one">
                    <h3>Blahblah</h3>
                </div>
                <div className="home-content-middle-text-recent-review-box-two">
                    <h3>Blahblah</h3>
                </div>
                <div className="home-content-middle-text-recent-review-box-three">
                    <h3>Blahblah</h3>
                </div>
            </div>
            <div className="home-content-footer">
                <div className="home-content-footer-website-title">
                    <h3>AnimeHub</h3>
                </div>
                <div className="home-content-footer-links">
                    <h3>About Us</h3>
                    <h3>Contact</h3>
                    <h3>Privacy Policy</h3>
                    <h3>Terms of Service</h3>
                </div>
                <div className="home-content-footer-social-media">
                    <h3>insert logos and href here</h3>
                </div>
            </div>
            <div className="home-content-footer-copyright">
                <h4>© 2025 AnimeHub. All rights reserved.</h4>
            </div>
        </div>
    </div>
</div>);

export default home;