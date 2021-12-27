/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/pet": {
    post: operations["addPet"];
  };
}

export interface operations {
  addPet: {
    parameters: {
      body: {
        /** Pet object that needs to be added to the store */
        body: definitions["Pet"];
      };
    };
    responses: {
      /** Invalid input */
      405: unknown;
    };
  };
}

export interface external {}