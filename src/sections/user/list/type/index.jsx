import React, { useMemo } from "react";
import ChartComponent from "./Chart";
import TableComponent from "./Table";

function ContentsRender({tab}) {
    const render = useMemo(() => (
        <>
        {tab === 0 && (<TableComponent />)}
        {tab === 1 && (<ChartComponent />)}
        </>
    ), [tab])
    return (
        <>
            {render}
        </>
    )
}

export default ContentsRender;