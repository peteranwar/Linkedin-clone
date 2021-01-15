import { Avatar } from "@material-ui/core";
import "./style.scss";
import cover from "../../assets/images/cover.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="recentItem">
      <span className="hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <img src={cover} alt="" />
        <Avatar src={user?.photoUrl} className="avatar" >
            {user?.displayName[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h5>{user?.email}</h5>
      </div>

      <div className="sidebar-stats">
        <div className="stat">
          <p>Who viewed you</p>
          <p className="statNumber">50</p>
        </div>
        <div className="stat">
          <p>Views on post</p>
          <p className="statNumber">50</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <h5>Recent</h5>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("softwareengineering")}
        {recentItems("angular")}
        {recentItems("design")}
        {recentItems("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
