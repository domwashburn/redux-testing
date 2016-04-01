import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// make the terminal "run like a browser"
// same as window.document in browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// same as window in browser
global.window = global.document.defaultView;
const $ = jquery(global.window);

// render react component classes to HTML
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML (This is where the magic happens)
};

// helper for simulating events
// 'this' references the elements passed into the jquery function 
// $('div').simulate() : this === div
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};
chaiJquery(chai, chai.util, $)

export { renderComponent, expect }