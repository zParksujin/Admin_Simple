const setToken = (userInfo) => {
  if (typeof userInfo === 'string') {
    const data = JSON.parse(userInfo.substring(16));
    localStorage.setItem('admin_access_token', data?.token?.access_token);
    localStorage.setItem('admin_refresh_token', data?.token?.refresh_token);
    return data;
  }
  localStorage.setItem('admin_access_token', userInfo?.access_token);
  localStorage.setItem('admin_refresh_token', userInfo?.refresh_token);
  return userInfo;
};

export default setToken;
