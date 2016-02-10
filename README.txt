This contains the detail description on the technologies and method used in this project.

This application demonstrate the 
1 - Simple usage of AngularJS basics. 
2 - Simple Usage of Invoking Spring MVC application from AngularJS rest calls.

Following file developed to demonstrate it's each behaviour.


Folder Structure
-----------------

AngularJS
|
|   pom.xml
|   README.txt
\---src
    +---main
    |   +---java
    |   |   \---com
    |   |       \---angular
    |   |           \---springmvc
    |   |               +---configuration
    |   |               |       CORSFilter.java
    |   |               |       HelloWorldConfiguration.java
    |   |               |       HelloWorldInitializer.java
    |   |               |
    |   |               +---controller
    |   |               |       HelloWorldRestController.java
    |   |               |       IndexController.java
    |   |               |
    |   |               +---model
    |   |               |       User.java
    |   |               |
    |   |               \---service
    |   |                       UserService.java
    |   |                       UserServiceImpl.java
    |   |
    |   +---resources
    |   \---webapp
    |       +---static
    |       |   +---css
    |       |   |       app.css
    |       |   |       bootstrap.css
    |       |   |       custome.css
    |       |   |
    |       |   +---js
    |       |   |   |   angular-route.js
    |       |   |   |   angular.js
    |       |   |   |   app.js
    |       |   |   |   customscript.js
    |       |   |   |   filters.js
    |       |   |   |   stringService.js
    |       |   |   |
    |       |   |   +---controller
    |       |   |   |       user_controller.js
    |       |   |   |
    |       |   |   \---service
    |       |   |           user_service.js
    |       |   |
    |       |   \---pages
    |       |           CustomeService.html
    |       |           CustomFilter.html
    |       |           DataBinding.html
    |       |           EmployeeList.html
    |       |           EmployeeTable.html
    |       |           EventHandler.html
    |       |           Filter.html
    |       |           Include.html
    |       |           Repeat.html
    |       |           Search.html
    |       |           SimpleHTML.html
    |       |           WebServiceCall.html
    |       |
    |       \---WEB-INF
    |           \---views
    |                   UserManagement.jsp
    |
    \---test
        +---java
        \---resources

		
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



Building the Project.
====================

Pre-requisites
--------------
JDK 1.7
Maven 2 or higher
set java_home and m2_home.

Steps:
------
run mvn clean package


Running the application.
========================
Go to target folder (/AngularJS/target) and find the SpringAngularExample.war file
Deploy it in the favorite application server
Open an web browser and type url http://localhost:8080/SpringAngularExample

If you want to run the each individual angular examples, type the below URL and replace the html file name with any of above
http://localhost:8080/SpringAngularExample/static/pages/Include.html



Following tutorial was refeered during this esamples.
=====================================================
https://www.youtube.com/playlist?list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl
http://websystique.com/springmvc/spring-mvc-4-angularjs-example/