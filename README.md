# Task Description

This project consists of two tasks: a UI task and an API task.

## UI Task
- The UI consists of a layout with three different components.
- Users can resize the components by dragging them from any side.
- The neighbor components expand or shrink based on resizing operations.
- The layout is responsive on all laptop devices.
- Open-source library used:  react-draagble and re-resizable,

## API Task
- API to add/edit data in the components.
- Two buttons: Add and Update.
  - Add: Clears any existing data and allows the user to add new data (creates a new entry).
  - Update: Updates the existing data (updates the entry).
- Count API shows the number of times the user has called the Add and Update APIs.

## Deployment
Both the UI and API tasks are deployed and can be accessed at  https://joyful-pixie-e695d6.netlify.app/

## Execution Time
- Add API: 78ms.
- Update API: 82ms.
- Count API: 79ms.

## Database
- Database: DataNeuron
- Collection/Table: Item and Count

## Clean Code and Comments
The code is clean and well-commented for easy understanding and maintenance.

## Validations
Basic validations are implemented where needed.

## Technologies Used
- Frontend: ReactJS, Mui
- Backend: Node.js, Express, TypeScript
- Database: MongoDB,

## Setup Instructions
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the frontend and backend servers using `npm start`.

## Folder Structure
- `frontend/`: Contains the ReactJS frontend code.
- `backend/`: Contains the Node.js backend code.

