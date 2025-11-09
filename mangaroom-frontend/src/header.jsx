import logo from './LogoMR.png';
import { HomeIcon, TvIcon, BookOpenIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';


const topHeader = (
    <header className="flex sticky top-0 bg-neutral-800">

        <div className="flex flex-row p-3">

            <picture>
                <source srcSet={logo} type="image/webp" />
                <img src={logo} alt="MangaRoom Logo" width="55px"/>
            </picture>

        </div>

        <div className="flex flex-row p-3 ">
            <input type="text" placeholder="  Search" className="rounded-lg border-2 border-gray-500 pr-50 appearance-none overflow-hidden bg-gray-300 [&::-webkit-input-placeholder]:text-gray-500 [&::-moz-placeholder]:text-gray-500"/>
        </div>

        <div className="flex flex-row uppercase font-medium ml-auto">

            <a href="./home.jsx" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                <HomeIcon className="h-5 w-5" />
                Home
            </a>

            <a href="./on_air.jsx" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                <BookOpenIcon className="h-5 w-5" />
                My Library
            </a>

            <a href="#about" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                <Cog6ToothIcon className="h-5 w-5" />
                Settings
            </a>

            <a href="user" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                <span className="rounded-full bg-blue-500 p-2">
                    <h3>P</h3>
                </span>
            </a>


        </div>



    </header>
);

export default topHeader;
