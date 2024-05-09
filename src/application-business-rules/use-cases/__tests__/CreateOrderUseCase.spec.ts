import { Status } from '../../../enterprise-business-rules/entities/Order';
import { CreateOrderUseCase } from '../CreateOrderUseCase';
import {
  makeCreateOrderUserStub,
  makeFakeCreateOrderUseCaseInput,
} from './helpers/test-helper';

const makeSut = () => {
  const createOrderRepository = makeCreateOrderUserStub();

  const sut = new CreateOrderUseCase(createOrderRepository);

  return {
    sut,
    createOrderRepository,
  };
};

describe(CreateOrderUseCase.name, () => {
  describe(`When ${CreateOrderUseCase.prototype.execute.name} is called`, () => {
    it('should call repository with right params', async () => {
      const { sut, createOrderRepository } = makeSut();
      const createSpy = createOrderRepository.create;
      await sut.execute(makeFakeCreateOrderUseCaseInput());

      expect(createSpy).toBeCalledWith(makeFakeCreateOrderUseCaseInput());
    });
    it('should return repository result', async () => {
      const { sut } = makeSut();
      const result = await sut.execute(makeFakeCreateOrderUseCaseInput({}));
      expect(result).toEqual({
        id: 1,
        items: [],
        restaurantId: 'Pizzaria torre de Pizza',
        status: Status.IN_PROGRESS,
        table: 4,
      });
    });
  });
});
