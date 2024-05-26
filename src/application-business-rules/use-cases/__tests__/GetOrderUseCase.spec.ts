import { GetOrderUseCase } from '../GetOrderUseCase';
import {
  makeFakeCreateOrder,
  makeFakeCreateOrderUseCaseInput,
  makeGetOrderRepositoryStub,
} from './helpers/test-helper';

const makeSut = () => {
  const getOrderRepository = makeGetOrderRepositoryStub();
  const sut = new GetOrderUseCase(getOrderRepository);

  return {
    sut,
    getOrderRepository,
  };
};

describe(GetOrderUseCase.name, () => {
  describe(`When ${GetOrderUseCase.prototype.getAllOrder.name} is called`, () => {
    it('should call repository with right params', async () => {
      const { sut, getOrderRepository } = makeSut();
      const getSpy = getOrderRepository.getAll;

      await sut.getAllOrder();

      expect(getSpy).toBeCalled();
    });

    it('should return repository result', async () => {
      const { sut } = makeSut();
      const result = await sut.getAllOrder();

      expect(result).toEqual([
        {
          id: 1,
          items: [],
          restaurantId: 'Pizzaria torre de Pizza',
          status: 'In Progress',
          table: 4,
        },
        {
          id: 1,
          items: [],
          restaurantId: 'Pizzaria torre de Pizza',
          status: 'In Progress',
          table: 4,
        },
      ]);
    });

    it('should throw when repository fails', async () => {
      const { sut, getOrderRepository } = makeSut();
      getOrderRepository.getAll.mockRejectedValueOnce(
        new Error('repository error')
      );

      const promise = sut.getAllOrder();

      await expect(promise).rejects.toThrow(new Error('repository error'));
    });
  });
  describe(`When ${GetOrderUseCase.prototype.getOrderById.name} is called`, () => {
    const idFake = 777;
    it('should call repository with right params', async () => {
      const { sut, getOrderRepository } = makeSut();
      const getOneSpy = getOrderRepository.getById;

      await sut.getOrderById(idFake);

      expect(getOneSpy).toBeCalledWith(777);
    });

    it('should return repository result', async () => {
      const { sut, getOrderRepository } = makeSut();
      getOrderRepository.getById;

      const result = await sut.getOrderById(idFake);

      expect(result).toEqual({
        id: 1,
        items: [],
        restaurantId: 'Pizzaria torre de Pizza',
        status: 'In Progress',
        table: 4,
      });
    });

    it('should throw when repository fails', async () => {
      const { sut, getOrderRepository } = makeSut();

      getOrderRepository.getById.mockRejectedValueOnce(
        new Error('repository error')
      );

      const promise = sut.getOrderById(idFake);

      await expect(promise).rejects.toThrow(new Error('repository error'));
    });
  });
});
