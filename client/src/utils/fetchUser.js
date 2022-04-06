export const fetchUser =()=> {
const userInfo = (localStorage.getItem('user') !== 'udefined' ? JSON.parse(localStorage.getItem('user')): localStorage.clear())
 return userInfo
}