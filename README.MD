
tsoa
Pronounced so·uh
OpenAPI-compliant REST APIs using TypeScript and Node

build status npm version

Goal
TypeScript controllers and models as the single source of truth for your API
A valid OpenAPI (formerly Swagger) spec (2.0 or 3.0 if you choose 😍) is generated from your controllers and models, including:
Paths (e.g. GET /users)
Definitions based on TypeScript interfaces (models)
Parameters/model properties marked as required or optional based on TypeScript (e.g. myProperty?: string is optional in the OpenAPI spec)
jsDoc supported for object descriptions (most other metadata can be inferred from TypeScript types)
Routes are generated for middleware of choice
Express, Hapi, and Koa currently supported, other middleware can be supported using a simple handlebars template
Validate request payloads
Philosophy
Rely on TypeScript type annotations to generate API metadata if possible
If regular type annotations aren't an appropriate way to express metadata, use decorators
Use jsdoc for pure text metadata (e.g. endpoint descriptions)
Minimize boilerplate
Models are best represented by interfaces (pure data structures), but can also be represented by classes
Runtime validation of tsoa should behave as closely as possible to the specifications that the generated OpenAPI 2/3 schema describes. Any differences in validation logic are clarified by logging warnings during the generation of the OpenAPI Specification (OAS) and/or the routes.
Please note that by enabling OpenAPI 3 you minimize the chances of divergent validation logic since OpenAPI 3 has a more expressive schema syntax.
Getting Started
Documentation
API Reference
Getting started guide
Examples
Check out the guides
https://tsoa-community.github.io/docs/getting-started.html

See example controllers in the tests

See example models in the tests


