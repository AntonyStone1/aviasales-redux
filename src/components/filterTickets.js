export default function filterTickets(obj, data) {
  let result = []
  let filter1 = []
  let filter2 = []
  let filter3 = []
  let filter4 = []
  console.log(obj)
  if (obj.noTransfer) {
    filter1 = data?.filter((item) => item.segments[0].stops.length === 0)
  }
  if (obj.transferOne) {
    filter2 = data?.filter((item) => item.segments[0].stops.length === 1)
  }
  if (obj.transferTwo) {
    filter3 = data?.filter((item) => item.segments[0].stops.length === 2)
  }
  if (obj.transferThree) {
    filter4 = data?.filter((item) => item.segments[0].stops.length === 3)
  }
  result = [...filter1, ...filter2, ...filter3, ...filter4]
  // console.log(result)
  return result
}
