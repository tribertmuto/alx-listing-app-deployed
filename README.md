# ALX Listing App

A modern property listing application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Fast page loads with Next.js server-side rendering
- Beautiful UI with Tailwind CSS
- Type-safe development with TypeScript
- Environment-based configuration

## Prerequisites

- Node.js 18.0 or later
- npm or yarn
- Vercel account for deployment

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alx-listing-app-deployed.git
   cd alx-listing-app-deployed
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_API_BASE_URL=/api
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
3. Click on "Add New" > "Project".
4. Select your repository.
5. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: /
   - Build Command: `npm run build` or `yarn build`
   - Output Directory: `.next`
   - Install Command: `npm install` or `yarn`
6. Add your environment variables in the Vercel dashboard.
7. Click "Deploy"

### Environment Variables

Make sure to set the following environment variables in your Vercel project:

- `NEXT_PUBLIC_API_BASE_URL` - Base URL for your API

## Testing

To run the test suite:

```bash
npm test
# or
yarn test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


