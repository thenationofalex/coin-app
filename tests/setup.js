const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

global.fetch = require('jest-fetch-mock')

Enzyme.configure({adapter: new EnzymeAdapter()});
