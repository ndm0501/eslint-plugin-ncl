# eslint-plugin-ncl

Restricts the usage of color literals in *.js and *.jsx

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ncl`:

```
$ npm install eslint-plugin-ncl --save-dev
```


## Usage

Add `ncl` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ncl"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ncl/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





