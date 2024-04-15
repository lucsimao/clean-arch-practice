import {
  CreateOrderInput,
  CreateOrderOutput,
} from '../../enterprise-business-rules/__protocols__/CreateProcess';

export type CreateOrderRepositoryInput = CreateOrderInput;
export type CreateOrderRepositoryOutput = CreateOrderOutput;

export interface CreateOrderRepository {
  create(
    input: CreateOrderRepositoryInput
  ): Promise<CreateOrderRepositoryOutput>;
}
