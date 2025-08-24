# Valesco Monorepo

A multi-client monorepo built with Turborepo, Next.js, and pnpm for scalable client application development.

## 🚀 Features

- **Multi-Client Support**: Separate applications for different clients
- **Shared Packages**: Reusable UI components, configurations, and utilities
- **Vercel Deployment**: Separate Vercel projects per client for complete isolation
- **Hygraph CMS**: Headless CMS integration for content management
- **Modern Stack**: Next.js 15+, React 19+, TypeScript, Tailwind CSS v4
- **Developer Experience**: ESLint, Prettier, and consistent tooling

## 📁 Structure

```
valesco-monorepo/
├── apps/                    # Client applications
│   ├── client-a-web/       # Client A web application
│   ├── client-b-web/       # Client B web application
│   ├── client-b-blog/      # Client B blog application
│   └── client-c-search/    # Client C search application
├── packages/                # Shared packages
│   ├── ui/                 # Shared UI components
│   ├── config/             # Shared configurations
│   ├── types/              # Shared TypeScript types
│   └── utils/              # Shared utilities
├── turbo.json              # Turborepo configuration
├── package.json            # Root package configuration
└── pnpm-workspace.yaml     # pnpm workspace configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Monorepo**: Turborepo
- **Package Manager**: pnpm
- **CMS**: Hygraph (GraphQL)
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel (separate projects per client)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd valesco-monorepo
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development**
   ```bash
   pnpm dev
   ```

## 📦 Available Scripts

- `pnpm build` - Build all applications and packages
- `pnpm dev` - Start development servers
- `pnpm lint` - Lint all code
- `pnpm type-check` - Type check all code
- `pnpm test` - Run tests
- `pnpm clean` - Clean build outputs
- `pnpm format` - Format code with Prettier

## 🏗️ Development Workflow

### Adding New Clients

1. Create new application in `apps/` directory
2. Configure client-specific settings
3. Set up Vercel project
4. Configure Hygraph CMS environment
5. Deploy and test

### Shared Package Development

1. Make changes in `packages/`
2. Update dependent applications
3. Test changes across all clients
4. Commit and deploy

## 🔧 Configuration

### Environment Variables

Each client application can have its own environment variables:

- `CLIENT_ID` - Unique client identifier
- `DATABASE_URL` - Client-specific database connection
- `HYGRAPH_TOKEN` - Hygraph CMS API token
- `VERCEL_PROJECT_ID` - Vercel project identifier

### Client Isolation

- **Complete Data Separation**: Each client has isolated databases
- **Separate Vercel Projects**: Independent deployment and scaling
- **Isolated CMS Environments**: Separate Hygraph workspaces
- **Custom Domains**: Each client gets branded domains

## 📚 Documentation

- [Development Guide](./docs/development.md)
- [Client Onboarding](./docs/client-onboarding.md)
- [Deployment Guide](./docs/deployment.md)
- [Architecture Overview](./docs/architecture.md)

## 🤝 Contributing

1. Follow the established code style (ESLint + Prettier)
2. Write descriptive commit messages
3. Test changes across all affected applications
4. Update documentation as needed

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details

## 🆘 Support

For questions and support, please contact the development team or create an issue in the repository.
