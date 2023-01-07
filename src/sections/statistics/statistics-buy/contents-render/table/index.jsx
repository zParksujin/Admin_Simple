import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import TableComponent from "@/components/type/table";
import { statisticsBuySelector } from "@/recoil/statistics/statistics-buy";
import { statisticsBuyParam } from "@/recoil/statistics/statistics-buy/parmas";

const SUB_HEAD = [
    { id: '', label: '구분',colSpan: 1 },
    { id: '1', label: '구독', colSpan: 4 },
    { id: '2', label: '유료포스트', colSpan: 4 },
    { id: '3', label: '메시지', colSpan: 4 },
    { id: '4', label: '응원', colSpan: 4 },
    { id: '5', label: '합계', colSpan: 4 },
  ];

const MAIN_HEAD = [
    { id: 'buy_date', label: '결제', align: 'center', minWidth: 120},
    { id: 'subsc_price', label: '매출', align: 'center', minWidth: 100 },
    { id: 'subsc_count', label: '결제건수', align: 'center', minWidth: 140 },
    { id: 'subsc_cancel_price', label: '취소', align: 'center', minWidth: 150 },
    { id: 'subsc_cancel_count', label: '취소건수', align: 'center', minWidth: 140 },
    { id: 'paypost_price', label: '매출', align: 'center', minWidth: 100 },
    { id: 'paypost_count', label: '결제건수', align: 'center', minWidth: 140 },
    { id: 'paypost_cancel_price', label: '취소', align: 'center', minWidth: 150 },
    { id: 'paypost_cancel_count', label: '취소건수', align: 'center', minWidth: 140 },
    { id: 'content_price', label: '매출', align: 'center', minWidth: 100 },
    { id: 'content_count', label: '결제건수', align: 'center', minWidth: 140 },
    { id: 'content_cancel_price', label: '취소', align: 'center', minWidth: 150 },
    { id: 'content_cancel_count', label: '취소건수', align: 'center', minWidth: 140 },
    { id: 'spon_price', label: '매출', align: 'center', minWidth: 100 },
    { id: 'spon_count', label: '결제건수', align: 'center', minWidth: 140 },
    { id: 'spon_cancel_price', label: '취소', align: 'center', minWidth: 150 },
    { id: 'spon_cancel_count', label: '취소건수', align: 'center', minWidth: 140 },
    { id: 'total_price', label: '매출', align: 'center', minWidth: 100 },
    { id: 'total_count', label: '결제건수', align: 'center', minWidth: 140 },
    { id: 'total_cancel_price', label: '취소', align: 'center', minWidth: 150 },
    { id: 'total_cancel_count', label: '취소건수', align: 'center', minWidth: 140 },
  ];

function StatisticsBuyTable({tab}) {
  const statisticsBuyList = useRecoilValue(statisticsBuySelector);
  const setType = useSetRecoilState(statisticsBuyParam);

    return (
        <TableComponent
            subColumns={SUB_HEAD}
            mainColumns={MAIN_HEAD}
            setType={setType}
            data={statisticsBuyList}
        />
    )
}

export default StatisticsBuyTable;