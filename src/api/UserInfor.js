const UserInfor = () => {
  const userId = typeof window !== "undefined" ? localStorage?.getItem('userId') : false;
  const infor = {
    userId,
  }
  return infor
}

export default UserInfor
