import React, { useMemo } from "react";
import UserListChart from "./chart";
import UserListTable from "./table";

function ContentsRender({ tab }) {
    const render = useMemo(() => (
        <>
        {tab === 0 && (<UserListTable />)}
        {tab === 1 && (<UserListChart />)}
        </>
    ), [tab])
    
    return (
        <>
            {render}
        </>
    )
}

export default ContentsRender;