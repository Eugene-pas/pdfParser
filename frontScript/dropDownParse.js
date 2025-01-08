let reqParseType = '';

function dropDownParse() {
  const parsePDFType = { SIMPLE: 'SIMPLE', MARKER: 'MARKER', WHISPERER: 'WHISPERER' };
  const arreyParseType = {
    'Simple': parsePDFType.SIMPLE,
    'Marker': parsePDFType.MARKER,
    // 'Whisperer': parsePDFType.WHISPERER
  };

  const dropdownParse = document.getElementById('dropdownParse');
  reqParseType = parsePDFType.SIMPLE;

  for (const key in arreyParseType) {
    if (Object.hasOwnProperty.call(arreyParseType, key)) {
      const element = arreyParseType[key];

      dropdownParse.appendChild(new Option(key, element));
    }
  }
}

class DropDownParse {
  constructor() {
    this.height = height;
    this.width = width;
  }
}



// dropdownParse.addEventListener('change', (e) => {
//   reqParseType = e.target.value;
// });
