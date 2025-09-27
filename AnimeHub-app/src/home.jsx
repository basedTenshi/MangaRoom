import topHeader from "./header.jsx";

const home =
    (<div id="home-content"  className="text-white h-full w-full">
        {topHeader}
        <div id="home-content-top-text" className="flex flex-col m-10 gap-y-10 border-2 border-white">
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
            <div className="home-content-top-buttons flex border-2 border-white">
                <h3>Watch Now</h3>
                <h3>Learn More</h3>
            </div>
        </div>
        <div id="home-content-middle-text">
            <div id="home-content-middle-text-separator" className="flex border-2 border-white">
                <h2>Currently On-Air</h2>
            </div>
            <div id="home-content-middle-text-animes" className="flex">
                <div id="home-content-middle-text-anime-box-one">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>
                <div id="home-content-middle-text-anime-box-two">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>
                <div id="home-content-middle-text-anime-box-three">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>
            </div>
            <div id="home-content-middle-text-separator-browse-genre" className="flex border-5 border-black">
                <h2>Browse by Genre</h2>
            </div>
            <div id="home-content-middle-text-browse-genre" className="flex">
                <div id="home-content-middle-text-browse-action-genre">
                    <h3>Action</h3>
                </div>
                <div id="home-content-middle-text-browse-romance-genre">
                    <h3>Romance</h3>
                </div>
                <div id="home-content-middle-text-browse-comedy-genre">
                    <h3>Comedy</h3>
                </div>
                <div id="home-content-middle-text-browse-adventure-genre">
                    <h3>Adventure</h3>
                </div>
            </div>
            <div id="home-content-middle-text-separator-recent-discussions" className="flex border-5 border-black">
                <h2>Recent Discussions</h2>
            </div>
            <div id="home-content-middle-text-recent-discussions" className="flex">
                <div id="home-content-middle-text-recent-discussion-box-one">
                    <h3>Blahblah</h3>
                </div>
                <div id="home-content-middle-text-recent-discussion-box-two">
                    <h3>Blahblah</h3>
                </div>
            </div>
            <div id="home-content-middle-text-separator-recent-reviews" className="flex border-5 border-black">
                <h2>Recent Reviews</h2>
            </div>
            <div id="home-content-middle-text-recent-reviews flex" className="flex">
                <div id="home-content-middle-text-recent-review-box-one">
                    <h3>Blahblah</h3>
                </div>
                <div id="home-content-middle-text-recent-review-box-two">
                    <h3>Blahblah</h3>
                </div>
                <div id="home-content-middle-text-recent-review-box-three">
                    <h3>Blahblah</h3>
                </div>
            </div>
            <div id="home-content-footer">
                <div id="home-content-footer-website-title">
                    <h3>AnimeHub</h3>
                </div>
                <div id="home-content-footer-links">
                    <h3>About Us</h3>
                    <h3>Contact</h3>
                    <h3>Privacy Policy</h3>
                    <h3>Terms of Service</h3>
                </div>
                <div id="home-content-footer-social-media">
                    <h3>insert logos and href here</h3>
                </div>
            </div>
            <div id="home-content-footer-copyright">
                <h4>© 2025 AnimeHub. All rights reserved.</h4>
            </div>
        </div>
    </div>);

export default home;
