# Bounty Board App

Bounty Board App is a web application for managing and displaying information about characters from various pirate crews in the One Piece world.

## Features

- User authentication and authorization
- CRUD operations for managing characters
- Dynamic image selection based on character names

1. View Characters
- Home Page (/characters): Upon accessing the home page, users can view a list of characters from various pirate crews.
- Crew Selection: Users can filter characters by selecting a specific crew from the dropdown menu.
2. View Character Details
- Character Details (/characters/:id): By clicking on a specific character, users can view detailed information about that character, including their name, bounty, crew affiliation, and whether they have a Devil Fruit power.
3. Add a New Character
- New Character Page (/characters/new): Users can navigate to a page where they can add a new character to the Bounty Board.
- Form Input: Users can enter the name, bounty, select a crew, and specify whether the character has a Devil Fruit power.
- Submit Button: Clicking the "Add Character" button submits the form, adding the new character to the Bounty Board.
4. Update a Character
- Edit Character Page (/characters/:id/edit): Users can navigate to a page where they can edit the details of an existing character.
- Form Input: Users can modify the name, bounty, crew, and Devil Fruit power status.
- Submit Button: Clicking the "Update Character" button submits the form, updating the character's information.
5. Delete a Character
- Character Details (/characters/:id): Users can delete a character by clicking the "Delete" button.
- Confirmation Alert: After clicking "Delete," a confirmation alert appears, and upon confirmation, the character is removed from the Bounty Board.
6. Cancel Actions
- Cancel Button: Users can cancel the addition or modification of a character by clicking the "Cancel" button, redirecting them to the home page or the character details page, respectively.
7. Navigation
- Navigation Links: Users can navigate between pages using navigation links (e.g., from the home page to a specific character's details page or the new character page).
8. User Feedback
- Alerts: Users receive alerts for successful actions (e.g., adding, updating, or deleting a character).