//Object for userinfo **Pointless but it demonstrates the list idea**
var user = [
    Name= "King Arthur",
    Born= "28/07/1992",
    Residence= "Somewhere, Greece",
    Phone= "+30 6900000009",
    military= "Fulfilled",
];

//This object is made to print the heading >> headings[i]: user[i] >> Name: King Arthur || Born: 28/07/1992 etc
var headings = [
    Name= "Name: ",
    Born= "Born: ",
    Residence= "Residence: ",
    Phone= "Phone: ",
    Military= "Military Obligations: ",
];

function about(){

    var i=0;
    document.getElementById("heading").innerText = "Contact Me";

    
    //Remove all content
    document.getElementById(`content1`).remove();

    //Create Table
    table = document.createElement(`table`);
    table.setAttribute(`id`,`table`);
    table.setAttribute(`class`,`table`);
    container.appendChild(table);

    for(let i=0;i<user.length;i++){

        //Create Row
        row = document.createElement(`tr`);
        row.setAttribute(`id`,`tr${i}`);
        row.setAttribute(`class`,`trow`);
        document.getElementById(`table`).appendChild(row);

        //Give Row a Heading first -- vertical table
        heading = document.createElement(`th`);
        heading.setAttribute(`id`,`th${i}`);
        heading.setAttribute(`class`,`theading`);
        document.getElementById(`tr${i}`).appendChild(heading);

        //Give Data to Row after heading
        data = document.createElement(`td`);
        data.setAttribute(`id`,`td${i}`);
        data.setAttribute(`class`,`tdata`);
        document.getElementById(`tr${i}`).appendChild(data);
        
        //Each td gets 1 value from the object (name birth etc)
        document.getElementById(`th${i}`).textContent = headings[i];
        document.getElementById(`td${i}`).textContent = user[i];
    }
}

// Other Method *Just for Demonstration*

//Used in Old toString() method to print content1.innerHTML = toString();
var fname= "King";
var lname =  "Arthur";
var date= "28/07/1992";
var residence= "Somewhere, Greece";
var phoneNum= "+30 6900000009";
var military= "Fulfilled";

function toString(){
    return(
        
        `<i class="fa fa-user" aria-hidden="true"></i>${fname} ${lname}<br>
        <i class="fa fa-birthday-cake" aria-hidden="true"></i> ${date}<br>
        <i class="fa fa-home" aria-hidden="true"></i> ${residence}<br>
        <i class="fa fa-mobile" aria-hidden="true"></i> ${phoneNum}<br>
        `
    )
}
