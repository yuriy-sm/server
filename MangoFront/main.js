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
}

//function to recieve data from learning server
function getData(){
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
      document.querySelector('#demo').append(pe);
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