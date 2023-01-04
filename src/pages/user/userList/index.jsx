import React from 'react';
import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '@/components/settings';
import UserListSection from '@/sections/user/userList';

function UserList() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> 회원목록 | Fancoo admin</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <UserListSection />
      </Container>
    </>
  );
}

export default UserList;
