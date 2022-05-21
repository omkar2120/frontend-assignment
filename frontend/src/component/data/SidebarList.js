import React from 'react'
import Data from "./SidebarData"
import {List,ListItem,ListItemIcon,ListItemText} from "@mui/material"
import {Link} from "react-router-dom"
function SidebarList() {
  return (
    <div style={{minHeight:"30%",height:"auto"}}>
        {Data.map((d)=>(
            <List>
            <Link to={d.link} style={{textDecoration:"none"}}>
                <ListItem button>
                    <ListItemIcon>
                        {d.icon}
                    </ListItemIcon>
                    <ListItemText primary={d.data} style={{color:"white"}}/>
                </ListItem>
                </Link>
            </List>

        ))}

    </div>
  )
}

export default SidebarList