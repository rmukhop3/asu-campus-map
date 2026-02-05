#!/usr/bin/env python3
"""
Simple development server that injects environment variables into the HTML.
Run with: python3 server.py
Then open: http://localhost:8000
"""

import http.server
import socketserver
import os
from pathlib import Path

PORT = 8080

def load_env():
    """Load environment variables from .env file."""
    env_vars = {}
    env_file = Path(__file__).parent / '.env'
    
    if env_file.exists():
        with open(env_file, 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, value = line.split('=', 1)
                    env_vars[key.strip()] = value.strip()
    
    # Also check actual environment variables (they take precedence)
    for key in env_vars:
        if key in os.environ:
            env_vars[key] = os.environ[key]
    
    return env_vars


# Load env vars once at module level
ENV_VARS = load_env()

class EnvInjectingHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP handler that injects environment variables into HTML files."""
    
    def do_GET(self):
        # Serve campus-map.html for root path
        if self.path == '/':
            self.path = '/campus-map.html'
        
        # Check if requesting an HTML or JS file that needs env injection
        if self.path.endswith('.html') or self.path.endswith('.js'):
            self.serve_file_with_env()
        else:
            super().do_GET()
    
    def serve_file_with_env(self):
        """Serve HTML/JS file with environment variables injected."""
        try:
            file_path = Path(__file__).parent / self.path.lstrip('/')
            
            if not file_path.exists():
                self.send_error(404, "File not found")
                return
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Inject environment variables
            api_key = ENV_VARS.get('GOOGLE_MAPS_API_KEY', 'YOUR_API_KEY')
            
            # Replace the placeholder in the file
            content = content.replace(
                "__ENV_GOOGLE_MAPS_API_KEY__",
                api_key
            )
            
            # Determine content type
            content_type = 'text/html' if self.path.endswith('.html') else 'application/javascript'
            
            # Send response
            self.send_response(200)
            self.send_header('Content-type', f'{content_type}; charset=utf-8')
            self.send_header('Content-Length', len(content.encode('utf-8')))
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
            self.end_headers()
            self.wfile.write(content.encode('utf-8'))
            
        except Exception as e:
            self.send_error(500, str(e))


def main():
    os.chdir(Path(__file__).parent)
    
    env_vars = load_env()
    api_key = env_vars.get('GOOGLE_MAPS_API_KEY', 'NOT SET')
    
    print(f"\n🗺️  ASU Campus Map Development Server")
    print(f"{'=' * 40}")
    print(f"📍 Server running at: http://localhost:{PORT}")
    print(f"🔑 API Key loaded: {'✅ Yes' if api_key != 'NOT SET' and api_key != 'YOUR_API_KEY_HERE' else '❌ No (check .env file)'}")
    print(f"{'=' * 40}")
    print(f"Press Ctrl+C to stop the server\n")
    
    with socketserver.TCPServer(("", PORT), EnvInjectingHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\nServer stopped.")


if __name__ == "__main__":
    main()
