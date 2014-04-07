var request = require('request');

function respond(err, resp, body, fn) {
  if (err) {
    fn(err, null);
  } else {
    fn(null, body.result);
  }
}

function Client(rippledUrl) {
  this.url = rippledUrl   
}

Client.prototype.post = function(body, fn) {
  var url = this.url;
  request.post({ url: url, json: body }, function(err, resp, body) {
    respond(err, resp, body, fn);
  });;
}

Client.prototype.accountInfo = function(account, fn) {
  var body = { 
    'method': 'account_info', 
    'params': [ { 'account': account } ]
  };

  this.post(body, fn);
}

Client.prototype.accountTx = function(account, ledger, fn) {
  var body = { 
    'method': 'account_tx', 
    'params': [{ 
      'account': account,
      'ledger_index_min': ledger,
      'ledger_index_max': ledger
    }]
  };

  this.post(body, fn);
}

module.exports = Client;

