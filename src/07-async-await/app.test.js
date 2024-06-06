import 'isomorphic-fetch';
import main from './app';
import { resetDB } from '../../test-helpers/reset-db';

describe('app', () => {
  const fetchSpy = jest.spyOn(global, 'fetch');
  let result;
  beforeAll(async () => {
    resetDB();
    result = await main();
  });

  it('step 1: should call GET api/products', () => {
    expect(fetchSpy.mock.calls[0][0]).toContain('api/products');
  });

  it('step 2: should call PUT api/products/:id', () => {
    const [url, options] = fetchSpy.mock.calls[1];
    expect(url).toContain('api/products/1');
    expect(options.method).toBe('PUT');
    verifyContentType(options.headers);
  });

  it('step 3: should call POST api/product', () => {
    const { method, headers, body } = fetchSpy.mock.calls[2][1];
    expect(method).toBe('POST');
    expect(headers);
    expect(body).toEqual(
      JSON.stringify({ name: 'Eggs', price: 5.99, isInStock: true })
    );
  });

  it('step 4: should call DELETE api/products/:id', () => {
    const [url, options] = fetchSpy.mock.calls[3];
    expect(url).toContain('api/products/21');
    expect(options.method).toBe('DELETE');
  });

  it.each([
    [{ name: 'Bread', price: 1.99, isInStock: true }, 4],
    [{ name: 'Carrots', price: 2.99, isInStock: true }, 5]
  ])('step 5.%#: should call POST api/product for %j', (product, callIndex) => {
    const { method, headers, body } = fetchSpy.mock.calls[callIndex][1];
    expect(method).toBe('POST');
    verifyContentType(headers);
    expect(body).toEqual(JSON.stringify(product));
  });

  it('step 6: should call GET api/products (isInStock = true and price < 2)', () => {
    const url = fetchSpy.mock.calls[6][0];
    expect(url).toMatch(/api\/products/);
    expect(url).toMatch(/isInStock/);
    expect(url).toMatch(/price_lte/);
  });

  it('step 7: should return the products which are in stock and the price less than 2', () => {
    expect(result).toEqual(['Chips - Potato Jalapeno', 'Bread']);
  });
});

function verifyContentType(headers) {
  expect(headers['Content-Type']).toMatch(/application\/json/);
}
