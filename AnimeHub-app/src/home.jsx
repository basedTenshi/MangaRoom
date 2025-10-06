import topHeader from "./header.jsx";
import topTextBG from "./TopText-BG.png";
import LogoHome from "./AnimeHub-LogoUnused.png";
import placeHolder1 from "./placeholder1.png";
import heroplaceHolder1 from "./HeroPicPlaceholder.png";
import heroplaceHolder2 from "./HeroPlaceHolder2.png";

/**
 * Represents the main home UI component for the AnimeHub platform.
 * This structure includes various sub-sections designed to provide
 * users with information about trending anime, a community discussion forum,
 * genre browsing options, and recent reviews.
 *
 * The `home` component features:
 * - A welcoming header and call-to-action links for engaging users to explore.
 * - A "Currently On-Air" section showcasing currently airing anime series.
 * - "Browse by Genre" options for category-based exploration.
 * - "Recent Discussions" and "Recent Reviews" to highlight community engagement.
 * - Footer with links to key pages like "About Us," "Contact," along with social media integration.
 *
 * The layout is styled with a responsive design, using utility classes
 * for spacing, positioning, and text formatting. This component is critical
 * for delivering an engaging, interactive user experience on the homepage.
 */
const home =
    (<div id="home-content"  className="text-white h-full w-full bg-cover">
        {topHeader}
        <div className="flex">
            <div className="flex flex-col m-5 pl-5 pr-25 rounded-l-md rounded-r-md bg-linear-to-t from-sky-500 to-indigo-500">
                <h3 className="text-6xl mb-0 mt-5 ml-7 font-bold">Welcome to AnimeHub!</h3>
                <h3 className="text-3xl mt-20 ml-7">Discover the latest ongoing series and find out where to watch them for free.
                    Our platform features a user-rating system so you can share your opinions and a vibrant discussion board to
                    connect with a passionate community of fans.</h3>
                <div className="flex mt-25 text-2xl pl-7 font-mono gap-x-5">
                    <h3 className="border-2 rounded-l-md rounded-r-md p-2 font-bold">Find Sources</h3>
                    <h3 className="border-2 rounded-l-md rounded-r-md p-2 font-bold">Learn More</h3>
                </div>
            </div>
            <div className="flex flex-row m-5 pl-5 rounded-l-md rounded-r-md bg-linear-to-t from-sky-500 to-indigo-500">
                <picture className="p-2">
                    <source srcSet={heroplaceHolder1} type="image/webp" />
                    <img src={heroplaceHolder1} alt="AnimeHub Logo" className="w-[1125px] max-w-full h-auto rounded-l-md rounded-r-md"/>
                </picture>
                <picture className="p-2">
                    <source srcSet={heroplaceHolder2} type="image/webp" />
                    <img src={heroplaceHolder2} alt="AnimeHub Logo" className="w-[1263px] max-w-full h-auto rounded-l-md rounded-r-md"/>
                </picture>
            </div>
        </div>
        <div id="home-content-middle-text">
            <div id="home-content-middle-text-separator" className="flex mt-12 pl-5 text-2xl font-medium">
                <h2>Currently On-Air</h2>
            </div>
            <div id="home-content-middle-text-animes" className="flex justify-around mb-15 pt-15">
                <div id="home-content-middle-text-anime-box-one" className="flex flex-col gap-y-5 border-2 pb-20 pl-20 pr-20 pt-20 font-mono">
                    <div className="border-2 items-center">
                        <picture>
                            <source srcSet={placeHolder1} type="image/webp" />
                            <img src={placeHolder1} className="w-1/2" alt="AnimeHub Logo"/>
                        </picture>
                    </div>
                    <div className="border-2 ml-50">
                        <h3>Episode</h3>
                    </div>
                </div>
                <div id="home-content-middle-text-anime-box-two" className="flex flex-col border-2 pb-20 pl-20 pr-20 pt-20 font-mono">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>
                <div id="home-content-middle-text-anime-box-three" className="flex flex-col border-2 pb-20 pl-20 pr-20 pt-20 font-mono">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>
            </div>
            <div id="home-content-middle-text-separator-browse-genre" className="flex mb-5 pl-5 text-2xl font-medium">
                <h2>Browse by Genre</h2>
            </div>
            <div id="home-content-middle-text-browse-genre" className="flex justify-evenly mb-15">
                <div id="home-content-middle-text-browse-action-genre" className="flex border-2 p-20 font-mono">
                    <h3>Action</h3>
                </div>
                <div id="home-content-middle-text-browse-romance-genre" className="flex border-2 p-20 font-mono">
                    <h3>Romance</h3>
                </div>
                <div id="home-content-middle-text-browse-comedy-genre" className="flex border-2 p-20 font-mono">
                    <h3>Comedy</h3>
                </div>
                <div id="home-content-middle-text-browse-adventure-genre" className="flex border-2 p-20 font-mono">
                    <h3>Adventure</h3>
                </div>
            </div>
            <div id="home-content-middle-text-separator-recent-discussions" className="flex mb-5 pl-5 text-2xl font-medium">
                <h2>Recent Discussions</h2>
            </div>
            <div id="home-content-middle-text-recent-discussions" className="flex justify-evenly mb-15">
                <div id="home-content-middle-text-recent-discussion-box-one" className="font-mono border-2 p-30">
                    <h3>Blahblah</h3>
                </div>
                <div id="home-content-middle-text-recent-discussion-box-two" className="font-mono border-2 p-30">
                    <h3>Blahblah</h3>
                </div>
            </div>
            <div id="home-content-middle-text-separator-recent-reviews" className="flex mb-5 pl-5 text-2xl font-medium">
                <h2>Recent Reviews</h2>
            </div>
            <div id="home-content-middle-text-recent-reviews flex" className="flex justify-evenly mb-15">
                <div id="home-content-middle-text-recent-review-box-one" className="font-mono border-2 p-30">
                    <h3>Blahblah</h3>
                </div>
                <div id="home-content-middle-text-recent-review-box-two" className="font-mono border-2 p-30">
                    <h3>Blahblah</h3>
                </div>
                <div id="home-content-middle-text-recent-review-box-three" className="font-mono border-2 p-30">
                    <h3>Blahblah</h3>
                </div>
            </div>
            <div id="home-content-footer" className="flex border-2 border-white">
                <div id="home-content-footer-website-title" className="flex border-2 font-mono">
                    <h3>AnimeHub</h3>
                </div>
                <div id="home-content-footer-links" className="flex flex-col border-2 font-mono ml-55">
                    <h3>About Us</h3>
                    <h3>Contact</h3>
                    <h3>Privacy Policy</h3>
                    <h3>Terms of Service</h3>
                </div>
                <div id="home-content-footer-social-media" className="flex flex-col ml-auto">
                    <h3>insert logos and href here</h3>
                </div>
            </div>
            <div id="home-content-footer-copyright" className="flex justify-center pt-5 pb-5">
                <h4>© 2025 AnimeHub. All rights reserved.</h4>
            </div>
        </div>
    </div>);

export default home;
