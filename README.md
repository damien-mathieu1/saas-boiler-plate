# SaaS Boilerplate

Welcome to the SaaS Boilerplate! This project aims to provide a robust starting point for developing a new Software-as-a-Service (SaaS) application. By integrating essential tools and frameworks, you can kickstart your development process and focus on building features rather than setting up the basics.

## Features

This boilerplate includes:

- **Next.js**: A powerful React framework for building fast and scalable web applications.
- **Supabase**: An open-source Firebase alternative for building secure and scalable backends.
- **Supabase Auth**: Authentication system integrated with Supabase for user management.
- **shadcn Components**: A collection of customizable and accessible React components.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **PostHog**: An open-source product analytics suite to understand user behavior.
- **Stripe**: A suite of payment APIs to handle billing and subscriptions.
- **Prisma ORM**: A next-generation ORM for Node.js and TypeScript, ensuring type-safe database interactions.
- **Vercel Hosting**: Optimized for deployment on Vercel, providing seamless integration and easy scaling.
- **Internationalization (i18n)**: Built-in support for multiple languages using i18n.

## Getting Started

To get started with this boilerplate, follow the steps below.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)
- PostgreSQL (required for Supabase)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/saas-boilerplate.git
    cd saas-boilerplate
    ```

2. **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables**:

    Create a `.env.local` file in the root of your project and add the following variables:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
    STRIPE_SECRET_KEY=your-stripe-secret-key
    DATABASE_URL=your-database-url
    ```

4. **Set up Supabase**:

    Follow the [Supabase documentation](https://supabase.io/docs) to set up your project and obtain the necessary keys for your environment variables.

5. **Run database migrations**:

    ```bash
    npx prisma migrate dev --name init
    ```

6. **Start the development server**:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Your application should now be running on [http://localhost:3000](http://localhost:3000).

## Deployment

This boilerplate is optimized for deployment on Vercel. Follow these steps to deploy your application:

1. **Install Vercel CLI** (if you haven't already):

    ```bash
    npm install -g vercel
    ```

2. **Login to Vercel**:

    ```bash
    vercel login
    ```

3. **Deploy the project**:

    ```bash
    vercel
    ```

    Follow the prompts to deploy your application. Your project will be live on a Vercel domain.

## Usage

### Authentication

This boilerplate uses Supabase Auth for handling user authentication. You can customize the auth flow in the `auth` directory.

### UI Components

We use shadcn components styled with Tailwind CSS for building the user interface. You can find and customize these components in the `components` directory.

### Analytics

PostHog is integrated for product analytics. Configure your PostHog project and update the environment variables as needed.

### Payments

Stripe is set up to handle billing and subscriptions. Update your Stripe configuration and use the provided hooks and components to integrate payments into your app.

### ORM

Prisma ORM is used for database interactions. Define your data models in the `prisma` schema file and run migrations to update the database.

### Internationalization (i18n)

This boilerplate includes support for internationalization using i18n. You can add and manage translations in the `locales` directory and configure language settings as needed.

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Happy coding! If you have any questions or need further assistance, feel free to open an issue or reach out to the community.
