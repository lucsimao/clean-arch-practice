import { CreateOrderRepository } from '../__protocols__/CreateOrderRepository';
import {
  CreateOrder,
  CreateOrderInput,
  CreateOrderOutput,
} from '../../enterprise-business-rules/__protocols__/CreateProcess';

export type CreateOrderUseCaseInput = CreateOrderInput;
export type CreateOrderUseCaseOutput = CreateOrderOutput;

export class CreateOrderUseCase implements CreateOrder {
  constructor(private readonly createOrderRepository: CreateOrderRepository) {}

  public async execute(input: CreateOrderUseCaseInput): Promise<void> {
    const result = await this.createOrderRepository.create(input);

    return result;
  }
}
