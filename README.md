# swagger-nodegen-cli
A convenience package that wraps the **swagger-codegen-cli-2.2.3.jar** for the **node/npm** environment.

## Prerequisites

The following dependencies would need to be installed on your machine before downloading and running the Swagger Codegen.

- Java, version 7 or higher
- The Java execution path must be on your environment variable `PATH`

## Installation 

- npm install -g swagger-nodegen-cli

## Usage

Same as **swagger-codegen-cli-2.2.3jar**.
The main command is **swagger-codegen-cli** or **swagger-nodegen-cli**

`usage: swagger-codegen-cli <command> [<args>]`

`usage: swagger-nodegen-cli <command> [<args>]`

Example:

```console
> swagger-codegen-cli help
```

### Display list of available languages

```console
> swagger-nodegen-cli
```

### Generate a nodjs-server skelton from a `swagger`-file

```console
$ swagger-nodegen-cli generate -i swagger.yaml -l nodejs-server -o my-service
```

## Links

- https://swagger.io/docs/swagger-tools/

- https://oss.sonatype.org/content/repositories/releases/io/swagger/swagger-codegen-cli/
