//Date format options
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var dateTimeFormat = new Intl.DateTimeFormat('en-US', options);

var tsconverter = function(source) {
  var unixts = null;
  var naturalts = null;

  if(isNaN(source)) { //check for Natural language format
    unixts = Date.parse(source);
    if(!isNaN(unixts)) {
      naturalts = source;
      unixts /= 1000; // remove milliseconds
    } else {
        unixts = null;
    }
    return {unix: unixts, natural: naturalts};
  } else { // are we supposed to handle negative timestamps?
    unixts = parseInt(source, 10); //explicit radix 10, just in case
    // don't forget to convert timestamp to milliseconds
    naturalts = dateTimeFormat.format(new Date(parseInt(source, 10)*1000));
    return {unix: unixts, natural: naturalts};
  }
};

module.exports = tsconverter;
