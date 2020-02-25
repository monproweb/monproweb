// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import rmwcTestPolyfill from "@rmwc/base/dist/test-polyfill";
Enzyme.configure({ adapter: new Adapter() });

//import and run this to fix the the MDC errors
rmwcTestPolyfill();
