'use strict';
var WorkHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var seattle = {

    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    AvgCookiePerSale: 6.3,
    calculateCustomersPerHour: null,
    calculateCokiesPerHour: null,
    TotalCookies: null,
    customersPerHour: function () {
        var randResult = [Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour)];

        for (var i = 1; i < WorkHour.length; i++) {
            console.log(i);

            randResult[i] = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
        }
        this.calculateCustomersPerHour = randResult;
    },

    CokiesPerHour: function () {
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
    }


}

seattle.customersPerHour();
seattle.CokiesPerHour();
//console.log(seattle.calculateCokiesPerHour);

var parentDiv = document.getElementById('seattle');
var Head = document.createElement('h1');
Head.textContent = 'seattle';
parentDiv.appendChild(Head);

var CookiesList = document.createElement('ul');
parentDiv.appendChild(CookiesList);

for (var i = 0; i < WorkHour.length; i++) {
    var item = document.createElement('li');
    item.textContent =(WorkHour[i]+":"+seattle.calculateCokiesPerHour[i]);
    CookiesList.appendChild(item);
}
var item = document.createElement('li');
item.textContent =("Total:"+ seattle.TotalCookies);
CookiesList.appendChild(item);
//********************************************************************* */
var Tokyo={
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    AvgCookiePerSale: 1.2,
    calculateCustomersPerHour: null,
    calculateCokiesPerHour: null,
    TotalCookies: null,     
    customersPerHour: function () {
        var randResult = [Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour)];

        for (var i = 1; i < WorkHour.length; i++) {
            console.log(i);

            randResult[i] = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
        }
        this.calculateCustomersPerHour = randResult;
    },

    CokiesPerHour: function () {
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
    }

}
    Tokyo.customersPerHour();
    Tokyo.CokiesPerHour();


    var parentDiv = document.getElementById('Tokyo');
    var Head = document.createElement('h1');
    Head.textContent = 'Tokyo';
    parentDiv.appendChild(Head);
    
    var CookiesList = document.createElement('ul');
    parentDiv.appendChild(CookiesList);
    
    for (var i = 0; i < WorkHour.length; i++) {
        var item = document.createElement('li');
        item.textContent =(WorkHour[i]+":"+Tokyo.calculateCokiesPerHour[i]);
        CookiesList.appendChild(item);
    }
    var item = document.createElement('li');
    item.textContent =("Total:"+ Tokyo.TotalCookies);
    CookiesList.appendChild(item);
//************************************************************************** */
var Dubai={



    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    AvgCookiePerSale: 1.2,
    calculateCustomersPerHour: null,
    calculateCokiesPerHour: null,
    TotalCookies: null,     
    customersPerHour: function () {
        var randResult = [Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour)];

        for (var i = 1; i < WorkHour.length; i++) {
            console.log(i);

            randResult[i] = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
        }
        this.calculateCustomersPerHour = randResult;
    },

    CokiesPerHour: function () {
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
    }

}

Dubai.customersPerHour();
Dubai.CokiesPerHour();

var parentDiv = document.getElementById('Dubai');
    var Head = document.createElement('h1');
    Head.textContent = 'Dubai';
    parentDiv.appendChild(Head);
    
    var CookiesList = document.createElement('ul');
    parentDiv.appendChild(CookiesList);
    
    for (var i = 0; i < WorkHour.length; i++) {
        var item = document.createElement('li');
        item.textContent =(WorkHour[i]+":"+Dubai.calculateCokiesPerHour[i]);
        CookiesList.appendChild(item);
    }
    var item = document.createElement('li');
    item.textContent =("Total:"+ Dubai.TotalCookies);
    CookiesList.appendChild(item);
    //******************************************************************************
    var Paris={
        minCustomersPerHour: 3,
            maxCustomersPerHour: 24,
            AvgCookiePerSale: 1.2,
            calculateCustomersPerHour: null,
            calculateCokiesPerHour: null,
            TotalCookies: null,     
            customersPerHour: function () {
                var randResult = [Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour)];
        
                for (var i = 1; i < WorkHour.length; i++) {
                    console.log(i);
        
                    randResult[i] = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
                }
                this.calculateCustomersPerHour = randResult;
            },
        
            CokiesPerHour: function () {
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
            }
        
        }
        
        Paris.customersPerHour();
        Paris.CokiesPerHour();
        
        var parentDiv = document.getElementById('Paris');
            var Head = document.createElement('h1');
            Head.textContent = 'Paris';
            parentDiv.appendChild(Head);
            
            var CookiesList = document.createElement('ul');
            parentDiv.appendChild(CookiesList);
            
            for (var i = 0; i < WorkHour.length; i++) {
                var item = document.createElement('li');
                item.textContent =(WorkHour[i]+":"+Paris.calculateCokiesPerHour[i]);
                CookiesList.appendChild(item);
            }
            var item = document.createElement('li');
            item.textContent =("Total:"+ Paris.TotalCookies);
            CookiesList.appendChild(item);
            //**************************************************************** */
            var Dubai={



                minCustomersPerHour: 3,
                maxCustomersPerHour: 24,
                AvgCookiePerSale: 1.2,
                calculateCustomersPerHour: null,
                calculateCokiesPerHour: null,
                TotalCookies: null,     
                customersPerHour: function () {
                    var randResult = [Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour)];
            
                    for (var i = 1; i < WorkHour.length; i++) {
                        console.log(i);
            
                        randResult[i] = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
                    }
                    this.calculateCustomersPerHour = randResult;
                },
            
                CokiesPerHour: function () {
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
                }
            
            }
            
            Dubai.customersPerHour();
            Dubai.CokiesPerHour();
            
            var parentDiv = document.getElementById('Dubai');
                var Head = document.createElement('h1');
                Head.textContent = 'Dubai';
                parentDiv.appendChild(Head);
                
                var CookiesList = document.createElement('ul');
                parentDiv.appendChild(CookiesList);
                
                for (var i = 0; i < WorkHour.length; i++) {
                    var item = document.createElement('li');
                    item.textContent =(WorkHour[i]+":"+Dubai.calculateCokiesPerHour[i]);
                    CookiesList.appendChild(item);
                }
                var item = document.createElement('li');
                item.textContent =("Total:"+ Dubai.TotalCookies);
                CookiesList.appendChild(item);
                //******************************************************************************
                var Lima={
                    minCustomersPerHour: 3,
                        maxCustomersPerHour: 24,
                        AvgCookiePerSale: 1.2,
                        calculateCustomersPerHour: null,
                        calculateCokiesPerHour: null,
                        TotalCookies: null,     
                        customersPerHour: function () {
                            var randResult = [Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour)];
                    
                            for (var i = 1; i < WorkHour.length; i++) {
                                console.log(i);
                    
                                randResult[i] = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
                            }
                            this.calculateCustomersPerHour = randResult;
                        },
                    
                        CokiesPerHour: function () {
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
                        }
                    
                    }
                    
                    Lima.customersPerHour();
                    Lima.CokiesPerHour();
                    
                    var parentDiv = document.getElementById('Lima');
                        var Head = document.createElement('h1');
                        Head.textContent = 'Lima';
                        parentDiv.appendChild(Head);
                        
                        var CookiesList = document.createElement('ul');
                        parentDiv.appendChild(CookiesList);
                        
                        for (var i = 0; i < WorkHour.length; i++) {
                            var item = document.createElement('li');
                            item.textContent =(WorkHour[i]+":"+Lima.calculateCokiesPerHour[i]);
                            CookiesList.appendChild(item);
                        }
                        var item = document.createElement('li');
                        item.textContent =("Total:"+ Lima.TotalCookies);
                        CookiesList.appendChild(item);