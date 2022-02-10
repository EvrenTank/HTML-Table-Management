# HTML-Table-Management
My Solution to the HackerRank Question

Functionality:
-It has three fields Name, Mobile and  Email.
- Clicking on the Add Contact button should add the contact to the table.
- Before adding a contact, the following validations should occur:
    Name Should contain only alphabets and space. Should be less than or equal to 20 characters in         length.
    Mobile should contain only Numbers. Should be equal to 3 characters in length.
   
- Show an error div with id 'error' if there is any error in input format or if there is any empty field.
-  Valid contacts should get added sequentially in the table.
-  After adding a valid contact, all fields should be reset to empty.
-  Clicking on the Name heading in the table should sort it by ascending order of the contact name. Further clicks should alternately sort descending then ascending.
-  The search should begin as soon as an input is typed by the user in the search field. It should filter rows based on the mobile number given in the search field.
-  If there is no matching row for the search term, then the div with id 'noResult' should be made visible. It should be hidden otherwşse.
- Odd numbered data rows should have yellow color as the background color.
