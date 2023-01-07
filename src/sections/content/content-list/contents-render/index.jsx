import React, { useMemo } from "react";
import ContentListImage from "./image-list";
import ContentListTable from "./table";


function ContentsRender({ tab }) {
    const render = useMemo(() => (
        <>
        {tab === 0 && (<ContentListTable />)}
        {tab === 1 && (<ContentListImage />)}
        </>
    ), [tab])
    
    return (
        <>
            {render}
        </>
    )
}

export default ContentsRender;