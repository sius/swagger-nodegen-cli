# swagger-codegen-cli
A convenience package to make the swagger-codegen-cli-<x.x.x>.jar availabe in the **node/npm** environment.

## Prerequisites

The following dependencies would need to be installed on your machine before downloading and running the Swagger Codegen.

- Java, version 7 or higher
- The Java execution path must be on your environment variable `PATH`

## Installation 

- npm install -g swagger-codegen-cli

## Usage

Same as **swagger-codegen-cli-2.2.3jar**.

`usage: swagger-codegen-cli <command> [<args>]`

Example:

```console
> swagger-codegen-cli help
```

### Display list of available languages

```console
> swagger-codegen-cli
```

### Generate a nodjs-server microservice skelton from a `swagger`-file

```console
$ swagger-codegen-cli generate -i swagger.yaml -l nodejs-server -o my-service
```

## Links

- [https://swagger.io/docs/swagger-tools/]

- [https://oss.sonatype.org/content/repositories/releases/io/swagger/swagger-codegen-cli/]
