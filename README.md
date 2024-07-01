# Houseplant Inventory Manager
This web application is designed to help you keep track of your houseplants. You can add, edit, and view details about each plant.

## Features
- **Add a Plant**: Add new plants to your inventory.
- **Edit Plant Details**: Edit existing plant information.

## Technologies Used

- **Frontend**: React
- **Backend**: Flask
- **Database**: SQLite
- **API Client**: Axios

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Python 3.x
- Node.js
- npm (Node Package Manager)
- Flask
- SQLite

### Installation

1. **Clone the Repository**
sh
git clone https://github.com/epin0603/houseplant-inventory-manager.git
cd houseplant-inventory-manager

2. **Set Up the Backend**
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
source venv/bin/activate  # On macOS/Linux
pip install -r requirements.txt
flask run

3. **Set Up the Frontend**
cd ../frontend
npm install
npm start

### Running the Application
- Start the venv by running "source venv/Scripts/activate" in the main directory.
- Start the backend server by running "flask run" in the backend directory.
- Start the frontend server by running "npm start" in the frontend directory.
- Open your browser and navigate to http://localhost:3000 to view the application.

### API Endpoints
- `GET /plants` - Retrieve all plants
- `GET /plants/:id` - Retrieve a specific plant by ID
- `POST /plants` - Add a new plant
- `PUT /plants/:id` - Update an existing plant by ID

### Usage
1. **Add a Plant**
- Navigate to the "Add Plant" page.
- Fill in the plant details and click the "Submit" button.

2. **Edit a Plant**
- Navigate to the plant's details page.
- Click the "Edit" button.
- Modify the details and click the "Update Plant" button.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
If you have any questions or suggestions, please feel free to contact me at epin0603@outlook.com.

## Future Enhancements
- Add a login system to host the web application on the cloud and allow easy access to anyone.
- Improve the UI and UX to make it more appealing.
- Change the image URL feature to allow people to upload their own photos from their device.