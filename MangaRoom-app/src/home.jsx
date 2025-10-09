import topHeader from "./header.jsx";

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

        <div className="flex flex-col m-5 pl-5 pr-25">
            <div id="HomeTextHeader">
                <h2 className="font-medium text-4xl">Dashboard</h2>
            </div>
        </div>

        <div className="inline-flex m-5">
            <div id="ReadingSummaryCardDashboard" className="flex flex-col gap-y-11 rounded-lg border-2 border-gray-500 pl-8 pr-8">
                <div className="flex font-medium text-2xl pt-5">
                    <h4>Reading Summary</h4>
                    <span className="flex ml-auto">195</span>
                </div>
                <div className="flex flex-row  font-medium text-2xl">
                    <h4>Total Manga Tracked:</h4>
                    <span className="flex ml-auto">195</span>
                </div>
                <div className="flex font-medium text-2xl">
                    <h4>Chapters Read (This Week): </h4>
                    <span className="flex ml-auto pl-5 pr-0">185</span>
                </div>
                <div className="border-1 p-1"></div>
                <div className="flex font-medium text-2xl">
                    <h4>Current Status: </h4>
                    <span className="flex ml-auto pl-5 pr-3 mb-5 border-2 rounded-2xl">On Target</span>
                </div>

            </div>

            <div id="PacePredictorDashboard" className="flex flex-col gap-y-11 rounded-lg border-2 border-gray-500 pl-8 ml-35 pr-125 ">
                <div className="flex font-medium text-2xl">
                    <h4>Pace Predictor Insights</h4>
                </div>
                <div className="flex font-medium text-2xl">

                </div>
            </div>
        </div>


        <div id="home-content-middle-text">

            <div id="home-content-middle-text-separator" className="flex mt-12 pl-5 text-2xl font-medium">
                <h2>Currently Reading</h2>
            </div>

            <div id="home-content-middle-text-animes" className="flex flex-col gap-y-9 justify-around mb-15 pt-15">

                <div id="home-content-middle-text-anime-box-one" className="flex flex-col rounded-lg gap-y-5 border-2 border-gray-500 pb-20 pl-20 pr-20 pt-20 font-mono">
                </div>

                <div id="home-content-middle-text-anime-box-two" className="flex flex-col rounded-lg border-2 border-gray-500 pb-20 pl-20 pr-20 pt-20 font-mono">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>

                <div id="home-content-middle-text-anime-box-three" className="flex flex-col rounded-lg border-2 border-gray-500 pb-20 pl-20 pr-20 pt-20 font-mono">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>

            </div>

        </div>

    </div>);

export default home;
