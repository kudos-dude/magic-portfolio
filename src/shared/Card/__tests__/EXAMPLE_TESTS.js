/*
  Note: This is an example of tests I wrote for another project
  Here I show a snapshot test along with an Enzyme trigger + Sinon fake()

  Snapshot tests are useful in React for determining that the UI is produced correctly
  given varying inputs. 

  Using Enzyme I am able to test user interaction in the VirtualDOM, as well as reach into
  the component to determine its current state/props/etc. This also becomes useful when testing
  components that are connected to Redux, as I can connect a mock store with an initial state,
  then use dispatches to modify the internal state of the component.

  For Unit Testing, Jest/Sinon are great libraries for not only components, but basic JS functions as well.
  For Integration Tests, I would ensure that the tests would use these same libraries, but rather than mock or create .fake()'s,
  I would use the actual dependent components and endpoints.
  
  These tests follow the guidelines of:

  - It renders
  - It renders the correct thing given:
    - Default props
    - Varied props
  - It renders the different states
  - Test events
  - Test edge cases
      - e.g. something that uses an array should be thrown an empty array

*/

import React from 'react';
import renderer from 'react-test-renderer';
import { render, shallow, mount } from 'enzyme';

import { Provider } from 'react-redux';
import mockStore from 'utils/test-utils/mockStore';
import initialState from 'utils/test-utils/initialState.json';

import sinon from 'sinon';

import Form from '../Form';
import initialValues from '../initialValues';

describe('Login form', () => {
  let store;
  let touched;
  let errors;
  let handleChange;
  let handleBlur;
  let handleSubmit;
  let waiting;

  beforeAll(() => {
    touched = {
      email: false,
      password: false,
    };
    errors = {};
    waiting = false;
  });
  beforeEach(() => {
    store = mockStore(initialState);
    handleChange = sinon.fake();
    handleBlur = sinon.fake();
    handleSubmit = sinon.fake();
  });
  
  // TODO: Write tests for varying initialValues and differing `waiting` props
  test('renders with initial values', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Form
          values={initialValues}
          touched={touched}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          waiting={waiting}
        />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  // TODO: Write tests for all handlers
  test('calls handleChange after input changes', () => {
    const tree = mount(
      <Provider store={store}>
        <Form
          values={initialValues}
          touched={touched}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          waiting={waiting}
        />
      </Provider>,
    );

    tree.find('input[name="email"]').simulate('change');
    expect(handleChange.called).toBeTruthy();

    tree.find('input[name="password"]').simulate('change');
    expect(handleChange.callCount).toEqual(2);
  })

});
