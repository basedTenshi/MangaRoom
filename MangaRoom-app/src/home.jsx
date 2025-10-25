import topHeader from "./header.jsx";
import {ArrowTrendingUpIcon} from '@heroicons/react/24/solid';
import {ChartBarSquareIcon} from '@heroicons/react/24/solid';
import {ListBulletIcon} from '@heroicons/react/24/solid';

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

        <div className="flex flex-col m-5 pl-5">
            <div id="HomeTextHeader">
                <h2 className="ml-20 font-medium text-4xl">Dashboard</h2>
            </div>
        </div>
    <div className="flex flex-col mr-15 ml-15">
        <div className="flex pl-10">
            <div id="ReadingSummaryCardDashboard" className="flex flex-col rounded-lg border-2 bg-gray-900 pl-5.5 pr-5.5 ml-6">
                <div className="inline-flex items-center font-medium text-xl gap-2 pt-3 ">
                    <ChartBarSquareIcon className="h-5 w-5 text-blue-500"/>
                    Reading Summary
                </div>
                <div className="flex flex-row pt-5 pb-2">
                    <h4 className="text-neutral-400 text-m font-medium">Total Manga Tracked:</h4>
                    <span className="flex ml-auto pl-5 pr-1 text-blue-500 text-2xl font-bold">195</span>
                </div>
                <div className="flex flex-row pt-3 pb-5">
                    <h4 className="text-neutral-400 text-m font-medium">Chapters Read:</h4>
                    <span className="flex ml-32 pl-5 pr-1 text-blue-500 text-2xl font-bold">185</span>
                </div>
                <hr className="border-gray-700 pt-2 pb-1 mr-1 ml-0">
                </hr>
                <div className="flex font-medium">
                    <h4 className="text-sm">Current Status: </h4>
                    <span className="flex ml-auto pt-1 pb-1 pl-2 pr-2 mb-2 rounded-2xl text-green-300 bg-green-900 text-sm">On Target</span>
                </div>
            </div>


            <div id="PacePredictorDashboard" className="gap-y-11 rounded-lg border-2 bg-gray-900 pl-8 ml-5 pr-15">
                <div className="inline-flex flex-row items-center font-medium text-2xl text-pink-500 gap-2 p-3">
                    <ArrowTrendingUpIcon className="h-5 w-5"/>
                        Pace Predictor Insights
                </div>
                <div className="flex flex-row font-medium text-2xl">
                    <h5 className="text-sm text-justify">Based on your average pace of 26 chapters/day, here are your projections:</h5>
                </div>
                <div className="inline-flex gap-x-11">
                    <div className="flex flex-col bg-black rounded-lg mt-2 mb-2 pr-26 p-4">
                        <div className="block">
                            <h2 className="font-medium">One Piece (Current arc)</h2>
                        </div>
                        <div className="block">
                            <h2 className="font-medium text-xl">Finish in <span className="text-pink-500">112 Days</span></h2>
                        </div>
                        <div className="blockx">
                            <h2 className="font-medium text-sm">Target: Chapter 1100. Average: 15 ch/day.</h2>
                        </div>
                    </div>
                    <div className="flex flex-col bg-black rounded-lg mt-2 mb-2 pr-26 p-4">
                        <div>
                            <h2 className="font-medium">Berserk</h2>
                        </div>
                        <div>
                            <h2 className="font-medium text-xl ">Finish in <span className="text-pink-500">38 Days</span></h2>
                        </div>
                        <div>
                            <h2 className="font-medium text-sm">Target: Latest release. Average: 5 ch/day.</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row font-medium text-2xl bg-blue-400 rounded-lg p-5 justify-center mt-3 mb-5">
                    <h3 className="text-sm">Optimize your pace</h3>
                </div>

            </div>
        </div>


        <div id="home-content-middle-text" className="flex flex-col ">

            <div id="home-content-middle-text-separator" className="flex mt-9 pl-15 text-2xl font-medium">
                <ListBulletIcon className="h-5 w-5 m-2 text-blue-500"/>
                <h2>Currently Reading (<span>3</span> Series)</h2>
            </div>

            <div id="home-content-middle-text-animes" className="flex max-w-7xl ml-15 flex-col gap-y-9 justify-around mb-15 pt-6">

                <div id="home-content-middle-text-anime-box-one" className="flex flex-col rounded-lg border-2 pb-10 pl-20 pr-20 pt-10 font-mono bg-gray-900">
                    <div className="flex border-2 border-gray-500 rounded-lg font-medium text-xl text-center p-5 mr-25"></div>
                </div>

                <div id="home-content-middle-text-anime-box-two" className="flex flex-col rounded-lg border-2 pb-10 pl-20 pr-20 pt-10 font-mono bg-gray-900">
                    <div className="flex border-2 border-gray-500 rounded-lg font-medium text-xl text-center p-5 mr-25"></div>
                </div>

                <div id="home-content-middle-text-anime-box-three" className="flex flex-col rounded-lg border-2 pb-10 pl-20 pr-20 pt-10 font-mono bg-gray-900">
                    <div className="flex border-2 border-gray-500 rounded-lg font-medium text-xl text-center p-5 mr-25"></div>
                </div>




            </div>

        </div>

    </div>

    </div>);

export default home;
