import topHeader from "./header.jsx";
import {ArrowTrendingUpIcon} from '@heroicons/react/24/solid';
import {ChartBarSquareIcon} from '@heroicons/react/24/solid'

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
    (<div id="home-content"  className="text-white h-full w-full bg-cover bg-[#111417]">
        {topHeader}

        <div className="flex flex-col m-5 pl-5 pr-25">
            <div id="HomeTextHeader">
                <h2 className="font-medium text-4xl">Dashboard</h2>
            </div>
        </div>

        <div className="inline-flex m-5">
            <div id="ReadingSummaryCardDashboard" className="flex flex-col gap-y-9 rounded-lg border-2 border-gray-500 bg-gray-900 pl-8 pr-20">
                <div className="inline-flex items-center font-medium text-2xl gap-2 pt-3 ">
                    <ChartBarSquareIcon className="h-5 w-5 text-blue-500"/>
                    Reading Summary
                </div>
                <div className="flex flex-row  font-medium">
                    <h4 className="text-neutral-400 text-xl">Total Manga Tracked:</h4>
                    <span className="flex ml-auto text-blue-500 text-2xl">195</span>
                </div>
                <div className="flex font-medium">
                    <h4 className="text-neutral-400 text-xl">Chapters Read:</h4>
                    <span className="flex ml-auto pl-5 pr-0 text-blue-500 text-2xl">185</span>
                </div>
                <hr className="border-gray-700 p-0 m-0">
                </hr>
                <div className="flex font-medium text-1xl pt-0 mb-5">
                    <h4>Current Status: </h4>
                    <span className="flex ml-auto pt-1 pb-1 pl-2 pr-2 mb-2 rounded-2xl text-green-300 bg-green-900">On Target</span>
                </div>
            </div>

            <div id="PacePredictorDashboard" className="gap-y-11 rounded-lg border-2 border-gray-500 bg-gray-900 pl-8 ml-35 pr-125 ">
                <div className="inline-flex flex-row items-center font-medium text-2xl text-pink-500 gap-2 p-3">
                    <ArrowTrendingUpIcon className="h-5 w-5"/>
                        Pace Predictor Insights
                </div>
                <div className="flex flex-row font-medium text-2xl">
                    <h5 className="text-sm text-justify">Based on your average pace of 26 chapters/day, here are your projections:</h5>
                </div>
                <div className="inline-flex gap-x-11">
                    <div className="flex flex-row font-medium text-2xl bg-neutral-800 rounded-lg p-5 mt-15">
                        <h2>Placeholder</h2>
                    </div>
                    <div className="flex flex-row font-medium text-2xl bg-neutral-800 rounded-lg p-5 mt-15">
                        <h2>Placeholder</h2>
                    </div>
                </div>
                <div className="flex flex-row font-medium text-2xl mt-15 bg-blue-400 rounded-lg p-5 justify-center">
                    <h3 className="text-sm ">Optimize your pace</h3>
                </div>

            </div>
        </div>


        <div id="home-content-middle-text" className="flex flex-col ">

            <div id="home-content-middle-text-separator" className="flex mt-12 pl-5 text-2xl font-medium">
                <h2>Currently Reading</h2>
            </div>

            <div id="home-content-middle-text-animes" className="flex flex-col gap-y-9 justify-around mb-15 pt-15">

                <div id="home-content-middle-text-anime-box-one" className="flex flex-col rounded-lg gap-y-5 border-2 border-gray-500 pb-20 pl-20 pr-20 pt-20 font-mono bg-gray-900">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>

                <div id="home-content-middle-text-anime-box-two" className="flex flex-col rounded-lg border-2 border-gray-500 pb-20 pl-20 pr-20 pt-20 font-mono bg-gray-900">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>

                <div id="home-content-middle-text-anime-box-three" className="flex flex-col rounded-lg border-2 border-gray-500 pb-20 pl-20 pr-20 pt-20 font-mono bg-gray-900">
                    <h3>Anime Name</h3>
                    <h3>Episode</h3>
                    <h3>Rating</h3>
                </div>




            </div>

        </div>

    </div>);

export default home;
