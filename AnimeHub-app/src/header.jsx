import logoImage from './AnimeHub-LogoText.png';
import { PlayCircleIcon, HomeIcon, TvIcon, TagIcon, ChatBubbleLeftRightIcon, StarIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';


const topHeader = (
    <div className="flex sticky top-0 bg-[#12131F]">
        <div className="flex flex-row p-3">
            <picture>
                <source srcSet={logoImage} type="image/webp" />
                <img src={logoImage} alt="AnimeHub Logo" width="145px" height="100px"/>
            </picture>
        </div>
        <div className="flex flex-row uppercase font-medium">
            <a href="./home.jsx" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                <HomeIcon className="h-5 w-5" />
                Home
            </a>

            <a href="./on_air.jsx" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                <TvIcon className="h-5 w-5" />
                On-air
            </a>
            <a href="#upcoming" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                <TagIcon className="h-5 w-5" />
                Genres
            </a>

            <a href="#about" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Discussions
            </a>

            <a href="#contact" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                <StarIcon className="h-5 w-5" />
                Reviews
            </a>
        </div>
    <div className="inline-flex items-center gap-2 p-3 ml-auto uppercase font-medium">
        <MagnifyingGlassIcon className="h-5 w-5"/>
        Search
    </div>
    <div className="inline-flex items-center gap-2 p-3 uppercase font-medium">
        <UserIcon className="h-5 w-5"/>
        Login
    </div>
    </div>
);

export default topHeader;
