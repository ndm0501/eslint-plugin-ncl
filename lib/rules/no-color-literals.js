
/**
 * @fileoverview Prevent the use of color literals in  *.js and *.jsx
 * @author Mohammad Nadeem
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Constants
// ------------------------------------------------------------------------------

const PROPERTIES = [
  'background', 'backgroundColor', 'border',
  'borderColor', 'borderBottom', 'borderBottomColor',
  'borderLeft', 'borderLeftColor', 'borderRightColor', 'borderRight',
  'borderTop', 'borderTopColor', 'color'
]

const COLORS = [
  'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple',
  'fuchsia', 'green', 'lime', 'olive', 'aqua', 'teal', 'blue',
  'navy', 'yellow', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine',
  'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown',
  'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral',
  'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue',
  'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey',
  'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange',
  'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
  'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet',
  'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue',
  'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite',
  'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink',
  'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush',
  'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
  'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey',
  'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray',
  'lightslategrey', 'lightsteelblue', 'lightyellow', 'limegreen',
  'linen', 'magenta', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
  'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen',
  'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream',
  'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab',
  'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise',
  'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink',
  'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown',
  'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna',
  'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen',
  'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet',
  'wheat', 'whitesmoke', 'yellowgreen', 'rebeccapurple',

  '#', 'rgb', 'rgba', 'hsl', 'hsla'

]

/**
 * Test wether the property name of the object
 * includes style properties taking colors
 * @param {String} - Style property
 * @returns {Boolean} result
 */

function checkProperties(propertyName) {
  if (propertyName) {
    return PROPERTIES.some((property) => property === propertyName);
  }
  return false;

}

/**
 * Test wether the value of the object
 * includes style literals in formats of
 * #, rgb, rgba, hsla
 * @param {String} - Style property's value
 * @returns {Boolean} result
 */

function checkValues(value) {
  if (value) {
    return COLORS.some((colorFormat) => value.toString().includes(colorFormat));
  }
  return false;
}


module.exports = {

  meta: {
    type: "problem",
    docs: {
      description: 'Prevent usage of color literals',
      category: 'Best Practices',
      recommended: true,
    },
    schema: []
  },

  create(context) {

    return {
      Property(node) {

        if (!node || !node.key || !node.value) {
          return;
        }

        const colorPropertyMatched = checkProperties(node.key.name);
        const valueHasColorLiterals = checkValues(node.value.value);

        if (colorPropertyMatched && valueHasColorLiterals) {
          context.report({
            node: node.value,
            message: "Unexpected: '{{name}}'. Color literals are not allowed",
            data: {
              name: node.value.value
            }
          });
        }
      }
    };
  }
};