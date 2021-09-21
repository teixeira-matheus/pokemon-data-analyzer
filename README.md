# pokemon-data-analyzer
A small service that will determine the average weight and height of a given subset of Pokémon.

## Installation
On run the project directory (npm required)
```bash
$ npm install
```

## Usage
Windows/Linux
```bash
$ pokemon-analyzer --limit 1000 --offset 100 --sortByType
```
MacOS
```bash
$ pokemon-analyzer --limit 1000 --offset 100 --sortByType
```
Both parameters (limit and offset) are required
sortByType flag is optional, if provided will add additional data sorted by each pokémon type(distinct)