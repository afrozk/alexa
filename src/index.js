
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);


    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewQuoteIntent');
    },

    'GetNewQuoteIntent': function () {
        var say = 'Hello !! Here is a quote!!!' + getQuote();
        this.emit(':tell', say );
    },

    'AMAZON.HelpIntent': function () {
         this.emit(':ask', 'Listen to a new quote eachtime', 'try again');
     },

     'AMAZON.CancelIntent': function () {
         this.emit(':tell', 'Goodbye');
     },

     'AMAZON.StopIntent': function () {
         this.emit(':tell', 'Goodbye');
     }
};

//  helper functions  ===================================================================


function getQuote() {
    var myQuotes = [
    'If you want to achieve greatness stop asking for permission. by Anonymous',
    'Things work out best for those who make the best of how things work out. by John Wooden',
    'To live a creative life, we must lose our fear of being wrong. by Anonymous',
    'If you are not willing to risk the usual you will have to settle for the ordinary. by Jim Rohn',
    'Trust because you are willing to accept the risk, not because it’s safe or certain. by Anonymous'
        ]

    var newQuote = randomPhrase(myQuotes);

    return newQuote;
}

function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}