const sortTickets = (obj: any, data: any) => {
  const result = data;
  if (obj?.price) {
    result?.sort((a: any, b: any) => a.price - b.price);
    return result;
  }
  if (obj?.speed) {
    result?.sort((a: any, b: any) => a.segments[0].duration - b.segments[0].duration);
    return result;
  }
  if (obj?.optimal) {
    result?.sort(
      (a: any, b: any) => a.price + a.segments[0].duration - (b.price + b.segments[0].duration),
    );
    return result;
  }
  if (result.length === 0) {
    return data;
  }
  return data;
};

export default sortTickets;
