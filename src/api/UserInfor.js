const UserInfor = () => {
  const userId = typeof window !== "undefined" ? localStorage?.getItem('userId') : false;
  const userName =
    typeof window !== 'undefined' ? localStorage?.getItem('userName') : false
  const infor = {
    userId,
    userName,
  }
  return infor
}

export default UserInfor
