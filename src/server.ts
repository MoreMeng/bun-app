import { readFileSync, existsSync } from "fs";
import { serve } from "bun";

// Initialize default values
let port = 1212;
let message = "หากต้องการแก้ไข port และ messege ให้แก้ไขใน config.json ที่อยู่ในโฟลเดอร์ระดับเดียวกันกับ bunwatcher.exe";

// Check if config.json exists and read it
if (existsSync("config.json")) {
  const configFile = readFileSync("config.json", "utf8");
  const config = JSON.parse(configFile);

  port = config.port || port; // Use the port from config or default
  message = config.message || message; // Use the message from config or default
}

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

