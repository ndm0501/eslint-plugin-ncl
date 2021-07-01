# eslint-plugin-nadeem

Restricts the usage of color literals in *.js and *.jsx

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nadeem`:

```
$ npm install eslint-plugin-nadeem --save-dev
```


## Usage

Add `nadeem` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nadeem"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nadeem/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





