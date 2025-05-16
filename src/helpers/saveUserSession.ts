export const saveUserSession = (user: any) => {
  localStorage.setItem('DG-USER', JSON.stringify(user))
  document.cookie = `token=${user.token};domain=.desarrolloglobal.pe`
}