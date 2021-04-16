$(function () {
const ICON_SECTION = $('.icons-section');
const SELECTOR = $('#icon-selector');

const ICONS = [
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
  }
];
const TYPE = [
  'animal',
  'vegetable',
  'user'];
const COLORS = [
  'blue',
  'orange',
  'purple',
];
const TYPE_COLORS = zip(TYPE, COLORS);

// CREATE ARRAY CONTAINING EVERY ITEM IN ICONS += ITEM.color
const COLORED_ICONS = ICONS.map((item) => {
  const colorSelector = TYPE.indexOf(item.type);
  const el = {
    ...item,
    // color: TYPE_COLORS[item.type]
    color: COLORS[colorSelector]
  }
  return el
})

// PRINT COLORED_ICONS
ICON_SECTION.html(printIcons(COLORED_ICONS, ICON_SECTION));

// LISTEN CHANGE ON SELECTOR
SELECTOR.change(function () {
  // ON CHANGE, PRINT COLORED_ICONS FILTERED BY VALUE
  const VALUE = $(this).val();
  const out = printIcons(filterIcons(COLORED_ICONS, VALUE));
  ICON_SECTION.html(out);
});


/* ----- FUNCTIONS ----- */

function printIcons(src) {
  // RETURN A FORMATTED STRING FROM src (ARRAY OF OBJECTS)
  let out = "";
  src.forEach((item) => {
    const { family, name, prefix, color } = item;

    const output = `
  <div class="icon flexer col center center-cross">
    <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
    <span>${name}</span>
  </div>`;

    out += output;
  }
  )
  return out
}

function filterIcons(arr, val) {
  // RETURN res (ARRAY) CONTAINING EVERY ITEM IN arr (ARRAY) WITH ['type']==val
  const res = val ? arr.filter((item) => item['type'] === val) : arr;
  return res
}


// MISC
function zip(keyArr, valueArr) {
  // RETURN AN OBJECT FROM TWO ARRAYS
  result = {};
  keyArr.forEach((item, index) => result[item] = valueArr[index]);
  return result
}

});
