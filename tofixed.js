function toFixed(value, precision) {
  // For the purposes of this assessment, this function has been written
  // as a stand-alone function and does not include the calls to
  // checkPrecision and unformat in accounting.js. The arguments are
  // assumed to be a well-formed integer or float for value, and
  // 0 or a positive integer for precision. If this function is to be a
  // drop-in replacement for the toFixed function in accounting.js, the
  // following two lines of code can be uncommented.
  //
  // precision = checkPrecision(precision, lib.settings.number.precision);
  // value = unformat(value);

  if (precision === 0) {
    return Math.round(value).toString();
  }
  var [integer, decimal] = value.toString().split('.');
  if (decimal === undefined) {
    var decimal = '';
    for (var i = 0; i < precision; i++) {
      decimal += '0';
    }
  } else if (precision > decimal.length) {
    for (var j = precision - decimal.length, i = 0; i < j; i++) {
      decimal += '0';
    }
  } else {
    integer = integer + decimal.slice(0, precision);
    decimal = decimal.slice(precision);
    var roundingNumber = integer + '.' + decimal;
    var rounded = Math.round(parseFloat(roundingNumber));
    [integer, decimal] = rounded.toString().split('.');
    decimal = rounded.toString().slice(-precision);
    integer = rounded.toString().slice(0, -precision) || '0';
    if (integer.slice(0, 1) === '-' ) {
      integer = '-0' + integer.slice(1);
    }
  }
  return integer + '.' + decimal;
}
