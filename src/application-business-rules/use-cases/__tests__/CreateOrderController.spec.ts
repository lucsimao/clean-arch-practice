import { CreateOrderController } from '../../../interface-adapters/controllers/CreateOrderController';
import { makeCreateOrder, makeFakeapiHttpRequest } from './helpers/test-helper';

const makeSut = () => {
  const createOrderStub = makeCreateOrder();
  const sut = new CreateOrderController(createOrderStub);

  return { sut, createOrderStub };
};

describe(`${CreateOrderController.name} `, () => {
  describe(`when ${CreateOrderController.prototype.execute.name} is called `, () => {
    it(`should call service with validation return `, async () => {
      const { sut, createOrderStub } = makeSut();
      const getExecuteSpy = createOrderStub.execute;
      const fakeApiHttpRequest = makeFakeapiHttpRequest({});

      await sut.execute(fakeApiHttpRequest);
      expect(getExecuteSpy).toBeCalledWith(fakeApiHttpRequest);
    });
  });
});
