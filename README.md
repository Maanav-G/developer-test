# New Developer Test: Wish List For Santa

For this assignment, I built a basic application using React and Redux that allows users to add items (strings) to a "wish list" and then submit the list (to Santa).

# Overview 

## Actions
The following additions were made in `reducer.jsx` for each of the following cases:
* `ADD_ITEM`: `[...state.wishList, action.payload]` Allowing us to append the action's payload to the wishlist (the item we wish to add)
* `DELETE_ITEM`: `state.wishList.filter(item => item !== action.payload)` Returns all items, except the action's payload item (the item we wish to remove)

## Functions
The following functions were implemented in `App.jsx` to handle the different actions:
* `handleAdd()`: Checks for simple input validation (empty or duplicate string), and then adds the current value of `userInput` to wishlist by calling `props.addItem(userInput)`
* `handleDelete(listItem)`: Simply deletes the item `listItem` from the wishlist by calling `props.deleteItem(listItem)`
* `handleSubmit()`: Checks if the list is not empty and submits the current state of the wishlist to 'Santa', which does not call any action, instead just pops an alert, and clears the list by calling `handleDelete(listItem)` using a simple for loop.

## Elements
The following is how each element functions:
* `<ItemList>`: Calls `.map()` on the current state of the wishlist, which then wraps each item in `<li>` tag
* Each item in list `<li>`: Onclick calls the `handleDelete(listItem)`, where `listItem` parameter is the item name 
* `<ItemInput>`: Onchange, constantly, updates the user input value using `setUserInput`, with the current string inputted
* Add `<Button>`: Onclick calls the `handleAdd()`
* Submit `<Button>`: Onclick calls the `handleSubmit()`


## Styling

To stylize this application, I imported `Styled-Components` as it was marked as preferred in the guidelines. Using which, I created the following elements:
* Container (div) - This is the main container of the wishlist and holds all the sub-elements
  * Title (h3) - This is the header element for the main title ("MY WISHLIST")
  * WishList (div) - This element holds all the items in the wish lists 
    * ItemList (div) - This is a element within `WishList`, and holds the actual list of elements 
  * ItemInput (input) - This is the input box for the user to enter their item.
  * Button (button) - This element was created for the two buttons, where, the element takes a unique value for width and height 


## Dimension Deduction

<img src="./src/assets/dimensionDeduction.svg" width="100%">

Based on the initial dimensions given of the width and height of the main container, I analyzed the screenshot of the demo based on relative sizes, and deduced the dimensions of all the other elements. Where for the width of each element I did: 400*((width of element in picture)/(width of container in picture)), and applied a similar formula for the height.

## Color Palette 
<img src="./src/assets/colorPalette.svg" width="100%">

Using a simple color picker tool, I deduced the 3 different colours used in the demo to ensure accuracy.

## Assumptions Made
* Implemented different `alerts` for each type of invalid input (empty string and duplicate item). 
* For submit, I would've preferred to create a new `CLEAR_ALL` action instead of implementing a for loop that calls `deleteItem(item)` for each item on the list, where the `CLEAR_ALL` action would just return a empty list. However, based on the guidelines I understood that all code should be written inside of `App.jsx`
* Implemented an `alert` when the user attempts to submit an empty list - However, no further actions are taken after, and the user is allowed to continue from where they last left off. 


# Provided Instructions
## Demo
![](src/assets/demo.gif)

## Requirements
  * Clone the repository, and run `npm install` or  `yarn add` to set up your local environemnt.  When you are finished with your solution, push it to Github (please avoid including references to Halo in the repo title), and email Kevin to let him know you are finished so your work can be reviewed.

  <br/>

  * Items may not be blank strings nor duplicates of an item already on the list.
  * Clicking on an item in the list should remove it from the list.
  * Clicking the submit button should clear the wish list and create an alert that says 'Wish list submitted to Santa!'
  * User cannot submit if their wish list is empty.

  <br/>  

  * Please complete the Redux reducer in redux > reducer.jsx.  (Adding and deleting items from the list should be handled by Redux.)  Do not add any new actions, as this is a part of the challenge.
  * Everything else regarding Redux has been done for you (i.e. store, actions, etc.) and can be found in the "redux" folder

  <br/>

  * Please give a reasonable effort to closely match the styling in the demo.  This task is meant to test your ability to create accurate, responsive components.  As a head start, the inner container's dimensions are 400px x 540px.  You do not need to worry about the font-family.


## Guidelines
  * Aside from styling and reducer.jsx, all code should be written inside of App.jsx.
  * React hooks are preferred to class components if you are comfortable with them.  If not, that is okay, too.
  * Use of Styled-Components is preferred, though you may use any other styling libraries (or none) that you are more comfortable with.

  <br/>

  * Make sure to write code that you would be comfortable contributing in a professional setting.  Cleanliness and maintainability are just as important as making sure that it actually works.
  * In total, this assignment shouldn't take more than an hour or two to complete.  It's just a quick way to get a better feel for where you are at, so don't spend your entire day on it.
  * If you get stuck, feel free to leave comments in the code explaining how you would go about completing that part instead.
