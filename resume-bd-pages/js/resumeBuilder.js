  var bio = {
    "name" : "Brenda Darling",
    "role" : "Network Center Technician",
    "contacts" : {
    "mobile": "214-458-4880",
    "email": "darlingbrenda@att.net",
    "github": "brendadarling",
    "location": "Mesquite, Texas"
    },
    "picture": "images/me.jpg",
    "welcomeMessage": "Welcome to My Resume",
    "skills": ["DSL Maintenance", "DSL privisioning", "Network Paths", "ATM paths", "OCD path", "migrations"]
    };

   var education = {
    "schools": [
    {
      "name": "Justin F Kimball",
      "location": "Dallas, Texas",
      "degree": "high school diploma",
      "dates": "1984"
    },
    {
      "name": "Eastfield Community College",
      "location": "Mesquite, Texas",
      "degree": "Business Management",
      "dates": "1994"
    },
    {
      "name": "Eastfield Community College",
      "location": "Mesquite, Texas",
      "degree": "ASL",
      "dates": "2000"
    }
    ],
    "onlineCourses": [
    {
      "title": "Electronic Engineering",
      "school": "Thompson",
      "dates": "2004"
    },
    {
      "title": "Cisco 1-3",
      "school": "Stanley College",
      "dates": "2012"
    },
    {
      "title": "Nano Degree To Intro to Programming",
      "school": "Udacity",
      "dates": "2015"
    }]   
   }

function displayEducation() {
for (edu in education.schools) {
$('#education').append(HTMLschoolStart);
var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
var formattedNameAndDegree = formattedName + formattedDegree;
$(".education-entry:last").append(formattedNameAndDegree);
var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
$(".education-entry:last").append(formattedDate);
var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
$(".education-entry:last").append(formattedLocation);
// if (education.schools[edu].majors.length > 0) {
// for (major in education.schools[edu].majors) {
// var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]);
// $(".education-entry:last").append(formattedMajor);
// }
}

//online classes
$('#education').append(HTMLonlineClasses)
for (online in education.onlineCourses) {
$('#education').append(HTMLschoolStart);
var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
var formattedTitleAndSchool = formattedTitle + formattedSchool;
$(".education-entry:last").append(formattedTitleAndSchool);
var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
$(".education-entry:last").append(formattedDate);
// var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
// $(".education-entry:last").append(formattedURL);
};

};

displayEducation();

   var work = {
    "jobs": [
    {
      "employer": "ATT",
      "title": "Operator Services",
      "dates": "1991-1999",
      "description": "1411 operator"
    },
    {
      "employer": "ATT",
      "title": "MLAC",
      "dates": "1999-2007",
      "description": "Facility Assigner"
    },
    {
      "employer": "ATT",
      "title": "Technician",
      "dates": "2007-present",
      "description": "DSL technician"
    
          }]
   } 

  
  

function displayWork() {

for(job in work.jobs){

$("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);

};

};

displayWork();


function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
 
    return locationArray;
}


console.log(locationizer(work));



function inName(nameString){
var nameArray = nameString.split(" ");
var lastName = nameArray[1].toUpperCase();
var firstName = nameArray[0].toLowerCase();
firstName = firstName[0].toUpperCase() + firstName.slice(1);
return firstName + " " + lastName;
};

$("#main").append(internationalizeButton);


$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", bio.name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;

if(bio.skills.length > 0) {

$("#header").append(HTMLskillsStart)

var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkills);
formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
$("#skills").append( formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
$("#skills").append( formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
$("#skills").append( formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills [4]);
$("#skills").append( formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills [5]);
$("#skills").append( formattedSkill);
}

