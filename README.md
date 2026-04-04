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

If HTTPS does not come up, check DNS and port 80, then `docker compose logs edge`. The updater needs the repo to be a normal `git clone` and uses the host Docker socket (only run this on a server you trust).

## License

GNU General Public License v3.0
