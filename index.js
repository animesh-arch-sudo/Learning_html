function myFunction() {
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    city = document.getElementById("city").value;
    gender = document.getElementsByName("Gender").checked;

    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4= row.insertCell(3);
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML=gender;
    cell4.innerHTML=city
    
  }
