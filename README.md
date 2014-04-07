## Ripple Account Ledger

A simple tool to get at the account transactions for a single account in a given ledger.

   client = new Client('http://ec2-54-82-34-97.compute-1.amazonaws.com:5005');

   client.accountTx('r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk', 5939246, function(err, response) {
     console.log(response); 
   });

Output:

    { 
      account: 'r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk',
      ledger_index_max: 5939246,
      ledger_index_min: 5939246,
      status: 'success',
      transactions: [ { meta: [Object], tx: [Object], validated: true } ] 
    }


