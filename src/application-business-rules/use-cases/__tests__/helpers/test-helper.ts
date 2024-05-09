import {
  Order,
  Status,
} from '../../../../enterprise-business-rules/entities/Order';
import {
  CreateOrder,
  CreateOrderInput,
} from '../../../../enterprise-business-rules/__protocols__/CreateProcess';
import {
  CreateOrderController,
  CreateOrderControllerInput,
} from '../../../../interface-adapters/controllers/CreateOrderController';
import { CreateOrderRepository } from '../../../__protocols__/CreateOrderRepository';
import { CreateOrderUseCaseInput } from '../../CreateOrderUseCase';

export const makeFakeCreateOrderUseCaseInput = (
  payload?: Partial<CreateOrderUseCaseInput>
): jest.Mocked<CreateOrderUseCaseInput> => ({
  id: 1,
  items: [],
  restaurantId: 'Pizzaria torre de Pizza',
  status: Status.IN_PROGRESS,
  table: 4,
  ...(payload as any),
});

export const makeFakeCreateOrder = (
  payload?: Partial<CreateOrder>
): jest.Mocked<CreateOrder> => ({
  id: 1,
  items: [],
  restaurantId: 'Pizzaria torre de Pizza',
  status: Status.IN_PROGRESS,
  table: 4,
  ...(payload as any),
});

export const makeFakeapiHttpRequest = ({
  body,
  params,
  headers,
  user,
  query,
}: {
  body?: unknown;
  params?: { [key: string]: unknown };
  headers?: { [key: string]: string | string[] | undefined };
  user?: unknown;
  query?: { [key: string]: unknown };
}): jest.Mocked<any> => ({
  body,
  params,
  headers,
  user,
  query,
});

export const makeFakeApiHttpResponse = (
  status: keyof typeof Status,
  body?: unknown
): jest.Mocked<any> => ({
  body,
  status: status || 'OK',
});

export const makeCreateOrderUserStub =
  (): jest.Mocked<CreateOrderRepository> => ({
    create: jest.fn().mockResolvedValue(makeFakeCreateOrderUseCaseInput()),
  });

export const makeCreateOrder = (): jest.Mocked<CreateOrder> => ({
  execute: jest.fn().mockResolvedValue(makeFakeCreateOrder()),
});
