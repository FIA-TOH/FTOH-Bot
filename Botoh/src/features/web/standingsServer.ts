import http from "http";
import fs from "fs";
import path from "path";

const STANDINGS_FILE = path.resolve(__dirname, "..", "..", "..", "standings.html");
const DEFAULT_PORT = Number(process.env.STANDINGS_PORT) || 3000;

let clients: http.ServerResponse[] = [];

function sendSseEvent(res: http.ServerResponse, data: string) {
  res.write(`data: ${data}\n\n`);
}

export function startStandingsServer(port = DEFAULT_PORT) {
  // Ensure file exists initially (create empty if missing)
  if (!fs.existsSync(STANDINGS_FILE)) {
    try {
      fs.writeFileSync(STANDINGS_FILE, "<!-- standings not yet generated -->", { encoding: "utf8" });
    } catch (err) {
      console.error("Could not create initial standings.html:", err);
    }
  }

  const server = http.createServer((req, res) => {
    if (!req.url) {
      res.statusCode = 400;
      res.end("Bad request");
      return;
    }

    // SSE endpoint
    if (req.url === "/events") {
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Access-Control-Allow-Origin": "*",
      });
      res.write("\n");

      // add to clients
      clients.push(res);

      // remove on close
      req.on("close", () => {
        clients = clients.filter((c) => c !== res);
      });

      return;
    }

    // Serve file at /standings.html or root
    if (req.url === "/" || req.url === "/standings" || req.url === "/standings.html") {
      const filePath = STANDINGS_FILE;
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error reading standings file");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html", "Access-Control-Allow-Origin": "*" });
        res.end(data);
      });
      return;
    }

    // static fallback: 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  });

  // Watch the file and notify clients on changes
  try {
    fs.watchFile(STANDINGS_FILE, { interval: 1000 }, (curr, prev) => {
      if (curr.mtimeMs !== prev.mtimeMs) {
        // notify connected clients
        clients.forEach((c) => {
          try {
            sendSseEvent(c, "update");
          } catch (e) {
            // ignore broken clients
          }
        });
      }
    });
  } catch (err) {
    console.error("Failed to watch standings file:", err);
  }

  server.listen(port, () => {
    console.log(`Standings server running: http://localhost:${port}/standings.html`);
  });

  // graceful shutdown helper
  return {
    close: () => {
      try {
        fs.unwatchFile(STANDINGS_FILE);
        server.close();
        clients = [];
      } catch (err) {
        /* ignore */
      }
    },
  };
}