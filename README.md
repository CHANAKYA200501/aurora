Aurora 2.0 – Beyond the Horizon

AI-Powered Mining Activity Monitoring using Sentinel-2 & Geospatial AI

⸻

Overview

Aurora 2.0 is an AI-driven geospatial monitoring system designed to detect, track, and analyze mining excavation activities using Sentinel-2 satellite imagery and Machine Learning–based change detection.

The platform enables near-real-time surveillance of mining operations, ensuring legal compliance, environmental protection, and data-driven regulatory enforcement, with a special focus on detecting illegal excavation in No-Go zones.

This project is developed as part of Aurora 2.0 – Beyond the Horizon Hackathon, in collaboration with SAC-ISRO & IIT Dharwad.

⸻

Problem Statement

Mining activities often expand gradually and are difficult to monitor using traditional manual surveys. Existing systems: • Are time-consuming • Fail to distinguish seasonal changes from excavation • Do not scale well for large geographic regions

There is a need for a scalable, automated, and intelligent monitoring system that can: • Detect excavation accurately • Monitor excavation growth over time • Identify violations inside protected No-Go zones

⸻

Our Solution

Aurora 2.0 introduces a machine learning–enabled, satellite-based monitoring framework that: • Analyzes Sentinel-2 multispectral time-series imagery • Learns excavation patterns adaptively (no fixed thresholds) • Detects and quantifies progressive mining activity • Highlights No-Go zone violations • Presents insights via an interactive web dashboard

⸻

Key Features • ML-Based Excavation Detection Adaptive learning of excavation signatures from satellite imagery. • No-Go Zone Violation Detection Automatic identification of excavation inside protected areas. • Excavation Growth Analysis Time-series visualization of cumulative excavation area. • Interactive Map Dashboard Overlay of mines, no-go zones, excavation masks, and violations. • ⚡ Near-Real-Time Monitoring Designed to ingest new satellite data as it becomes available.

image
What is ML Excavation?

ML Excavation refers to the use of machine learning models to automatically detect land surface disturbances caused by mining by analyzing spectral and temporal changes in satellite imagery.

The model: • Learns excavation patterns from historical data • Differentiates excavation from seasonal vegetation change • Produces excavation probability maps and growth metrics

⸻

Tech Stack

Frontend • React.js • React-Leaflet • Leaflet.js • Axios • Chart.js / Recharts (Analytics)

Backend • Node.js • Express.js • GeoJSON APIs • CORS

Data & ML • Sentinel-2 Level-2A imagery • Spectral indices (NDVI, SWIR, etc.) • Time-series change detection • Mock ML outputs (extendable to real models)

⸻

Project Structure image

Dashboard Capabilities • View legal mine boundaries • Visualize no-go zones • See ML-detected excavation overlays • Highlight no-go zone violations • Track excavation growth over time • Toggle layers interactively

⸻

Real-World Impact • Enables transparent mining oversight • Reduces dependency on manual field inspections • Protects ecologically sensitive regions • Scales to nationwide monitoring • Supports sustainable and responsible mining

⸻

Hackathon Relevance

This solution aligns directly with: • SAC-ISRO & VEDAS operational needs • Real-world Earth observation challenges • Scalable geospatial AI deployment

⸻

Future Scope • Integration of real ML models (Autoencoders / U-Net) • Automated Sentinel-2 ingestion via STAC • Alert system for early violation detection • UAV + Satellite data fusion • Nationwide deployment on VEDAS platform

⸻

Author

TUSHAR SHARMA STUDENT CHANDIGARH UNIVERSITY (PUNJAB)

⸻

📜 License

This project is developed for academic and hackathon purposes.

⸻

“The best innovations begin when data meets the real world.”
