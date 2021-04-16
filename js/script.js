$(function () {
const iconSection = $('.icons-section');
const selector = $('#icon-selector');

const icons = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  },
  {
    name: 'skull',
    prefix: 'fa-',
    type: 'calavera',
    family: 'fas'
  },
  {
    name: 'radiation',
    prefix: 'fa-',
    type: 'calavera',
    family: 'fas'
  },
  {
    name: 'hat-wizard',
    prefix: 'fa-',
    type: 'calavera',
    family: 'fas'
  },
  {
    name: 'democrat',
    prefix: 'fa-',
    type: 'calavera',
    family: 'fas'
  }
];
const type = [
  'animal',
  'vegetable',
  'user',
  'calavera'];
const colors = [
  '#196781',
  'orange',
  'purple',
  'rgb(207, 68, 68)'
];

const typeColors = zip(type, colors);

// CREATE ARRAY CONTAINING EVERY ITEM IN ICONS += ITEM.color
const coloredIcons = icons.map((item) => {
  // const colorSelector = TYPE.indexOf(item.type);
  const el = {
    ...item,
    color: typeColors[item.type]
    // color: COLORS[colorSelector]
  }
  return el
})

// PRINT coloredIcons
iconSection.html(printIcons(coloredIcons, iconSection));

// LISTEN CHANGE ON SELECTOR
selector.change(function () {
  // ON CHANGE, PRINT coloredIcons FILTERED BY VALUE
  const VALUE = $(this).val();
  const out = printIcons(filterIcons(coloredIcons, VALUE));
  iconSection.html(out);
});


/* ----- FUNCTIONS ----- */

function printIcons(src) {
  // RETURN A FORMATTED STRING FROM src (ARRAY OF OBJECTS)
  let out = "";
  src.forEach((item) => {
    const { family, name, prefix, color } = item;

    const output = `
  <a href="https://fontawesome.com/icons/${name}?style=solid" class="icon flexer col center center-cross" target="_blank">
    <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
    <span>${name}</span>
    </a>
`;

    out += output;
  }
  )
  return out
}

function filterIcons(arr, val) {
  /*
  * Filter an array of objects, return a new array containing
  * only the items of the original array with type === val.
  * If val is empy/undefined/etc, return the original array.
  * 
  * @param arr || array of objects
  * @param val || filtering criteria
  * @return    || filtered array
  */

    const res = arr.filter((item) => {

      if (!val) {

        return true;

      } else {

        return item.type === val;
      }
     
    });

  return res
}



// MISC
function zip(keyArr, valueArr) {
  /*
  * Iterates through two arrays (same length, hopefully), and
  * for item in two arrays:
  *   return keyArr[index] = valueArr[index]
  * 
  * @param keyArr   || array whose items = keys of the returned object
  * @param valueArr || array whose items = values of the returned object
  * @return         || new object
  */
  const result = {};
  keyArr.forEach((item, index) => result[item] = valueArr[index]);
  return result
}

});
