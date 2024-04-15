import {
  CreateOrder,
  CreateOrderInput,
  CreateOrderOutput,
} from '../../enterprise-business-rules/__protocols__/CreateProcess';

export type CreateOrderControllerInput = CreateOrderInput;
export type CreateOrderControllerOutput = CreateOrderOutput;

export class CreateOrderController {
  constructor(private readonly createOrderUseCase: CreateOrder) {}

  public async execute(
    input: CreateOrderControllerInput
  ): Promise<CreateOrderControllerOutput> {
    const result = await this.createOrderUseCase.execute(input);

    return result;
  }
}
