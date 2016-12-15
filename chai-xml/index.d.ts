// Type definitions for chai-things
// Project: https://github.com/krampstudio/chai-xml
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="chai" />

declare namespace Chai {
  interface Assertion {
    xml: ChaiXml.XmlAssertion;
  }
}

declare namespace ChaiXml {
  interface XmlAssertion extends Chai.Assertion {
    valid(): XmlAssertion;

    not: XmlAssertion;
    to: XmlAssertion;
    be: XmlAssertion;
    been: XmlAssertion;
    is: XmlAssertion;
    that: XmlAssertion;
    which: XmlAssertion;
    and: XmlAssertion;
    has: XmlAssertion;
    have: XmlAssertion;
    with: XmlAssertion;
    at: XmlAssertion;
    of: XmlAssertion;
    same: XmlAssertion;
  }
}

declare module "chai-xml" {
  function chaiXml(chai: any, utils: any): void;
  namespace chaiXml {}
  export = chaiXml;
}
