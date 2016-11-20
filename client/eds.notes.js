//POST A QUESTION: 
{"quiz" : "uri to quiz", "questionText" : "how am i doing today" }

// then when you pull the quiz  it has a listOfQuestion with all questions related to it
// each question has listOfAnswer too
// so quiz => listOfQuestion => listOfAnswer

//HEADER
// /tractor-quiz-api/profile/{objectName}
// add 
Accept : application/schema+json
 //to the headers

//POST TO A USER
//or to a quiz or answer
{ "quiz" : "uri", "score" : 80, "appUser" : "uri" }
//that will create a quizResult object
//then you can pull quiz results from appUser
/appUsers/20/listOfQuizResult

 //USER SIGNUP EXAMPLE
 {
"firstName": "Edward",
  "lastName": "Briggler",
  "password": "captianCrunch",
  "phoneNumber": "5013365535",
  "email": "ed@test.com",
  "birthDate": "1983-11-19",
  "dealership": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1303",
  "userRole": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/userRoles/5"
}

//role needs to be the full url to role, http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/Roles/1303
//here is the schema needed to post
{
 "title": "App user",
 "properties": {
   "lastName": {
     "title": "Last name",
     "readOnly": false,
     "type": "string"
   },
   "listOfQuizResult": {
     "title": "List of quiz result",
     "readOnly": false,
     "type": "string",
     "format": "uri"
   },
   "roleId": {
     "title": "Role id",
     "readOnly": false,
     "type": "integer"
   },
   "videoResultId": {
     "title": "Video result id",
     "readOnly": false,
     "type": "integer"
   },
   "birthDate": {
     "title": "Birth date",
     "readOnly": false,
     "type": "string",
     "format": "date-time"
   },
   "dealership": {
     "title": "Dealership",
     "readOnly": false,
     "type": "string",
     "format": "uri"
   },
   "quizResultId": {
     "title": "Quiz result id",
     "readOnly": false,
     "type": "integer"
   },
   "firstName": {
     "title": "First name",
     "readOnly": false,
     "type": "string"
   },
   "password": {
     "title": "Password",
     "readOnly": false,
     "type": "string"
   },
   "phoneNumber": {
     "title": "Phone number",
     "readOnly": false,
     "type": "string"
   },
   "listOfVideoResult": {
     "title": "List of video result",
     "readOnly": false,
     "type": "string",
     "format": "uri"
   },
   "userRole": {
     "title": "User role",
     "readOnly": false,
     "type": "string",
     "format": "uri"
   },
   "email": {
     "title": "Email",
     "readOnly": false,
     "type": "string"
   }
 },
 "definitions": {},
 "type": "object",
 "$schema": "http://json-schema.org/draft-04/schema#"
}
//notice on UserRole it's needing the full url to that role
//listOf* are not needed
//same goes with dealership

//PROGRESS BAR
//ok i got your percentage working
//its some javascript
//just one rest call 
/**
*	let's do this with jquery, it may be all we need.
*	
*	@author - @ejb0915 
*/

// need to do this first in order for foundation to work
$(document).foundation();

/**
* global vars
*/
var base_url = 'http://lstractor.southcentralus.cloudapp.azure.com:8080';
var root = base_url + '/tractor-quiz-api/';

var api = axios.create({
   baseURL: root,
});

var data;
var total = 0;
var numCompleted = 0;
var percentComplete;

$(document).ready(function () {
   var appUserUrl = 'http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers/1649';
   var url = '/videoResults/search/byAppUser?appuser=' + appUserUrl;
   api.get(url)
       .then(response => {
           data = response.data._embedded.videoResults;
           total = data.length;

           $(response.data._embedded.videoResults).each(function (index, rec) {
               console.log(rec);
               if (rec.isComplete) {
                   numCompleted++;
               }
           });

           percentComplete = (numCompleted/total) * 100;
           console.log('Percent Complete: ' + percentComplete); 
       })
       .catch(error => {
           console.log(error);
       });
});
//basically, you can get all the videos from the service for an appUser.
//do a .length on it to get the total video result count for the user
//then loop over them, check rec.isComplete and increment the numCompleted count.
//after that just do the math to get the percentage complete percentComplete = (numCompleted/total) * 100;
//no new service needed!

//here is the json to post
{
"appUser" : "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/appUsers/1649",
"viewAmout" : 15,
"video" : "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/videos/1687",
"isComplete" : false
}
//stuff like that
//you can make some records pretty easily
