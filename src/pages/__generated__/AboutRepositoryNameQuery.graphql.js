/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AboutRepositoryNameQueryVariables = {||};
export type AboutRepositoryNameQueryResponse = {|
  +repository: ?{|
    +name: string
  |}
|};
export type AboutRepositoryNameQuery = {|
  variables: AboutRepositoryNameQueryVariables,
  response: AboutRepositoryNameQueryResponse,
|};
*/


/*
query AboutRepositoryNameQuery {
  repository(owner: "monproweb", name: "monproweb") {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "monproweb"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "monproweb"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AboutRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "repository(name:\"monproweb\",owner:\"monproweb\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AboutRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"monproweb\",owner:\"monproweb\")"
      }
    ]
  },
  "params": {
    "cacheID": "a75bedcc04aa999dd4266596d66a5ad2",
    "id": null,
    "metadata": {},
    "name": "AboutRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AboutRepositoryNameQuery {\n  repository(owner: \"monproweb\", name: \"monproweb\") {\n    name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5384f74478775a281996795d33062f7f';

module.exports = node;
