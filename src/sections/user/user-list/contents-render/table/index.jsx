import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import TableComponent from "@/components/type/table";
import { userListSelector } from "@/recoil/user/user-list";
import { userListParam } from "@/recoil/user/user-list/parmas";

const SUB_HEAD = [
    { id: '', label: '',colSpan: 3 },
    { id: '1', label: '계정정보', colSpan: 3 },
    { id: '2', label: '인증정보', colSpan: 2 },
    { id: '3', label: '유저정보', colSpan: 3 },
    { id: '4', label: '결제내역', colSpan: 3 },
    { id: '5', label: '활동정보', colSpan: 3 },
  ];

const MAIN_HEAD = [
    { id: 'user_idx', label: '번호', align: 'center', minWidth: 100},
    { id: 'status_name', label: '상태', align: 'center', minWidth: 100 },
    { id: 'login_social_code_name', label: '가입', align: 'center', minWidth: 140 },
    { id: 'profile_id', label: '프로필아이디', align: 'center', minWidth: 150 },
    { id: 'nick', label: '닉네임', align: 'center', minWidth: 140 },
    { id: 'login_id', label: '이메일', align: 'center', minWidth: 140 },
    { id: 'phone', label: '핸드폰', align: 'center', minWidth: 140 },
    { id: 'ipin', label: '아이핀', align: 'center', minWidth: 140 },
    { id: 'name', label: '이름', align: 'center', minWidth: 140 },
    { id: 'gender', label: '성별', align: 'center', minWidth: 140 },
    { id: 'birthday', label: '생년월일', align: 'center', minWidth: 140 },
    { id: 'buy_total', label: '결제금액', align: 'center', minWidth: 140, comma: true },
    { id: 'corn_have', label: '보유하트', align: 'center', minWidth: 140 , comma: true},
    { id: 'corn_use', label: '사용하트', align: 'center', minWidth: 140, comma: true },
    { id: 'reg_date', label: '가입일', align: 'center', minWidth: 140 },
    { id: 'ip', label: '접속IP', align: 'center', minWidth: 140 },
    { id: 'ban', label: '제재내역', align: 'center', minWidth: 140, button: true },
  ];

function UserListTable({tab}) {
  const userList = useRecoilValue(userListSelector);
  const setType = useSetRecoilState(userListParam);
  const { page, data } = userList;

    return (
        <TableComponent
            page={page.page - 1}
            total={page.total}
            limit={page.limit}
            offset={page.offset}
            subColumns={SUB_HEAD}
            mainColumns={MAIN_HEAD}
            setType={setType}
            data={data}
        />
    )
}

export default UserListTable;