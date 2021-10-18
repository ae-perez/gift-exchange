const names = ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan'];

var assign = [];
var index = -1;

function pair() {
  //loop through the names array
  for (let i = 0; i < names.length; i++) {
    let x = assign.indexOf(names[index]);

    //whileeeeeee {the index value equals -1 OR index value euqals i value OR the value is not found in the assigned array}
    while (index == -1 || index == i || assign.indexOf(names[index]) != -1) {
      index = Math.floor(Math.random() * names.length);
    }
    assign.push(names[index]);
  }

  display();
}

function display() {
  for (let i = 0; i < names.length; i++) {
    //you could implement html code in the below lines
    console.log(`${names[i]} gives to ${assign[i]}`);
  }
}

pair();

/*Notes:
- names array was declared constant because we won't be reassigned --> if reassigning I'd just .slice() values into another array
    *side-note: if working on a website, it would probably be best to develop a button feature to allow a user to input their own value of names

- I have developed two functions for this problem (keeping a UI design in mind -- to keep everything clean)
    * first function --> pair(), this function takes a value from names, that is not equal to itself and is selected randomly to then be pushed to the assign array
    * once looping is complete, the display() function is called
    
    * second function --> display(), this function just takes the values of names and assign and displays them to the console. However with UI in mind, one could easily manipulate the display function
    to call upon html and display it on a webpage

*/
