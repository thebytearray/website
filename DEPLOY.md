# Deployment Guide

## Server path
Project lives at `/var/www/thebytearray` on the server.

---

## One-time manual deploy (now)

```bash
cd /var/www/thebytearray
git pull
./scripts/deploy.sh
```

This pulls latest code, rebuilds the Docker image, and restarts the container.

---

## Auto-deploy (after first manual run)

The `auto-deploy.sh` script only runs a full deploy when there are new commits from git. Set up a cron job:

```bash
crontab -e
```

Add this line (runs every 5 minutes, checks for changes):

```
*/5 * * * * /var/www/thebytearray/scripts/auto-deploy.sh >> /var/log/thebytearray-deploy.log 2>&1
```

Or every 10 minutes:

```
*/10 * * * * /var/www/thebytearray/scripts/auto-deploy.sh >> /var/log/thebytearray-deploy.log 2>&1
```

Ensure the script is executable:

```bash
chmod +x /var/www/thebytearray/scripts/deploy.sh
chmod +x /var/www/thebytearray/scripts/auto-deploy.sh
```

---

## Manual commands

| Command | Description |
|---------|-------------|
| `./scripts/deploy.sh` | Pull, rebuild, run |
| `./scripts/deploy.sh --no-pull` | Rebuild and run (no git pull) |
| `./scripts/auto-deploy.sh` | Deploy only if there are new changes |
| `make deploy` | Same as deploy.sh |
| `make logs` | View container logs |
