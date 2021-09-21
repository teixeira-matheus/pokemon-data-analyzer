# pokemon-data-analyzer
A small service that will determine the average weight and height of a given subset of Pokémon.

## Installation
```bash
$ npm i pokemon-data-analyzer
```

## Usage
```bash
$ pokemon-analyzer pokemon-analyzer --limit 10 --offset 9 --sortByType
```
If you are running on the local repository
```bash
$ npm run pokemon-analyzer -- --offset 10 --limit 30
```

Both parameters (limit and offset) are required
sortByType flag is optional, if provided will add additional data sorted by each pokémon type(distinct)