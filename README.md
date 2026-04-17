# 🚀 PhishGuard - Phishing Detection System

A full-stack DevOps project that provides real-time phishing URL detection with monitoring and visualization capabilities.

## 📋 Project Overview

PhishGuard is a containerized application built with Docker and Docker Compose that helps detect potentially malicious phishing URLs. It consists of:

- **Frontend**: Interactive web interface for URL scanning
- **Backend**: Express.js API for phishing detection logic
- **Database**: MongoDB for data persistence
- **Monitoring**: Prometheus for metrics collection
- **Visualization**: Grafana for metrics dashboards

## 🏗️ Architecture

### Components

#### Frontend (`/frontend`)
- **Technology**: HTML5, vanilla JavaScript, Nginx
- **Port**: 3002 (maps to container port 80)
- **Features**:
  - User-friendly URL input interface
  - Real-time scanning with loading animation
  - Color-coded results (green for safe, red for danger)
  - Gradient background with modern UI styling
  - Communicates with backend API via fetch

#### Backend (`/backend`)
- **Technology**: Node.js, Express.js, CORS enabled
- **Port**: 5001 (maps to container port 5000)
- **API Endpoints**:
  - `GET /` - Health check endpoint
  - `POST /check` - Phishing detection endpoint
- **Detection Logic**: Simple keyword-based detection (login, verify, bank, secure, account)
- **Dependencies**: express, cors

#### Database (`mongo`)
- **Image**: Official MongoDB image
- **Port**: 27017
- **Volume**: `mongo_data` for persistent storage
- **Status**: Configured but not yet integrated with backend

#### Monitoring (`prometheus`)
- **Image**: prom/prometheus
- **Port**: 9090
- **Purpose**: Metrics collection and time-series data storage

#### Visualization (`grafana`)
- **Image**: grafana/grafana
- **Port**: 3001 (maps to container port 3000)
- **Purpose**: Dashboard for visualizing Prometheus metrics

## 🚀 Getting Started

### Prerequisites
- Docker
- Docker Compose
- macOS, Linux, or Windows with Docker Desktop

### Installation & Running

1. Navigate to the project directory:
```bash
cd /Users/abeltesfaye/Desktop/DevOps-Jury-Project
```

2. Start all services:
```bash
docker-compose up --build
```

3. Access the application:
   - **Frontend**: http://localhost:3002
   - **Backend Health**: http://localhost:5001/
   - **Prometheus**: http://localhost:9090
   - **Grafana**: http://localhost:3001

### Stopping Services

```bash
docker-compose down
```

To remove volumes:
```bash
docker-compose down -v
```

## 📡 API Documentation

### Health Check
```
GET http://localhost:5001/
Response: "Backend Running + DB Connected ✅"
```

### Check URL for Phishing
```
POST http://localhost:5001/check
Content-Type: application/json

Request:
{
  "url": "https://example.com/login"
}

Response:
{
  "result": "🚨 Phishing Detected"
}
or
{
  "result": "✅ Safe URL"
}
```

## 📊 Monitoring & Observability

- **Prometheus** collects metrics from services
- **Grafana** provides visual dashboards for monitoring
- Configure data sources in Grafana to point to Prometheus

## 📁 Project Structure

```
DevOps-Jury-Project/
├── frontend/
│   ├── index.html (UI with phishing scanner)
│   └── Dockerfile (Nginx-based)
├── backend/
│   ├── app.js (Express server with API)
│   ├── package.json (Dependencies)
│   └── Dockerfile (Node.js-based)
├── docker-compose.yml (Service orchestration)
└── README.md (This file)
```

## 🔧 Service Dependencies

```
frontend → backend → mongo
         ↘         
           prometheus ← (metrics)
                      
           grafana (visualizes prometheus data)
```

## 🐳 Docker Configuration

### Frontend Dockerfile
- Base: `nginx:alpine`
- Copies `index.html` to Nginx web root

### Backend Dockerfile
- Base: `node:18`
- Installs dependencies via npm
- Exposes port 5000
- Runs `node app.js`

## 💡 Current Features

✅ URL-based phishing detection
✅ REST API with CORS support
✅ Docker containerization
✅ Docker Compose orchestration
✅ Monitoring infrastructure setup
✅ Modern UI with real-time feedback

## 🚧 Future Improvements

- [ ] Integrate MongoDB for storing scan history
- [ ] Enhance detection algorithm with machine learning
- [ ] Add user authentication
- [ ] Implement metrics collection in backend
- [ ] Create Grafana dashboards
- [ ] Add unit tests
- [ ] Implement CI/CD pipeline
- [ ] Add logging and error handling
- [ ] Rate limiting for API
- [ ] Environment configuration management

## 🔐 Security Notes

- CORS is enabled for frontend-backend communication
- Consider restricting CORS origin in production
- Input validation should be enhanced
- SQL injection protection needed if database is integrated
- Use environment variables for sensitive data

## 📝 License

This is a DevOps demonstration project.

---

**Last Updated**: April 17, 2026