import {
  makeCreateOrderControllerInput,
  makeFakeCreateOrderList,
  makeFakeCreateOrderUseCaseInput,
  makeGetOrderStub,
} from '../../../application-business-rules/use-cases/__tests__/helpers/test-helper';
import { GetOrderController } from '../GetOrderController';

const makeSut = () => {
  const getOrderStub = makeGetOrderStub();
  const sut = new GetOrderController(getOrderStub);

  return { sut, getOrderStub };
};

describe(`${GetOrderController.name}`, () => {
  describe(`When ${GetOrderController.prototype.getAll.name} is called`, () => {
    it(`should call the method without parameter`, async () => {
      const { sut, getOrderStub } = makeSut();
      const getSpy = getOrderStub.getAllOrder;

      await sut.getAll();

      expect(getSpy).toBeCalledWith();
    });

    it('should return use case result', async () => {
      const { sut } = makeSut();
      const fakeApiHttpRequest = makeFakeCreateOrderList();

      const result = await sut.getAll();

      expect(result).toEqual(fakeApiHttpRequest);
    });

    it('should throw when service throws', async () => {
      const { sut, getOrderStub } = makeSut();
      getOrderStub.getAllOrder.mockRejectedValueOnce(new Error('any_error'));

      const promise = sut.getAll();

      await expect(promise).rejects.toThrow(new Error('any_error'));
    });
  });
  describe(`When ${GetOrderController.prototype.getById.name} is called`, () => {
    const idFake = 777;
    it('should call  with right params', async () => {
      const { sut, getOrderStub } = makeSut();
      const getByIdSpy = getOrderStub.getOrderById;

      await sut.getById(idFake);

      expect(getByIdSpy).toBeCalledWith(777);
    });

    it('should return use case result', async () => {
      const { sut } = makeSut();
      const fakeApiHttpRequest = makeFakeCreateOrderUseCaseInput();

      const result = await sut.getById(idFake);

      expect(result).toEqual(fakeApiHttpRequest);
    });

    it('should throw when use case fails', async () => {
      const { sut, getOrderStub } = makeSut();
      getOrderStub.getOrderById.mockRejectedValueOnce(new Error('any_error'));

      const promise = sut.getById(idFake);

      await expect(promise).rejects.toThrow(new Error('any_error'));
    });
  });
});
