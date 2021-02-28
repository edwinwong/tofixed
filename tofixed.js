function toFixed(value, precision) {
  // For the purposes of this assessment, this function has been written
  // as a stand-alone function and does not include the calls to
  // checkPrecision and unformat in accounting.js. The arguments are
  // assumed to be a well-formed integer or float for value, and
  // 0 or a positive integer for precision. If this function is to be a
  // drop-in replacement for the toFixed function in accounting.js, the
  // following two lines of code, as well as the lines at the bottom can
  // be uncommented.
  //
  // precision = checkPrecision(precision, lib.settings.number.precision);
  // value = unformat(value);

  // If precision is 0, simply return the rounded value using Math.round()  
  if (precision === 0) {
    return Math.round(value).toString();
  }
  // Split input into integer and decimal portions. For example,
  // 0.615 => '0' and '5267'
  // 10.235 => '10' and '235'
  // 8 => '8' and undefined
  var [integer, decimal] = value.toString().split('.');
  // If the decimal is undefined, or the precision is longer than
  // decimal.length, no rounding is needed. Simply add the required
  // number of 0's.
  if (decimal === undefined) {
    decimal = '';
    for (var i = 0; i < precision; i++) {
      decimal += '0';
    }
  } else if (precision > decimal.length) {
    for (var j = precision - decimal.length, k = 0; k < j; k++) {
      decimal += '0';
    }
  }
  // Rounding operation: move the decimal based on the precision,
  // use Math.round() to round this number, then move the decimal back
  // For example, if rounding 10.235 to 2 decimal places, generate the
  // number 1023.5, round this number to get 1024, then move the decimal
  // back to get 10.24
    else {
    integer = integer + decimal.slice(0, precision);
    decimal = decimal.slice(precision);
    var roundingNumber = integer + '.' + decimal;
    var rounded = Math.round(parseFloat(roundingNumber));
    [integer, decimal] = rounded.toString().split('.');
    decimal = rounded.toString().slice(-precision);
    integer = rounded.toString().slice(0, -precision);
    // Make sure numbers less than 0 have a leading 0 or -0 in the
    // string representation
    if (integer === '') {
      integer = '0';
    } else if (integer === '-') {
      integer = '-0';
    }
  }
  // Join the integer and decimal portions
  return integer + '.' + decimal;
}

// Also uncomment this line to use and expose in accounting.js
// lib.toFixed = toFixed;