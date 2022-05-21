import { Avatar } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import img from '../data/img.jpg'
const img  = "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"

export default [
    {
      image: <Avatar src={img}></Avatar>,
      msg: "Contact Email not Linked",
      updated: "1 hrs ago",
      name: "Sam",
      updateddate: "12-10-2022",
      date: "30-10-2022",
      time: "6:30pm",
      prority: "High",
      icon: <MoreVertIcon />,
    },
    {
      image: <Avatar src={img}></Avatar>,
      msg: "Adding images to features",
      updated: "1 hrs ago",
      name: "Ramshika M",
      updateddate: "12-10-2022",
      date: "30-10-2022",
      time: "6:30pm",
      prority: "Low",
      icon: <MoreVertIcon />,
    },
    {
      image: <Avatar src={img}></Avatar>,
      msg: "Payment not going through",
      updated: "1 hrs ago",
      name: "Shraddha K",
      updateddate: "12-10-2022",
      date: "30-10-2022",
      time: "6:30pm",
      prority: "High",
      icon: <MoreVertIcon />,
    },
    {
      image: <Avatar src={img}></Avatar>,
      msg: "Unable to add replies",
      updated: "1 hrs ago",
      name: "Sanjana N",
      updateddate: "12-10-2022",
      date: "30-10-2022",
      time: "630pm",
      prority: "High",
      icon: <MoreVertIcon />,
    },
    {
      image: <Avatar src={img}></Avatar>,
      msg: "Contact Linked",
      updated: "1 hrs ago",
      name: "Sanjana T",
      updateddate: "12-10-2022",
      date: "30-10-2022",
      time: "6:30pm",
      prority: "Low",
      icon: <MoreVertIcon />,
    },
  ];
