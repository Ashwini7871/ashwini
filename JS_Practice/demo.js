/*function create()
{
content = document.getElementById("input_text").value; //Mukilan
element = document.createElement("p") //இங்கே <p></p> வந்திருக்கும்.
our_data = document.createTextNode(content); //இங்கே நம்முடைய text
element.appendChild(our_data); // (<p> </p>).appendChild("Mukilan");//
// <p> Mukilan </p>
mydiv = document.getElementById("mydiv");
mydiv.appendChild(element); //<div id="mydiv"> <p> Mukilan </p></div>
}*/

function create()
{
content = document.getElementById("input_text").value; //Mukilan
element = document.createElement("p") //இங்கே <p></p> வந்திருக்கும்.
our_data = document.createTextNode(content); //இங்கே நம்முடைய text
element.appendChild(our_data); // (<p> </p>).appendChild("Mukilan");//
// <p> Mukilan </p>
mydiv = document.getElementById("mydiv");
mydiv.appendChild(element); //<div id="mydiv"> <p> Mukilan </p></div>
}