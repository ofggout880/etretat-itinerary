# Local Development Server Port Constraint

When starting a local development server (e.g., via `python3 -m http.server` or `npm`), you MUST strictly use port **8080**.

**Do not use fallback ports like 8081 or 3000.**

If port 8080 is currently in use:
1. Identify the background task or process holding the port.
2. Stop/kill that process.
3. Start your new server on port 8080.

This is critical because the project's Google Maps API key restrictions are strictly bound to `http://localhost:8080/*`. Any other port will result in a blocked API request (grey map error).
