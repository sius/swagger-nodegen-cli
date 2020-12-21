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
Available languages: [aspnetcore, csharp, csharp-dotnet2,
 dynamic-html,html, html2, java, jaxrs-cxf-client, jaxrs-cxf,
 inflector, jaxrs-cxf-cdi, jaxrs-spec, jaxrs-jersey, jaxrs-di,
 jaxrs-resteasy-eap, jaxrs-resteasy, spring, nodejs-server,
 openapi, openapi-yaml, kotlin-client, kotlin-server, php,
 python, scala, scala-akka-http-server, swift3, swift4,
 typescript-angular]
```

## Installation

### Npm package for use with [swagger-codegen-cli-3.0.23.jar](http://central.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.23/swagger-codegen-cli-3.0.23.jar)

`npm install -g swagger-nodegen-cli`

### Npm package for use with [swagger-codegen-cli-2.4.4.jar](http://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.4/swagger-codegen-cli-2.4.4.jar)

`npm install -g swagger-nodegen-cli@2.4.4`

## Usage Version 3.0.23 ([Version 2.4.4](https://www.npmjs.com/package/swagger-nodegen-cli/v/2.4.4))

Same as **swagger-codegen-cli.jar** without `java -jar ...`
The main command is **sc**, **swagger-codegen-cli** or **swagger-nodegen-cli**

`usage: sc <command> [<args>]`

`usage: swagger-codegen-cli <command> [<args>]`

`usage: swagger-nodegen-cli <command> [<args>]`

## Examples

### Display help, extended help, version and available languages

```console
# help, extended help
sc -h
sc generate -h

# Version
sc version

# Available languages
sc
sc langs

```

### Display detailed generation config options for a specific language

```console
sc config-help -l typescript-angular
```

### Generate openapi.json (v3) from swagger.json (v2) or openapi.yaml (v3)

```console
sc generate -l openapi -i <path/to/[swagger.json|openapi.yaml]> -o <out folder>

```

### Generate openapi.yaml (v3) from swagger.json (v2) or openapi.json (v3)

```console
sc generate -l openapi-yaml -i <path/to/[swagger|openapi].json> -o <out folder>

```

### Generate a typescript-angular (4.3) service from a `swagger`-file

#### Features

- Generates an Angular service per defined swagger resource
- Generates models with custom property name flavours: camelCase, PascalCase, snake_case ... (see `sc config-help -l typescript-angular`)
- Base path injection with InjectionToken

```console

sc generate -i swagger.json -l typescript-angular -o src/services

```

#### Integration into an Angular >= 4.3 application

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

### Generate a nodjs-server skelton from a `swagger`-file

```console

sc generate -i swagger.yaml -l nodejs-server -o my-server

```

## Links

- [swagger-codegen](https://github.com/swagger-api/swagger-codegen)

- [swagger-tools](https://swagger.io/docs/swagger-tools/)