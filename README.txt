This contains the detail description on the technologies and method used in this project.

This application demonstrate the simple usage of AngularJS basics. Following file developed to demonstrate it's each behaviour.

Folder Structure
-----------------
AngularJS
¦   README.txt
¦
+---css
¦       custome.css
¦
+---img
¦       images.jpg
¦       left-arrow.gif
¦       like.ico
¦       right-arrow.gif
¦       unlike.ico
¦
+---js
¦       angular.js
¦       customscript.js
¦       filters.js
¦
+---pages
¦       customFilter.html
¦       DataBinding.html
¦       EmployeeList.html
¦       EmployeeTable.html
¦       EventHandler.html
¦       Filter.html
¦       Include.html
¦       Repeat.html
¦       Search.html
¦       SimpleHTML.html
¦       WebServiceCall.html
¦       CustomeService.html

		
customFilter.html - demonstrate the ability to write custom filter using seperate filter scripts in "filter.js" and apply those filters on the html as "genderFilter". Row data has the integer values for "Gender", hence custom Filter will replace the integer values with Texts.
	Also demonstrate the show / Hide functionality
	
Include.html - Demonstrate the "ng-include" functionality by including two views EmployeeTable.html and EmployeeList.html dynamically. This may give some error on Chrom browser but in FireFox.

DataBinding.html - Demonstrate teh two way data binding behaviour.

EventHandler.html - Demonstrate the response to an event (click) and update the view.

Filter.html - Demonstrate teh basic filter functions like "limitTo" and "orderBy"

Repeat.html - Demosntrate repeatative iteration throuhg a collection.

Search.html - Demonstrate the ability to filter search on fields or using custom function to include more fields.

WebServiceCall.html - Demonstrate the angular support for service call and handle the response.

CustomeService.html - Demonstrates the custom build service("processString") in stringService.js, can be re-used in controllers.

customscript.js - Contains all the java scripts used in the html pages (views)

filters.js - Contains the custom filter scripts.

stringService.js - custom service script, provide method processString(inputString).

angular.js - Angular script (version 1.5.x) downloade from https://angularjs.org/

Following tutorial was refeered during this esamples.
https://www.youtube.com/playlist?list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl