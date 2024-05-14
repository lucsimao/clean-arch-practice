import {
  GetOrder,
  GetOrderInput,
  GetOrderOutput,
} from '../../enterprise-business-rules/__protocols__/GetProcess';

export type GetOrderControllerInput = GetOrderInput;
export type GetOrderControllerOutput = GetOrderOutput[];

export class GetOrderController {
  constructor(private readonly getOrderUseCase: GetOrder) {}

  public async get(): Promise<GetOrderControllerOutput> {
    const result = await this.getOrderUseCase.getAllOrder();
    return result;
  }
}
