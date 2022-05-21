import {ImChrome} from "react-icons/im"
import {FcIdea} from "react-icons/fc"
import {AiFillContacts,AiFillSetting} from "react-icons/ai"
import {FaUserTie,FaTicketAlt} from "react-icons/fa"
import {RiArticleFill} from "react-icons/ri"
import {MdSubscriptions} from "react-icons/md"
export default [
    {
        data:"Overview",
        icon:<ImChrome color='white'/>,
        link:"/overview"
    },
    {
        data:"Tickets",
        icon:<FaTicketAlt color="white"/>,
        link:"/tickets"
    },
    {
        data:"Ideas",
        icon:<FcIdea color='white'/>,
        link:"#"
    },
    {
        data:"Contacts",
        icon:<AiFillContacts color='white'/>,
        link:"#"
    },
    {
        data:"Agents",
        icon:<FaUserTie color='white'/>,
        link:"#"
    },
    {
        data:"Articles",
        icon:<RiArticleFill color='white'/>,
        link:"#"
    },
    {
        data:"Settings",
        icon:<AiFillSetting color='white'/>,
        link:"#"
    }
    ,
    {
        data:"Subscription",
        icon:<MdSubscriptions color='white'/>,
        link:"#"
    }
]