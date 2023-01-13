export interface IGetBuyStatDayParam {
  start_date: string;
  end_date: string;
}

export interface IBuyStatDayItem {
  buy_date: string;
  total_price: number;
  total_count: number;
  total_cancel_price: number;
  total_cancel_count: number;
  subsc_price: number;
  subsc_count: number;
  subsc_cancel_price: number;
  subsc_cancel_count: number;
  spon_price: number;
  spon_count: number;
  spon_cancel_price: number;
  spon_cancel_count: number;
  content_price: number;
  content_count: number;
  content_cancel_price: number;
  content_cancel_count: number;
  paypost_price: number;
  paypost_count: number;
  paypost_cancel_price: number;
  paypost_cancel_count: number;
}
