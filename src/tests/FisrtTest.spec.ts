import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Remulo';

  expect(user.name).toEqual('Remulo');
});
