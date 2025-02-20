// src/app.ts
import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from "swagger-ui-express";

///here we also use app swagger-ui-express
//to install
//yarn add swagger-ui-express
//yarn add -D @types/swagger-ui-express

//to build app.ts for swagger ui
//<<<cammand yarn run tsc --outDir --experimentalDecorator

import { Response as ExResponse, Request as ExRequest } from "express";
export const app = express();

//swager-ui-line//it display when you got to localhost:3000/doc

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});


// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);

app.use(json());

RegisterRoutes(app);

//to generates clients via openAPI SpecFile 

//---cmd-- npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c fetch

//this cmd simply create a node-client to use 

//import { DefaultService} from "../node-client";

//defaultService.getToto("abc");


//hii from sachin

