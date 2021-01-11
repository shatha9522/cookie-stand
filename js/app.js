'use strict';

var WorkHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

function Location(min, max, customerHour, CokiesHour,cokies) {
    this.minCustomersPerHour = min;
    this.maxCustomersPerHour = max;
    this.calculateCustomersPerHour = customerHour;
    this.calculateCokiesPerHour = CokiesHour;
    this.TotalCookies = cokies;
}

Location.prototype.customersPerHour = function () {
    var randResult = [Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour)];

    for (var i = 1; i < WorkHour.length; i++) {
        console.log(i);

        randResult[i] = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
    }
    this.calculateCustomersPerHour = randResult;
};

Location.prototype.CokiesPerHour = function () {
    var CokiesArray = [];
    var hours = this.calculateCustomersPerHour;
    var total = 0;
    for (var i = 0; i < WorkHour.length; i++) {
        CokiesArray[i] = Math.floor(hours[i] * this.AvgCookiePerSale);
        total = total + Number(CokiesArray[i])
        //console.log(total);
    }
    this.calculateCokiesPerHour = CokiesArray;
    this.TotalCookies = total;
};

var seattle = new Location(23, 65, 6.3, 0, 0, 0);
seattle.customersPerHour();
seattle.CokiesPerHour();
var Tokyo = new Location(3, 24, 1.2, 0, 0, 0);
Tokyo.customersPerHour();
Tokyo.CokiesPerHour();
var Dubai = new Location(11, 38, 3.7, 0, 0, 0);
Dubai.customersPerHour();
Dubai.CokiesPerHour();
var Paris = new Location(20, 38, 2.3, 0, 0, 0);
Paris.customersPerHour();
Paris.CokiesPerHour();
var Lima = new Location(2, 16, 4.8, 0, 0, 0);
Lima.customersPerHour();
Lima.CokiesPerHour();

//render page
var parentDiv = document.getElementById('seattle');
var Head = document.createElement('h1');
Head.textContent = 'seattle';
parentDiv.appendChild(Head);

var CookiesList = document.createElement('ul');
parentDiv.appendChild(CookiesList);

for (var i = 0; i < WorkHour.length; i++) {
    var item = document.createElement('li');
    item.textContent = (WorkHour[i] + ":" + seattle.calculateCokiesPerHour[i]);
    CookiesList.appendChild(item);
}
var item = document.createElement('li');
item.textContent = ("Total:" + seattle.TotalCookies);
CookiesList.appendChild(item);
//********************************************************************* */

//************************************************************************** */

var parentDiv = document.getElementById('Tokyo');
var Head = document.createElement('h1');
Head.textContent = 'Tokyo';
parentDiv.appendChild(Head);

var CookiesList = document.createElement('ul');
parentDiv.appendChild(CookiesList);

for (var i = 0; i < WorkHour.length; i++) {
    var item = document.createElement('li');
    item.textContent = (WorkHour[i] + ":" + Tokyo.calculateCokiesPerHour[i]);
    CookiesList.appendChild(item);
}
var item = document.createElement('li');
item.textContent = ("Total:" + Tokyo.TotalCookies);
CookiesList.appendChild(item);
//******************************************************************************

var parentDiv = document.getElementById('Paris');
var Head = document.createElement('h1');
Head.textContent = 'Paris';
parentDiv.appendChild(Head);

var CookiesList = document.createElement('ul');
parentDiv.appendChild(CookiesList);

for (var i = 0; i < WorkHour.length; i++) {
    var item = document.createElement('li');
    item.textContent = (WorkHour[i] + ":" + Paris.calculateCokiesPerHour[i]);
    CookiesList.appendChild(item);
}
var item = document.createElement('li');
item.textContent = ("Total:" + Paris.TotalCookies);
CookiesList.appendChild(item);
//**************************************************************** */


var parentDiv = document.getElementById('Dubai');
var Head = document.createElement('h1');
Head.textContent = 'Dubai';
parentDiv.appendChild(Head);

var CookiesList = document.createElement('ul');
parentDiv.appendChild(CookiesList);

for (var i = 0; i < WorkHour.length; i++) {
    var item = document.createElement('li');
    item.textContent = (WorkHour[i] + ":" + Dubai.calculateCokiesPerHour[i]);
    CookiesList.appendChild(item);
}
var item = document.createElement('li');
item.textContent = ("Total:" + Dubai.TotalCookies);
CookiesList.appendChild(item);
//******************************************************************************


var parentDiv = document.getElementById('Lima');
var Head = document.createElement('h1');
Head.textContent = 'Lima';
parentDiv.appendChild(Head);

var CookiesList = document.createElement('ul');
parentDiv.appendChild(CookiesList);

for (var i = 0; i < WorkHour.length; i++) {
    var item = document.createElement('li');
    item.textContent = (WorkHour[i] + ":" + Lima.calculateCokiesPerHour[i]);
    CookiesList.appendChild(item);
}
var item = document.createElement('li');
item.textContent = ("Total:" + Lima.TotalCookies);
CookiesList.appendChild(item);