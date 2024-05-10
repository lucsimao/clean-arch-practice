import { CreateOrderRepository } from '../../../__protocols__/CreateOrderRepository';
import { CreateOrder } from '../../../../enterprise-business-rules/__protocols__/CreateProcess';
import { Status } from '../../../../enterprise-business-rules/entities/Order';
import { CreateOrderControllerInput } from '../../../../interface-adapters/controllers/CreateOrderController';
import {
  CreateOrderUseCaseInput,
  CreateOrderUseCaseOutput,
} from '../../CreateOrderUseCase';

export const makeCreateOrderControllerInput =
  (): CreateOrderControllerInput => ({
    id: 1,
    items: [],
    restaurantId: '2',
    status: Status.IN_PROGRESS,
    table: 3,
  });

export const makeCreateOrderStub = (): jest.Mocked<CreateOrder> => ({
  execute: jest.fn().mockResolvedValue(undefined),
});

export const makeFakeCreateOrderUseCaseOutput =
  (): jest.Mocked<CreateOrderUseCaseOutput> => {
    return undefined;
  };

export const makeCreateOrderRepositoryStub =
  (): jest.Mocked<CreateOrderRepository> => ({
    create: jest.fn().mockResolvedValue(makeFakeCreateOrderUseCaseOutput()),
  });

export const makeFakeCreateOrderUseCaseInput = (
  payload?: Partial<CreateOrderUseCaseInput>
): jest.Mocked<CreateOrderUseCaseInput> => ({
  id: 1,
  items: [],
  restaurantId: 'Pizzaria torre de Pizza',
  status: Status.IN_PROGRESS,
  table: 4,
  ...payload,
});
