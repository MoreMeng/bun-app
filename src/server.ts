import { readFileSync } from "fs";
import { serve } from "bun";

// Read and parse the configuration file
const configFile = readFileSync("config.json", "utf8");
const config = JSON.parse(configFile);

const port = config.port || 3000;
const message = config.message || "Hello, World!";

const server = serve({
  fetch(req: Request): Response {
    const serverName = req.headers.get("host") || "Unknown";
    return new Response(`Server Name: ${serverName}\nMessage: ${message}`);
  },
  port: Number(port),
});

console.log(`
    ███████████                           █████   ███   █████            █████             █████
    ░░███░░░░░███                         ░░███   ░███  ░░███            ░░███             ░░███
    ░███    ░███ █████ ████ ████████      ░███   ░███   ░███   ██████   ███████    ██████  ░███████    ██████  ████████
    ░██████████ ░░███ ░███ ░░███░░███     ░███   ░███   ░███  ░░░░░███ ░░░███░    ███░░███ ░███░░███  ███░░███░░███░░███
    ░███░░░░░███ ░███ ░███  ░███ ░███     ░░███  █████  ███    ███████   ░███    ░███ ░░░  ░███ ░███ ░███████  ░███ ░░░
    ░███    ░███ ░███ ░███  ░███ ░███      ░░░█████░█████░    ███░░███   ░███ ███░███  ███ ░███ ░███ ░███░░░   ░███
    ███████████  ░░████████ ████ █████       ░░███ ░░███     ░░████████  ░░█████ ░░██████  ████ █████░░██████  █████
    ░░░░░░░░░░░    ░░░░░░░░ ░░░░ ░░░░░         ░░░   ░░░       ░░░░░░░░    ░░░░░   ░░░░░░  ░░░░ ░░░░░  ░░░░░░  ░░░░░

    BunWatcher Server v.1.0.0
    +----------------------------------------------------------------------------------------------------+
    |    Used for monitoring and tracking the operational status of a computer to ensure it remains in   |
    |    a ready-to-use state. This command needs to be used in conjunction with a notification system.  |
    |                                                                                                    |
    |    Author: MoreMeng                                                                                |
    |    Date: 2024-07-17 11:38:10                                                                       |
    +----------------------------------------------------------------------------------------------------+
`);
console.log("\x1b[36m",`    Listening on http://localhost:${server.port}`);

