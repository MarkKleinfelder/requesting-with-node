

'use strict'
const apiKey = require('./env.js')
const request = require('request');


function get(movie){
request('https://www.googleapis.com/customsearch/v1?key='+apiKey+'&cx=016709695509008600967:vhjbyxdfox8&q=' + movie + '',function(error,response,body){
	var movies = JSON.parse(body);
	var items = movies.items;
	var kind = items[0];
	var title = kind.title;
	console.log(title);

})
};

module.exports = get;

