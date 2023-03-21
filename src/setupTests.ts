// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

// Polyfill for CSS.supports
window.CSS = {
    supports: function () {
      return true;
    },
    escape: function (ident: string): string {
      return ident.replace(/([^\x20-\x7E])/g, (_, char) => {
        const hex = char.charCodeAt(0).toString(16);
        const pad = hex.length < 2 ? '0' : '';
        return '\\' + pad + hex;
      });
    },
  };
