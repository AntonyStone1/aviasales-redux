<<<<<<< HEAD
export default function filterTickets(obj, data) {
  let result = []
  let filter1 = []
  let filter2 = []
  let filter3 = []
  let filter4 = []
  if (Array.from(data).length) {
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
  }
  result = [...filter1, ...filter2, ...filter3, ...filter4]
  if (result.length === 0) {
    return data
  }
  return result
=======
export default function filterTickets(obj: any, data: any) {
  let result = [];
  let filter1 = [];
  let filter2 = [];
  let filter3 = [];
  let filter4 = [];
  if (Array.from(data).length) {
    if (obj.noTransfer) {
      filter1 = data?.filter((item: any) => item.segments[0].stops.length === 0);
    }
    if (obj.transferOne) {
      filter2 = data?.filter((item: any) => item.segments[0].stops.length === 1);
    }
    if (obj.transferTwo) {
      filter3 = data?.filter((item: any) => item.segments[0].stops.length === 2);
    }
    if (obj.transferThree) {
      filter4 = data?.filter((item: any) => item.segments[0].stops.length === 3);
    }
  }
  result = [...filter1, ...filter2, ...filter3, ...filter4];
  if (result.length === 0) {
    return data;
  }
  return result;
>>>>>>> c86aedb7feaa14c16f23553e9b907b71d55efa14
}
