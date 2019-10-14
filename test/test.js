let assert = require('assert');
let fs = require('fs');
let rawdata = fs.readFileSync('quotes.json');

let validate_json = (s) =>{
    try{
        JSON.parse(s);
        return true;
    }catch(e){
        return false;
    }
};

describe('CHECK_JSON', function() {
    describe('json_validation', function() {
        it('should return true if json is without errors', function() {
            let j = validate_json(rawdata);
            assert.equal(j ,true);
    });
  });
});
