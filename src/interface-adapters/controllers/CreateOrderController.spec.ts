import {
  makeCreateOrderStub,
  makeCreateOrderControllerInput,
  makeFakeCreateOrderUseCaseOutput,
} from '../../application-business-rules/use-cases/__tests__/helpers/test-helper';
import { CreateOrderController } from './CreateOrderController';

const makeSut = () => {
  const createOrderStub = makeCreateOrderStub();
  const sut = new CreateOrderController(createOrderStub);

  return { sut, createOrderStub };
};

describe(`${CreateOrderController.name}`, () => {
  describe(`when ${CreateOrderController.prototype.execute.name} is called `, () => {
    it(`should call service with validation return`, async () => {
      const { sut, createOrderStub } = makeSut();
      const getExecuteSpy = createOrderStub.execute;
      const input = makeCreateOrderControllerInput();

      await sut.execute(input);

      expect(getExecuteSpy).toBeCalledWith(input);
    });

    it(`should return use case result`, async () => {
      const { sut } = makeSut();
      const input = makeCreateOrderControllerInput();

      const result = await sut.execute(input);

      expect(result).toEqual(makeFakeCreateOrderUseCaseOutput());
    });

    it(`should throw when use case fails`, async () => {
      const { sut, createOrderStub } = makeSut();
      const input = makeCreateOrderControllerInput();
      createOrderStub.execute.mockRejectedValueOnce(new Error('usecase error'));

      const promise = sut.execute(input);

      await expect(promise).rejects.toThrow(new Error('usecase error'));
    });
  });
});
