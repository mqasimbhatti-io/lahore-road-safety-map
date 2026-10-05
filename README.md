# Lahore Road Safety Map - Live Monitoring App

Real-time accident, road blockage, and construction detection map for Lahore.

## Features

✅ **Live Map** - Interactive map of Lahore with real-time incidents
✅ **Incident Types** - Accidents, Road Blockages, Construction Zones
✅ **User Reporting** - Submit incident reports with photos and location
✅ **Live Updates** - WebSocket real-time incident notifications
✅ **Admin Dashboard** - Verify and manage incidents
✅ **Severity Levels** - High, Medium, Low severity indicators
✅ **Area Search** - Filter incidents by Lahore neighborhoods
✅ **Mobile Responsive** - Works on phones, tablets, desktops

## Tech Stack

**Frontend:**
- Next.js 14
- React
- Leaflet Maps + OpenStreetMap
- Tailwind CSS
- Socket.io Client

**Backend:**
- Node.js + Express
- MongoDB
- Socket.io (Real-time)
- Multer (File uploads)
- JWT Auth

**Deployment:**
- Frontend: Vercel
- Backend: Render/Railway
- Database: MongoDB Atlas

## Project Structure

```
lahore-road-safety-map/
├── client/                 # Next.js frontend
│   ├── app/
│   ├── components/
│   ├── hooks/
│   └── public/
├── server/                 # Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   └── config/
└── docs/                   # Documentation
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repo
```bash
git clone https://github.com/mqasimbhatti-io/lahore-road-safety-map.git
cd lahore-road-safety-map
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables
```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

4. Start dev server
```bash
npm run dev
```

5. Open http://localhost:3000

## API Endpoints

### Incidents
- `GET /api/incidents` - Get all incidents
- `POST /api/incidents` - Create incident report
- `PUT /api/incidents/:id` - Update incident (admin)
- `DELETE /api/incidents/:id` - Delete incident (admin)

### Auth
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Admin
- `GET /api/admin/incidents` - Get all incidents for review
- `PUT /api/admin/incidents/:id/approve` - Approve incident
- `PUT /api/admin/incidents/:id/reject` - Reject incident

## Real-time Events (WebSocket)

- `incident:created` - New incident reported
- `incident:updated` - Incident status changed
- `incident:removed` - Incident resolved

## License

MIT
