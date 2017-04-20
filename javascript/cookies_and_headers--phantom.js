// ######################################################
// This is an example module provided by Wraith.
// Feel free to amend for your own requirements.
// ######################################################
module.exports = function (phantom, ready) {

    page.customHeaders = {
        'SOME-HEADER': 'fish'
    };

    phantom.addCookie({
        'name': 'ckns_policy',
        'value': '111',
        'domain': '.bbc.co.uk'
    });

    //phantom.addCookie({
      //  'name': 'ipe_s',
        //'value': 'a4712cb6-4646-d9b1-5abc-7fcf02a30bc0',
        //'domain': 'test.benefits.gov'
    //});

    //phantom.addCookie({
      //  'name': 'has_js',
      //  'value': '1',
       // 'domain': 'test.benefits.gov'
   // });

     

    phantom.open(phantom.url, function () {
        setTimeout(ready, 5000);
    });
}
