import { Link, Routes, Route} from "react-router-dom";
import Library from "./library.jsx";
import Settings from "./settings.jsx";
import home_elem from "./home_elem.jsx";
import {General, Notifications, Profile, Security} from "./settings.jsx";
import logo from './LogoMR.png';
import { HomeIcon, BookOpenIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';

function App() {
    return (
            <div className="text-white bg-slate-950">
                <div className="text-white flex flex-row sticky top-0 justify-between items-center bg-gray-900 border-b-2 border-gray-700 h-16 w-full">
                    <div className="p-3">
                        <picture>
                            <source srcSet={logo} type="image/webp" />
                            <img src={logo} alt="MangaRoom Logo" width="55px"/>
                        </picture>
                    </div>
                    <div className="flex flex-row p-3 ">
                        <input type="text" placeholder="  Search" className="rounded-lg border-2 border-gray-500 pr-50 appearance-none overflow-hidden bg-gray-300 [&::-webkit-input-placeholder]:text-gray-500 [&::-moz-placeholder]:text-gray-500"/>
                    </div>
                    <div className="flex flex-row uppercase font-medium ml-auto">
                        <Link to="/" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                            <HomeIcon className="h-5 w-5" />
                            Home
                        </Link>
                        <Link to="/library" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                            <BookOpenIcon className="h-5 w-5" />
                            My Library
                        </Link>
                        <Link to="/settings" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                            <Cog6ToothIcon className="h-5 w-5" />
                            Settings
                        </Link>
                        <Link to="/profile" className="inline-flex items-center gap-2 p-3 hover:text-blue-400">
                        <span className="rounded-full bg-blue-500 p-2">
                            <h3>P</h3>
                        </span>
                        </Link>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={home_elem}/>
                    <Route path="/library" element={Library}/>
                    <Route path="/settings" element={Settings}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/general" element={<General/>}></Route>
                    <Route path="/notifications" element={<Notifications/>}></Route>
                    <Route path="/security" element={<Security/>}></Route>
                </Routes>
        </div>
    )
}

export default App