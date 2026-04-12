# The Byte Array

- [About](#about)
- [Projects](#projects)
- [Quick Start](#quick-start)
- [Development](#development)
- [Docker](#docker)
- [Deployment](#deployment)
- [CI/CD](#cicd)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

<a name="about"></a>

## About

This is the official website for **The Byte Array** - a privacy-focused software company building developer tools, libraries, and products that respect your data.

We believe in:

- **Open source** - All our projects are publicly auditable
- **Privacy by design** - Your data stays on your device
- **Transparency** - No hidden trackers or analytics

Visit our website at [thebytearray.org](https://thebytearray.org).

<a name="projects"></a>

## Projects

Our portfolio includes:

- **Hy2NG** - A privacy-focused HTTP(S) proxy
- **ConvertIt** - Offline media converter for Android
- **Developer libraries** - Open source tools for developers

Check out our [GitHub organization](https://github.com/thebytearray) for all our projects.

<a name="quick-start"></a>

## Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- Docker (optional, for containerized development)

### Installation

```bash
git clone https://github.com/thebytearray/website.git
cd website
./scripts/setup.sh
```

Or manually:

```bash
npm install
npm run dev
```

<a name="development"></a>

## Development

### Available Commands

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start development server    |
| `npm run build`   | Build for production        |
| `npm run preview` | Preview production build    |
| `npm run lint`    | Run ESLint                  |
| `make help`       | Show all available commands |

### Tech Stack

- **Framework:** React 18 with Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Components:** HeroUI
- **Animations:** Framer Motion
- **Content:** MDX for blog posts

### Adding Blog Posts

Create new MDX files in `content/blog/` with the following frontmatter:

```mdx
---
title: Your Post Title
date: "2026-04-12"
author: Your Name
excerpt: "A brief description of the post"
---

Your content here...
```

<a name="docker"></a>

## Docker

We provide Docker images for easy deployment. The setup includes multi-stage builds for minimal image size and production-ready nginx configuration.

### Quick Start with Docker

```bash
# Build and run
./scripts/docker.sh build
./scripts/docker.sh run

# Or use docker compose
docker compose up -d --build
```

### Docker Compose Overrides

We use Docker Compose with override files for different environments:

| File                         | Purpose             |
| ---------------------------- | ------------------- |
| `docker-compose.yml`         | Base configuration  |
| `docker-compose.prod.yml`    | Production settings |
| `docker-compose.staging.yml` | Staging environment |
| `docker-compose.dev.yml`     | Local development   |

```bash
# Production
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Staging
docker compose -f docker-compose.yml -f docker-compose.staging.yml up -d

# Development with hot reload
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

### Makefile Commands

```bash
make up        # Start containers
make down      # Stop containers
make logs       # View logs
make clean     # Remove containers and volumes
make buildx    # Build multi-platform image
```

### Docker Image

The official image is published to:

- **GitHub Container Registry:** `ghcr.io/thebytearray/website`
- **Docker Hub:** `thebytearray/website` (future)

<a name="deployment"></a>

## Deployment

### Manual Deployment

```bash
# Deploy to production
./scripts/deploy.sh

# Deploy to staging
./scripts/deploy.sh --staging

# Skip git pull
./scripts/deploy.sh --no-pull
```

### Server Requirements

- Docker 24+
- Docker Compose v2
- 512MB RAM minimum
- 10GB disk space

### Server Setup

1. Clone the repository:

```bash
git clone https://github.com/thebytearray/website.git
cd website
```

2. Configure environment:

```bash
cp .env.example .env
nano .env
```

3. Deploy:

```bash
docker compose up -d --build
```

<a name="cicd"></a>

## CI/CD

We use GitHub Actions for continuous integration and deployment.

### Workflows

| Workflow | Trigger           | Description                  |
| -------- | ----------------- | ---------------------------- |
| `CI`     | Every push/PR     | Lint, typecheck, build, test |
| `CD`     | Push to `main`    | Auto-deploy to production    |
| `CD`     | Push to `develop` | Auto-deploy to staging       |

### CI Pipeline

1. **Lint** - ESLint code quality checks
2. **TypeScript** - TypeScript compilation
3. **Build** - Production build verification
4. **Test** - Unit tests (if any)
5. **Docker Build** - Verify Docker image builds

### CD Pipeline

1. **Build and Push** - Build Docker image and push to registry
2. **Deploy** - SSH to server and pull new image
3. **Notify** - Status notification

### Required Secrets

Configure these in GitHub repository settings:

| Secret                   | Description                |
| ------------------------ | -------------------------- |
| `SERVER_HOST`            | Production server hostname |
| `SERVER_USER`            | SSH username               |
| `SERVER_SSH_KEY`         | SSH private key            |
| `STAGING_SERVER_HOST`    | Staging server hostname    |
| `STAGING_SERVER_USER`    | Staging SSH username       |
| `STAGING_SERVER_SSH_KEY` | Staging SSH private key    |

<a name="contributing"></a>

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and test
npm run dev
npm run lint
npm run build

# Commit and push
git add .
git commit -m "feat: add amazing feature"
git push origin feature/your-feature

# Open PR on GitHub
```

<a name="security"></a>

## Security

We take security seriously. If you discover a security vulnerability, please report it responsibly.

- Do not create public GitHub issues for security issues
- Email us directly at [contact@thebytearray.org](mailto:contact@thebytearray.org)

### Security Headers

Our nginx configuration includes:

- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`

<a name="license"></a>

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

---

Built with privacy in mind.
