import { GetOrderRepository } from '../__protocols__/GetOrderRepository';
import {
  GetOrder,
  GetOrderInput,
  GetOrderOutput,
} from '../../enterprise-business-rules/__protocols__/GetProcess';

export type GetOrderUseCaseInput = GetOrderInput;
export type GetOrderUseCaseOutput = GetOrderOutput;

export class GetOrderUseCase implements GetOrder {
  constructor(private readonly getOrderRepository: GetOrderRepository) {}

  public async getAllOrder() {
    const result = await this.getOrderRepository.getAll();
    return result;
  }

  public async getOrderById(id: number): Promise<GetOrderOutput> {
    const result = await this.getOrderRepository.getById(id);
    return result;
  }
}
