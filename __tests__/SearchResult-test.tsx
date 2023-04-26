import React from 'react';
import renderer from 'react-test-renderer';
import {Search} from '../src/screens';

test('Search results renders correctly', () => {
  const navigation = {navigate: jest.fn(), route: {query: 'pine'}};
  jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

  const tree = renderer.create(<Search navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
