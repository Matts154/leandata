<template>
  <div class="about">
    <h1>LeanData Take Home Project - Details</h1>
    <strong>Time to complete: 24 hours after receiving project details</strong>

    <h2>Summary</h2>

    <p>Create a web application that allows you to manage users and expenses for each user. You can use any front-end framework and library to complete this assignment.</p>

    <h2>Required Functionality</h2>

    <h3>User Management:</h3>

    <h4>Create a section of the application that allows you to create, edit, and delete users</h4>
    <p>When adding or editing a user, you will need:</p>
    <ul>
      <li>Standard input field to enter the user's First Name</li>
      <li>Standard input field to enter the user's Last Name</li>
      <li>Both name fields must be filled out before being able to save the user</li>
      <li>Multiple users can have the same name, but each user must still be considered unique</li>
      <li>All added users must be displayed in a table</li>
      <li>In the Users table, there should also be a read-only column that displays the total cost of all expenses for a user</li>
      <li>When editing a user, changes should also be reflected in the expenses section for related records</li>
      <li>When deleting a user, all related expenses should also be deleted, and the "Total Cost by Category" section should also be updated</li>
    </ul>

    <h3>Expense Management:</h3>

    <h4>Create a section of the application that allows you to create, edit, and delete expenses for users created in User Management</h4>
    <p>When adding or editing an expense, you will need:</p>
    <ul>
      <li>Dropdown to select a user created in User Management</li>
      <li>Dropdown to select a category</li>
      <li>This can be a static set of options: Meals, Travel, Software</li>
      <li>Input/Textarea field to enter a description for the expense</li>
      <li>Number input field to enter the cost of the expense</li>
      <li>All fields must be selected and filled out before being able to save the expense</li>
      <li>All added expenses must be displayed in a table</li>
      <li>When editing/deleting an expense, all related data in the "Users" and "Total Cost by Category" sections should also be updated</li>
      <li>Total Cost by Category</li>
    </ul>

    <p>Create a section of the application that shows the total cost of expenses for each category</p>
    <p>This page will not have user-interactable elements and will be treated as a view-only informational page</p>
    
    <h3>Additional Notes</h3>

    <p>You can create all 3 parts of the application on one page or separate pages. Either implementation will be evaluated the same.</p>
    <p>There is a strong emphasis on how you structure the data models in this project.</p>
    <p>Consider the time complexity of each action and operation you are able to perform on the page. Constant time complexity for certain user actions should be achievable.</p>
    <p>The project should be designed to work with a very large data set for both user and expense objects.</p>
    <p>You must include a README file that includes: how to run the project, a brief summary of the project, and any design/implementation tradeoffs made (where applicable)</p>
    <p>We will also be looking at the code structure and how components/files are separated and organized.</p>
    <p>Lastly, we do consider UI/UX as a small part of what we are evaluating. You are free to use any styling and component libraries to ensure a clean project presentation.</p>
  </div>
</template>

<style>

</style>
