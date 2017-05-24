// Generated by LiveScript 1.5.0
(function(){
  var main, expect;
  main = require('../main/main.js');
  expect = require('expect');
  describe('New Address', function(_){
    it('check', function(){
      var i$, ref$, len$, coin, provider, ref1$, address, privateKey, valid, message, signature;
      for (i$ = 0, len$ = (ref$ = ['eth', 'btc', 'ltc']).length; i$ < len$; ++i$) {
        coin = ref$[i$];
        provider = main.newAddr[coin];
        ref1$ = provider(), address = ref1$.address, privateKey = ref1$.privateKey;
        valid = provider.verify(address);
        expect(valid).toBe(true, "Invalid Ethereum Address");
        message = "Test Message";
        signature = main.sign[coin].sign(message, privateKey);
        expect(main.sign[coin].verify(message, address, signature)).toBe(true);
      }
    });
  });
}).call(this);