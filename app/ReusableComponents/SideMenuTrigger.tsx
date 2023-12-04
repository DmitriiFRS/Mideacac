"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSidemenuVisible } from "../Redux/Slice/mainPageSlice";

function SideMenuTrigger() {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(setSidemenuVisible(false));
   }, []);
   return <></>;
}
export default SideMenuTrigger;
