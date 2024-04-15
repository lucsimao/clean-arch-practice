import { Order } from '../entities/Order';

export type CreateOrderInput = Order;
export type CreateOrderOutput = void;

export interface CreateOrder {
  execute(input: CreateOrderInput): Promise<CreateOrderOutput>;
}
