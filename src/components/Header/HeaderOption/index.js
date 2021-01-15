import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'
import './style.scss'

const HeaderOption = ({ Icon, title, avatar, onClick}) => {
    const user = useSelector(selectUser);
   
    return (
        <div onClick={onClick} className="header-option">
            {Icon && <Icon className="icon" />}
            {avatar && 
                <Avatar src={user?.photoUrl} className="icon">
                    {user?.displayName[0]}
                </Avatar>
            }
            
            <h5 className="title">{title}</h5>
        </div>
    )
}

export default HeaderOption


