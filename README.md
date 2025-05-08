# AI Builders Platform

A modern, developer-focused platform for AI builders, featuring a blog, cookbook, and resources for building AI products.

## Features

- 🚀 Modern, responsive design
- 🌙 Dark mode support
- 📝 MDX-powered blog
- 📚 AI SaaS Cookbook
- 📧 Newsletter integration
- 🔍 SEO optimized
- 🚀 GitHub Pages deployment

## Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [MDX](https://mdxjs.com) - Blog content
- [GitHub Pages](https://pages.github.com) - Hosting

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/landing.git
   cd landing
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # Blog posts and content
│   ├── layouts/        # Page layouts
│   └── pages/          # Route pages
├── public/            # Static assets
└── astro.config.mjs   # Astro configuration
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions.

To deploy manually:

1. Push your changes to the main branch
2. The GitHub Action will automatically build and deploy the site
3. Your site will be available at `https://yourusername.github.io/landing`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
