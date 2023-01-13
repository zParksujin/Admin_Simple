import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import TableComponent from '@/components/type/table';
import { contentListSelector } from '@/recoil/content/content-list';
import { contentListParam } from '@/recoil/content/content-list/parmas';

const MAIN_HEAD = [
  // 인덱싱 필요
  { id: 'message_idx', label: '콘텐츠코드', align: 'center', minWidth: 100 },
  { id: 'creator_nick', label: '크리에이터', align: 'center', minWidth: 140 },
  { id: 'adult_yn', label: '성인콘텐츠', align: 'center', minWidth: 150 },
  { id: 'price', label: '금액', align: 'center', minWidth: 140, comma: true },
  { id: 'create_date', label: '판매일', align: 'center', minWidth: 140 },
  { id: 'buy_count', label: '구매', align: 'center', minWidth: 140, comma: true },
  { id: 'status', label: '상태', align: 'center', minWidth: 140 },
  { id: 'memo', label: '메모', align: 'center', minWidth: 140 },
  { id: 'ban', label: '관리', align: 'center', minWidth: 140, button: true },
];

function ContentListTable() {
  const contentList = useRecoilValue(contentListSelector('list'));
  const setType = useSetRecoilState(contentListParam);
  const { page, data } = contentList;

  return (
    <TableComponent
      page={page.page - 1}
      total={page.total}
      limit={page.limit}
      offset={page.offset}
      mainColumns={MAIN_HEAD}
      setType={setType}
      data={data}
    />
  );
}

export default ContentListTable;
