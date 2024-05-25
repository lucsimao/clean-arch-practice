import {
  GetOrderInput,
  GetOrderOutput,
} from '../../enterprise-business-rules/__protocols__/GetProcess';

export type GetOrderRepositoryInput = GetOrderInput;
export type GetOrderRepositoryOutput = GetOrderOutput;

export interface GetOrderRepository {
  getAll(): Promise<GetOrderRepositoryOutput[]>;
  getById(id: number): Promise<GetOrderRepositoryOutput>;
}
