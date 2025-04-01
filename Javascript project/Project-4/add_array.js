      //  Add Items to Array 
      // Write a JavaScript program to add items to a blank array and display them.
      
      // Start with an empty array
        let myArray = [];

        // Function to add item to array
        function addItem() {
            // Get value from input box
            let item = document.getElementById("inputBox").value;
            
            // Add item to array if not empty 
            if (item !== "") {
                myArray.push(item);
                // Clear input box after adding
                document.getElementById("inputBox").value = "";
            }
        }

        // Function to display array items
        function displayItems() {
            // Get the result paragraph
            let result = document.getElementById("result");
            
            // Check if array is empty
            if (myArray.length === 0) {
                result.innerHTML = "Array is empty!";
            } else {
                // Display array items
                result.innerHTML = "Array items: " + myArray.join(", ");
            }
        }