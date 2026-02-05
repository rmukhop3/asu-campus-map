# ASU Campus Map

An interactive campus map for Arizona State University (Tempe campus) built with Google Maps JavaScript API.

## Features

- 🗺️ Interactive Google Maps with custom ASU styling
- 📍 Campus locations: libraries, buildings, dining, recreation, parking
- 🔍 Search functionality for buildings and locations
- 🚶 Walking directions between locations
- 🔥 Heatmap visualization for campus activity
- 📱 Responsive design for mobile and desktop

## Setup

### 1. Get a Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a new project or select an existing one
3. Enable these APIs:
   - Maps JavaScript API
   - Directions API
   - Places API
4. Create an API key under "Credentials"
5. (Recommended) Restrict the API key to your domain for security

### 2. Configure Environment Variables

Copy the example environment file and add your API key:

```bash
cp .env.example .env
```

Edit `.env` and replace `YOUR_API_KEY_HERE` with your actual Google Maps API key:

```
GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 3. Run the Development Server

```bash
python3 server.py
```

Then open http://localhost:8000 in your browser.

## Project Structure

```
├── campus-map.html    # Main application file
├── server.py          # Development server (injects API key)
├── .env               # Your API key (do not commit!)
├── .env.example       # Template for environment variables
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Security Notes

⚠️ **Never commit your `.env` file to version control!**

- The `.gitignore` is configured to exclude `.env` files
- Use `.env.example` as a template for others to set up their own keys
- Consider restricting your API key in Google Cloud Console

## License

MIT
