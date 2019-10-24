//contact us form sublission in about page START
function contactUs() {
  //save data from the form fields in the JS object
  let data1 = {
    name: document.getElementById("Name").value,
    email: document.getElementById("Email").value,
    message: document.getElementById("Message").value
  }
  //show information from form in console
  console.log(data1);
  //display confirmation that form submitted
  document.getElementById("answer").innerHTML = (data1.name + ", thank you for submittin our form");

  //add information from the form to table
  let tableForm = document.getElementById("tableForm");
  let  row = tableForm.insertRow(1),
    name = row.insertCell(0),
    email = row.insertCell(1),
    message = row.insertCell(2);
  name.innerHTML = (data1.name);
  email.innerHTML = (data1.email);
  message.innerHTML = (data1.message);
  //create headers for the table


  //convert data to the JSON file
  myJSON = JSON.stringify(data1);
  console.log(myJSON);

  //sent data to server
  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
  xmlhttp.open("POST", "http://127.0.0.1:8000/MangoAbout/");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(myJSON);
  //save data to local storage
  localStorage.setItem("testJSON", myJSON);
}
//attempt to retrive data from the local storage - IT IS NOT WORKING
// text = localStorage.getItem("testJSON");
// obj = JSON.parse(text);
// console.log(obj);
// document.getElementById("demo").innerHTML = obj.name;

//testing GET method to retrive data from server

function getData() {
  var Http = new XMLHttpRequest();
  var url = 'http://127.0.0.1:8000/MangoAbout/?limit=10&ordering=email&search=';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    var checkData = JSON.parse(Http.responseText);
    console.log(checkData);

    //List each item in the array - version 3 working
    checkData.forEach(showData);
    function showData(item, index) {
      const pe = document.createElement("p");
      pe.innerHTML = ("Id: " + index + "<br>Email: " + item.email + "<br>message: " + item.message + "<br>name: " + item.name);
      document.querySelector('#demo').append(pe);
    }
  }
  // keys for the array elements: item.body, item.id, item.title, item.userId
}
//function to recieve data from learning server
function getTestData(){
  //testing GET method to retrive data from server
  const Http = new XMLHttpRequest();
  const url = 'https://jsonplaceholder.typicode.com/posts';
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    var checkData = JSON.parse(Http.responseText);
    console.log(checkData);

    //List each item in the array - version 3 working
    checkData.forEach(showData);
    function showData(item, index) {
      const pe = document.createElement("p");
      pe.innerHTML = ("Id: " + index + "<br>Body: " + item.body + "<br>Item Id: " + item.id + "<br>Title: " + item.title + "<br>User Id: " + item.userId);
      document.querySelector('#demoTest').append(pe);
    }
    // keys for the array elements: item.body, item.id, item.title, item.userId
  }
}
//***display data from database in the table START
//projData is located in file data.js
// ****Create table START******
// var TableContactForm = '';
// var rows = 5;
// var columns = 3;
// for (var r = 0; r < rows; r++){
//   TableContactForm += '<tr>';
//   for (var c = 1; c <= columns; c++){
//     TableContactForm += '<td>' + c + '</td>';
//   }
//   TableContactForm += '</tr>';
//   TableContactForm += '<tr>';
//   for (var c = 1; c <= columns; c++){
//     TableContactForm += '<td>' + c + '</td>';
//   }
//   TableContactForm += '</tr>';
// }
// document.getElementById("tableContent").innerHTML = document.write('<table id="tableProject">' + TableContactForm + '</table>');

// ****Create table FINISH******
//***display data from database in the table END

var dataP = [
  {
    "Id": 421,
    "Project name": "Test1",
    "Year": 2011,
    "Start date": "01-01-2011",
    "End date": "",
    "Category": "",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "800 egz."
  },
  {
    "Id": 684,
    "Project name": "In this field will be project name",
    "Year": 2012,
    "Start date": "01-09-2012",
    "End date": "01-12-2012",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "angielski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "800 egz."
  },
  {
    "Id": 130,
    "Project name": "In this field will be project name",
    "Year": 2014,
    "Start date": "01-12-2014",
    "End date": "",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "750 egz"
  },
  {
    "Id": 399,
    "Project name": "In this field will be project name",
    "Year": 2008,
    "Start date": "01-01-2008",
    "End date": "",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski, angielski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "700 szt."
  },
  {
    "Id": 468,
    "Project name": "In this field will be project name",
    "Year": 2010,
    "Start date": "01-11-2010",
    "End date": "",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski, angielski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "700 egzemplarzy PUBLIKACJA BEZPŁATNA"
  },
  {
    "Id": 62,
    "Project name": "In this field will be project name",
    "Year": 2010,
    "Start date": "01-11-2010",
    "End date": "01-12-2010",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "700 egzemplarzy"
  },
  {
    "Id": 357,
    "Project name": "In this field will be project name",
    "Year": 2008,
    "Start date": "01-01-2008",
    "End date": "",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "angielski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "600 szt."
  },
  {
    "Id": 57,
    "Project name": "In this field will be project name",
    "Year": 2009,
    "Start date": "01-01-2009",
    "End date": "",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "angielski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "600 szt."
  },
  {
    "Id": 47,
    "Project name": "In this field will be project name",
    "Year": 2011,
    "Start date": "01-09-2011",
    "End date": "01-12-2011",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "angielski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "600 egz."
  },
  {
    "Id": 122,
    "Project name": "In this field will be project name",
    "Year": 2011,
    "Start date": "01-01-2011",
    "End date": "",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "600 egz."
  },
  {
    "Id": 708,
    "Project name": "In this field will be project name",
    "Year": 2008,
    "Start date": "01-01-2008",
    "End date": "",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "angielski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "Organizer 1, Organizer 2, Organizer 3",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "5000 szt."
  },
  {
    "Id": 703,
    "Project name": "In this field will be project name",
    "Year": 2006,
    "Start date": "01-01-2006",
    "End date": "",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski i angielski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "Organizer 1, Organizer 2, Organizer 3",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "5000 egzemplarzy Publikacja bezpłatna"
  },
  {
    "Id": 26,
    "Project name": "In this field will be project name",
    "Year": 2007,
    "Start date": "01-01-2007",
    "End date": "",
    "Category": "",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski, niemiecki",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "Organizer 1, Organizer 2, Organizer 3",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "500 szt."
  },
  {
    "Id": 675,
    "Project name": "In this field will be project name",
    "Year": 2007,
    "Start date": "01-01-2007",
    "End date": "",
    "Category": "",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "Organizer 1, Organizer 2, Organizer 3",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "500 szt."
  },
  {
    "Id": 8,
    "Project name": "In this field will be project name",
    "Year": 2007,
    "Start date": "01-01-2007",
    "End date": "",
    "Category": "",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski, angielski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "Organizer 1, Organizer 2, Organizer 3",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "500 szt."
  },
  {
    "Id": 470,
    "Project name": "In this field will be project name",
    "Year": 2008,
    "Start date": "01-01-2008",
    "End date": "",
    "Category": "",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "500 szt."
  },
  {
    "Id": 704,
    "Project name": "In this field will be project name",
    "Year": 2006,
    "Start date": "01-01-2006",
    "End date": "",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "500 egzemplarzy Publikacja bezpłatna"
  },
  {
    "Id": 107,
    "Project name": "In this field will be project name",
    "Year": 2010,
    "Start date": "01-03-2010",
    "End date": "",
    "Category": "publikacja",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "500 egzemplarzy"
  },
  {
    "Id": 601,
    "Project name": "In this field will be project name",
    "Year": 2006,
    "Start date": "01-01-2006",
    "End date": "",
    "Category": "",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "polski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "500 egzemplarzy"
  },
  {
    "Id": 370,
    "Project name": "In this field will be project name",
    "Year": 2005,
    "Start date": "01-01-2005",
    "End date": "",
    "Category": "",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "500 egz."
  },
  {
    "Id": 546,
    "Project name": "In this field will be project name",
    "Year": 2005,
    "Start date": "01-01-2005",
    "End date": "",
    "Category": "",
    "Description": "Here will be description to the project.\nMain goals:\ngoal 1\ngoal 2\nMore description related to the project. Some inpartant information and some not wery inmportant info.\nAlso Here will be some milistones and other interesting comments. Just need to add here more text with different formatings.\nMaybe will add another list:\nlist item 1\nlist item 2\nlist item 3",
    "Folder": "",
    "Project Manager": "Project Manager 1\nProject Manager 2, Project Manager 3",
    "Type": "",
    "Language": "angielski",
    "Participants": "",
    "Attendance": "",
    "Financing": "",
    "Organizers": "",
    "Cooperation": "Cooperator name 1, Cooperator name 2",
    "Experts": "Expert 1, Expert 2, Expert 3",
    "Guests": "Guest 1, guest 2",
    "Circulation": "500 egz."
  }
];

var projData = JSON.parse(JSON.stringify(dataP));

//display datat from Object in console
//console.log(data);

//Add data to search page when page is loading start this function
window.onload = function () {
  //create table for each element in array
  let tableForm = document.getElementById("tableProject"),
    row = tableForm.insertRow(1),
    name = row.insertCell(0),
    email = row.insertCell(1),
    message = row.insertCell(2);
  name.innerHTML = (dataP[0].Id);
  email.innerHTML = (dataP[0].Year);
  message.innerHTML = (dataP[0].Description);
}