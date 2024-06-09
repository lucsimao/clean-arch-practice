import {
  makeCreateOrderRepositoryStub,
  makeFakeCreateOrderUseCaseInput,
  makeFakeCreateOrderUseCaseOutput,
} from './helpers/test-helper';
import { CreateOrderUseCase } from '../CreateOrderUseCase';

const makeSut = () => {
  const createOrderRepository = makeCreateOrderRepositoryStub();
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
      const input = makeFakeCreateOrderUseCaseInput();

      await sut.execute(input);

      expect(createSpy).toBeCalledWith(input);
    });

    it('should return repository result', async () => {
      const { sut } = makeSut();
      const input = makeFakeCreateOrderUseCaseInput();

      const result = await sut.execute(input);

      expect(result).toEqual(makeFakeCreateOrderUseCaseOutput());
    });

    it('should throw when repository fails', async () => {
      const { sut, createOrderRepository } = makeSut();
      const input = makeFakeCreateOrderUseCaseInput();
      createOrderRepository.create.mockRejectedValueOnce(
        new Error('repository error')
      );

      const promise = sut.execute(input);

      await expect(promise).rejects.toThrow(new Error('repository error'));
    });
  });
});
