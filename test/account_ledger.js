var Client = require('../');

describe('getting a particular ledger for an account', function() {

  before(function(){

    client = new Client('http://ec2-54-82-34-97.compute-1.amazonaws.com:5005');

  });

  it('should return transactions from the ledger specifed', function(fn) {

    client.accountTx('r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk', 5939246, function(err, ledger) {

      console.log(err, ledger);
      fn();
       
    });

  });

});
