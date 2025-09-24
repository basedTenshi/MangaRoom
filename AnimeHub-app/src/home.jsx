import topHeader from "./header.jsx";

const home = (<div className="home-header">
        {topHeader}
    <div className="home-content">
        <div className="home-search">
            <input type="text" placeholder="Search"/>
        </div>
    </div>
</div>);

export default home;