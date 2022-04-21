import React, { useContext } from 'react';
import '../../css/Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import { UserContext } from 'context/UserContext';
import { types } from 'components/types/types';

function Sidebar() {
    const { dispatch } = useContext(UserContext);

    const handleClick = () => {
        const action = { type: types.logout };
        dispatch(action);
    };

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            {/* <SidebarOption Icon={MailOutlineIcon} text="Messages" /> */}
            {/* <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /> */}
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            {/* <SidebarOption Icon={PermIdentityIcon} text="Profile" /> */}
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button
                variant="outlined"
                className="sidebar__tweet"
                fullWidth
                onClick={handleClick}
            >
                Log Out
            </Button>
        </div>
    );
}

export default Sidebar;
