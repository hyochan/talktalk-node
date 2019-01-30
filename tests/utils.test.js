import * as Utils from 'utils';

jest.mock('path', () => ({
  resolve: (...args) => args.join('/'),
}));

test('Utils.schemaPath()', () => {
  const p = Utils.schemaPath('test');
  expect(p).toEqual(`${process.cwd()}/schema/test`);
});
