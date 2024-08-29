# Turf Booking Website

This is a MERN (MongoDB, Express, React, Node.js) stack application for booking sports turfs. The platform allows users to search, book, and manage turf reservations with ease.

## Features

- User authentication with role-based access control (admin and user roles).
- Admins can create, update, and delete turfs.
- Users can view available turfs, make bookings, and manage their reservations.
- Real-time availability check to prevent double booking.
- Responsive design for both desktop and mobile devices.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or later)
- MongoDB

### Backend Setup

1. Clone the repository:
   ```bash
   https://github.com/Ammar-Amin/Turf-Booking-Web.git
   cd turf-booking-website
   ```
2. Install server dependencies:

```bash
npm install
```

3. Create a .env file in the root directory and add your MongoDB connection string and other environment variables:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the server:

```bash
npm run dev
```

### Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install client dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

## Usage

Once the server and client are running, open your browser and navigate to:

```bash
http://localhost:3000
```

- Admins can log in to manage turfs.
- Users can search for turfs, view availability, and make bookings.

## Live Link

You can view the live application here:
[Live](https://turf-time-web.onrender.com)

## Acknowledgement

This project was developed as part of an assignment given by **Blackcurrent Labs Pvt Ltd** after successfully clearing the interview. I would like to express my gratitude to the team at Blackcurrent Labs.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
