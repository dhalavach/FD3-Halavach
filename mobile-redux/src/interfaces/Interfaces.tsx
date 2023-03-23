export default  interface Client {
  id: number,
  firstName: string,
  lastName: string,
  balance: number,
  status: boolean
  selected?: boolean
}