import select from 'dom-select';

export default (url) => {
  const spriteId = 'bp-svg-sprite';
  const sprite = select(`#${spriteId}`);

  // footgun check
  if (typeof url !== 'string') {
    throw new Error('URL must be a string');
  }

  // let's avoid multiple versions in the DOM, please
  if (sprite) return;

  // get the sprite
  const ajax = new XMLHttpRequest();
  ajax.open('GET', url, true);
  ajax.send();
  ajax.onload = () => {
    // make a hidden wrapper for the sprite to live in
    const div = document.createElement('div');
    div.id = spriteId;
    div.style.height = '0';
    div.innerHTML = ajax.responseText;

    // drop it into the page
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
};
