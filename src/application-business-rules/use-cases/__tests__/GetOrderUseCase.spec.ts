import { GetOrderUseCase } from '../GetOrderUseCase';
import { makeGetOrderRepositoryStub } from './helpers/test-helper';

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
});
