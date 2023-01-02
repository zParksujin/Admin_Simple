import React from "react";
import { useRecoilValue } from "recoil";
import { userListSelector } from "@/recoil/user/list";

function TableComponent() {
    const userList = useRecoilValue(userListSelector);
    console.log(userList);
    
    return (
        <>
           table 
        </>
    );
}

export default TableComponent;