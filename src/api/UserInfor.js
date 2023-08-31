const UserInfor = () => {
  const userId = localStorage.getItem('userId')
  //   const username = localStorage.getItem('username')
  //   const role = localStorage.getItem('role')
  //   const passportUrl = localStorage.getItem('passportUrl')
  const infor = {
    userId,
    //   role,
    //   email,
    //   passportUrl,
  }
  return infor
}

export default UserInfor
