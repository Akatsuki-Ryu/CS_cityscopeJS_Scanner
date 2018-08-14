// https://www.sitepoint.com/javascript-design-patterns-singleton/
//https://gist.github.com/dmnsgn/4a6ad76de1b5928f13f68f406c70bb09

class Storage {
  constructor() {
    this._camCanvas = null;
    this._typesArray = [];
    this._pixelColArr = [];
    this._cityIOdataStruct = "";
    this._svgPntsArray = [];
    this._renderAnimFrame = 0;
    this._matrixGridLocArray = [];
    this._console = "";
  }

  //web cam canvas
  get camCanvas() {
    return this._camCanvas;
  }
  set camCanvas(value) {
    this._camCanvas = value;
  }

  //types Array
  get typesArray() {
    return this._typesArray;
  }
  set typesArray(value) {
    this._typesArray = value;
  }

  //pixel Color Arr
  get pixelColArr() {
    return this._pixelColArr;
  }
  set pixelColArr(value) {
    this._pixelColArr = value;
  }

  //cityIO data Struct
  get cityIOdataStruct() {
    return this._cityIOdataStruct;
  }
  set cityIOdataStruct(value) {
    this._cityIOdataStruct = value;
  }

  //SVG points Array
  get svgPntsArray() {
    return this._svgPntsArray;
  }
  set svgPntsArray(value) {
    this._svgPntsArray = value;
  }

  //Grid Render Animation Frame
  get renderAnimFrame() {
    return this._renderAnimFrame;
  }
  set renderAnimFrame(value) {
    this._renderAnimFrame = value;
  }

  // matrix Grid Location Array
  get matrixGridLocArray() {
    return this._matrixGridLocArray;
  }
  set matrixGridLocArray(value) {
    this._matrixGridLocArray = value;
  }

  // matrix Grid Location Array
  get console() {
    return this._console;
  }
  set console(value) {
    this._console += value;
  }
}

export default new Storage();