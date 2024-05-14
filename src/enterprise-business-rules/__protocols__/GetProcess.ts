import { Order } from '../entities/Order';

export type GetOrderInput = void;
export type GetOrderOutput = Order[];

export interface GetOrder {
  getAllOrder(): Promise<GetOrderOutput[]>;
}
