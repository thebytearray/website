# Website

Vite + React + TypeScript + Tailwind + HeroUI.

## Local development

```bash
npm install
npm run dev
```

## Production (Docker)

You need [Docker](https://docs.docker.com/get-docker/) with `docker compose`. You do not need Node on the server.

Before the first deploy, point **thebytearray.org** and **www.thebytearray.org** at this machine and open **80** and **443**.

Then:

```bash
git clone https://github.com/thebytearray/website.git
cd website
make up
```

**`make up`** builds and starts everything: the static site (**site**), HTTPS reverse proxy and Let’s Encrypt (**edge**), and a small helper (**updater**) that every 15 minutes runs `git pull` and rebuilds/restarts the stack so new commits go live without you doing anything else.

Other commands: `make down` (stop), `make logs` (follow logs), `make update` (pull + rebuild now). Same idea with npm: `npm run update`.

The updater needs a normal `git clone` and mounts the Docker socket (trusted servers only).

### Site does not load in the browser

1. **Start Docker on boot:** `sudo systemctl enable --now docker`
2. **Firewall:** allow **80** and **443** (e.g. `sudo ufw allow 80,443/tcp && sudo ufw reload`, and your VPS panel “security group” if any).
3. **DNS:** both **thebytearray.org** and **www** must point to this server’s public IP (check with `dig +short thebytearray.org`).
4. **Try HTTP first:** open `http://thebytearray.org`. HTTPS only works after Let’s Encrypt succeeds; if the cert is still failing, `https://` will look “empty” or refuse to connect.
5. **On the server:**  
   `curl -sI -H 'Host: thebytearray.org' http://127.0.0.1/` should return **200**.  
   If not: `docker compose ps` and `docker compose logs edge --tail 80`.

After changing nginx config, rebuild edge: `docker compose up -d --build edge`.

**No HTTPS:** the edge image must serve `/.well-known/acme-challenge/` on **both** apex and **www** (a plain redirect on www used to break Let’s Encrypt). Pull latest, rebuild edge, then `docker compose restart edge` and watch `docker compose logs -f edge` for certbot.

## License

GNU General Public License v3.0
