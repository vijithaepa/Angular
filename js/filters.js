/**
 * All filter javascripts.
 */

/// <reference path="customscript.js"/>


customFilterApp.filter("genderFilter", function(){
 			return function($gender){
 				switch ($gender) {
		 			case 1: 
		 				return "Male";
		 			case 2: 
		 				return "Female";
		 			case 3: 
		 				return "Not Specified";
				}
 			}
 		})