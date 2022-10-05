# swagger-nodegen-cli

A convenience package for the **node/npm** environment that wraps the Java library 
**swagger-codegen-cli**

## Prerequisites

The following dependencies would need to be installed on your machine before running the Swagger Codegen.

- Java, version 7 or higher
- The Java execution path must be on your environment variable `PATH`

## Important Note
The current version of **swagger-codegen-cli-3.x.x** supports **fewer languages** ​​than the older versions (**2.x.x**):

```console
Available languages: [dart, aspnetcore, csharp, csharp-dotnet2, 
go, go-server, dynamic-html, html, html2, java, 
jaxrs-cxf-client, jaxrs-cxf, inflector, jaxrs-cxf-cdi, jaxrs-spec, jaxrs-jersey, jaxrs-di, jaxrs-resteasy-eap, jaxrs-resteasy, micronaut, spring, nodejs-server, openapi, openapi-yaml, kotlin-client, kotlin-server, php, python, python-flask, r, ruby, scala, scala-akka-http-server, swift3, swift4, swift5, typescript-angular, typescript-axios, typescript-fetch, javascript]
```

## Installation

### Npm package for use with [swagger-codegen-cli-3.0.35.jar](https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.35/swagger-codegen-cli-3.0.35.jar)

`npm install -g swagger-nodegen-cli`

### Npm package for use with [swagger-codegen-cli-2.4.4.jar](http://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.4/swagger-codegen-cli-2.4.4.jar)

`npm install -g swagger-nodegen-cli@2.4.4`

## Usage
Same as **swagger-codegen-cli.jar** without `java -jar ...`
The main command is **sc**, **swagger-codegen-cli** or **swagger-nodegen-cli** (under Windows **sc** is in conflict with `sc.exe`)

`usage: swagger-codegen-cli <command> [<args>]`

`usage: swagger-nodegen-cli <command> [<args>]`

`usage: sc <command> [<args>]` (under windows `sc` is in conflicts with `sc.exe`)

- Version 2.4.4 ([Version 2.4.4](https://www.npmjs.com/package/swagger-nodegen-cli/v/2.4.4))

## Examples

### Display help, extended help, version and available languages

```console
# help, extended help
swagger-codegen-cli -h
swagger-codegen-cli generate -h

# Version
swagger-codegen-cli version

# Available languages
swagger-codegen-cli
swagger-codegen-cli langs

```

### Display detailed generation config options for a specific language

```console
swagger-codegen-cli config-help -l typescript-angular
```

### Generate openapi.json (v3) from swagger.json (v2) or openapi.yaml (v3)

```console
swagger-codegen-cli generate -l openapi -i <path/to/[swagger.json|openapi.yaml]> -o <out folder>

```

### Generate openapi.yaml (v3) from swagger.json (v2) or openapi.json (v3)

```console
swagger-codegen-cli generate -l openapi-yaml -i <path/to/[swagger|openapi].json> -o <out folder>

```

### Generate a typescript-angular service from an Open API V2 (`swagger`)/V3 - JSON or YML file

#### Features

- Generates an Angular service per defined swagger resource
- Generates models with custom property name flavours: camelCase, PascalCase, snake_case ... (see `swagger-codegen-cli config-help -l typescript-angular`)
- Base path injection with InjectionToken

```console
swagger-codegen-cli generate -i swagger.json -l typescript-angular -o src/services
swagger-codegen-cli generate -i open-api.yml -l typescript-angular -o src/services
```

#### Integration into an Angular application

```tree

|-- angular-application
|-- src
|   |-- app
|   |   |-- app.component.html
|   |   |-- app.component.ts
|   |   |-- app.component.css
|   |   |-- app.module.ts
|   `-- services
|       |-- ...

```

`./src/app/app.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ApiModule, BASE_PATH } from '../services';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: BASE_PATH, useValue: 'http://localhost:10010' }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

### Generate a nodjs-server skelton from an Open API V2 (`swagger`)/V3 - JSON or YML file

```console

swagger-codegen-cli generate -i swagger.json -l nodejs-server -o my-server
swagger-codegen-cli generate -i open-api.yml -l nodejs-server -o my-server

```

## Links

- [swagger-codegen](https://github.com/swagger-api/swagger-codegen)

- [swagger-tools](https://swagger.io/docs/swagger-tools/)