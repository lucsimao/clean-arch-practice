import {
  GetOrder,
  GetOrderInput,
  GetOrderOutput,
} from '../../enterprise-business-rules/__protocols__/GetProcess';

export type GetOrderControllerInput = GetOrderInput;
export type GetOrderControllerOutput = GetOrderOutput[];

export class GetOrderController {
  constructor(private readonly getOrderUseCase: GetOrder) {}

  public async getAll(): Promise<GetOrderControllerOutput> {
    const result = await this.getOrderUseCase.getAllOrder();
    return result;
  }

  public async getById(id: number): Promise<GetOrderOutput> {
    const result = await this.getOrderUseCase.getOrderById(id);
    return result;
  }
}
