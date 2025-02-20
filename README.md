🚀 TSOA + Swagger + TypeScript API Setup Guide

📌 Installation

1️⃣ Install TSOA

npm i tsoa

Generates OpenAPI (Swagger) documentation.

Creates typed API controllers for Express/Koa.

2️⃣ Install Helpful Decorators (Optional)

npm i helpful-decorators

Provides additional decorators to enhance TypeScript.

📁 Project Setup

3️⃣ Create the build Folder

mkdir -p build

This directory will store compiled JavaScript files.

4️⃣ Generate OpenAPI (Swagger) Specification

yarn run tsoa spec

Scans tsoa controllers and generates swagger.json inside the build/ folder.

5️⃣ Generate API Routes

yarn run tsoa routes

✅ What This Does?

Scans TypeScript controllers with tsoa decorators.

Generates routes.ts file to handle API routes (Express/Koa).

🔄 Compile TypeScript to JavaScript

6️⃣ Convert .ts to .js

yarn run tsc --outDir build --experimentalDecorators

Compiles TypeScript (.ts) files into JavaScript (.js).

Stores output inside the build/ directory.

Enables support for decorators.

🚀 Run the Server

7️⃣ Start the API Server

node build/src/server.js

Runs the compiled server.js file.

OR, if using TypeScript directly:

yarn ts-node src/server.ts

📄 Integrate Swagger UI (API Docs)

8️⃣ Install Swagger UI for Express

yarn add swagger-ui-express

yarn add -D @types/swagger-ui-express

swagger-ui-express → Serves Swagger UI for API documentation.

@types/swagger-ui-express → TypeScript definitions.

9️⃣ Add Swagger UI to Your Server

Modify your server.ts file:

import express from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./build/swagger.json";

const app = express();

// Serve Swagger UI at /docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
  console.log("📄 Swagger Docs available at http://localhost:3000/docs");
});

✅ Run the server:

yarn ts-node src/server.ts

Open API docs at http://localhost:3000/docs.

🛠️ Generate TypeScript API Client

🔟 Generate TypeScript API Client from OpenAPI Spec

npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c fetch

✅ What This Does?

Reads swagger.json.

Generates a TypeScript API client inside node-client/.

Uses fetch for making API requests.

🎯 Summary

Step

Command

Description

1️⃣

npm i tsoa

Install TSOA for OpenAPI & Typed Controllers

2️⃣

npm i helpful-decorators

Install additional TypeScript decorators (optional)

3️⃣

mkdir -p build

Create a build folder for compiled output

4️⃣

yarn run tsoa spec

Generate swagger.json for OpenAPI docs

5️⃣

yarn run tsoa routes

Generate API routes (routes.ts)

6️⃣

yarn run tsc --outDir build --experimentalDecorators

Compile TypeScript to JavaScript

7️⃣

node build/src/server.js

Run the compiled server

8️⃣

yarn add swagger-ui-express

Install Swagger UI for Express

9️⃣

yarn ts-node src/server.ts

Start the server with TypeScript

🔟

npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c fetch

Generate TypeScript API client

🚀 You're now ready to build, document, and test your API with TSOA! 🎉
