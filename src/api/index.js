import ajax from './ajax'
export const categoryData = () => ajax('/category')
export const homeData = () => ajax('/home')
export const categoryListData = () => ajax('/categoryList')
export const worthData = () => ajax('/worth')
