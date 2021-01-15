'use strict';

var WorkHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

function CookieStand(branchName, min, max, cookies) {
    this.Name = branchName
    this.minCustomersPerHour = min;
    this.maxCustomersPerHour = max;
    this.AvgCookiePerSale = cookies;
    this.calculateCustomersPerHour = [];
    this.calculateCokiesPerHour = [];
    this.TotalCookies = 0;
}

CookieStand.prototype.customersPerHour = function () {
    var randResult = [Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour)];

    for (var i = 1; i < WorkHour.length; i++) {
        console.log(i);

        randResult[i] = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
    }
    this.calculateCustomersPerHour = randResult;
};

CookieStand.prototype.CokiesPerHour = function () {
    var CokiesArray = [];
    var hours = this.calculateCustomersPerHour;
    var total = 0;
    for (var i = 0; i < WorkHour.length; i++) {
        CokiesArray[i] = Math.floor(hours[i] * this.AvgCookiePerSale);
        total = total + Number(CokiesArray[i])
        grandTotal=grandTotal+CokiesArray[i];
        //console.log(total);

    }
    this.calculateCokiesPerHour = CokiesArray;
    this.TotalCookies = total;
};

// create Table

var mainDiv;
var locationTable;
var totalOfColumn=[];
totalOfColumn=[];
var grandTotal=0;

    for(var i=0; i< WorkHour.length;i++){
        totalOfColumn.push(0);
    }

        function createTable() {
    mainDiv = document.getElementById('Location');
    locationTable = document.createElement('table');
    mainDiv.appendChild(locationTable);
    
}
function createheader() {
    var headerRow = document.createElement('tr');
    locationTable.appendChild(headerRow);
    var emptyCell = document.createElement('th');
    headerRow.appendChild(emptyCell);
    var hourcell;
    for (var i = 0; i < WorkHour.length; i++) {
        hourcell = document.createElement('th');
        hourcell.textContent = WorkHour[i];
        headerRow.appendChild(hourcell);
    }
    var totalCell = document.createElement('th');
    totalCell.textContent = 'Daily Location Total';
    headerRow.appendChild(totalCell)
}

createTable();
createheader();

CookieStand.prototype.render = function () {
    var locationData = document.createElement('tr');
    locationTable.appendChild(locationData);
    var nameCell = document.createElement('td');
    //console.log(this.Name,'this.Name');
    nameCell.textContent = this.Name;
    locationData.appendChild(nameCell);
    var dataCell;
    for (var i = 0; i < this.calculateCokiesPerHour.length; i++) {
        dataCell = document.createElement('td');
        dataCell.textContent = this.calculateCokiesPerHour[i];
        locationData.appendChild(dataCell);
        totalOfColumn[i] += this.calculateCokiesPerHour[i];
    }
    var totalCell = document.createElement('td');
    locationData.appendChild(totalCell);
    totalCell.textContent = this.TotalCookies;
};
var seattle = new CookieStand('seattle', 23, 65, 6.3);
seattle.customersPerHour();
seattle.CokiesPerHour();
seattle.render();
var Tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
Tokyo.customersPerHour();
Tokyo.CokiesPerHour();
Tokyo.render();
var Dubai = new CookieStand('Dubai', 11, 38, 3.7);
Dubai.customersPerHour();
Dubai.CokiesPerHour();
Dubai.render();
var Paris = new CookieStand('Paris', 20, 38, 2.3);
Paris.customersPerHour();
Paris.CokiesPerHour();
Paris.render();
var Lima = new CookieStand('Lima', 2, 16, 4.8);
Lima.customersPerHour();
Lima.CokiesPerHour();
Lima.render();

function createTotalRow(){
    var totalRow=document.createElement('tr');
    locationTable.appendChild(totalRow);
    var totalCell=document.createElement('th');
    totalCell.textContent='Totals';
    totalRow.appendChild(totalCell);
    var columnTotalCell;

for(var j=0; j< WorkHour.length;j++){
columnTotalCell=document.createElement('th');
totalRow.appendChild(columnTotalCell);
columnTotalCell.textContent=totalOfColumn[j];
}
console.log(grandTotal);
var grandTotalcell =document.createElement('th');
grandTotalcell.textContent=grandTotal;
totalRow.appendChild(grandTotalcell);
locationTable.appendChild(totalRow);
}    
createTotalRow();

var addedLocation= new CookieStand (branchName, min, max, cookies);
var standLocation = document.getElementById('standLocation')
kittenForm.addEventListener('submit', submitter);

function submitter(event) {
  event.preventDefault();
  console.log(event);
  var name = event.target.nameField.value
  console.log('name', name);

  var minField = event.target.minField.value;


}
var container = document.getElementById('standLocation');
  // container.textContent =''
  container.innerHTML =''
  