module.exports = {
  apps: [
    {
      name: "bun-app",
      script: "bun",
      args: "index.ts",
      interpreter: "none",
      watch: true
    }
  ]
};
