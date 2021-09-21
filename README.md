# pokemon-data-analyzer
A small service that will determine the average weight and height of a given subset of Pokémon.

## Installation
On run the project directory
```bash
$ yarn install
```

## Usage
Windows/Linux
```bash
$ ./build/cli.js pokemon-analyzer --limit 1000 --offset 100
```
MacOS
```bash
$ node ./build/cli.js pokemon-analyzer --limit 1000 --offset 100
```
Both parameters (limit and offset) are required