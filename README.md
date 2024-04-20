# T3 Gallery

## TODO

- [x] Make it deploy (Vercel)
- [x] Scaffold basic UI with mock data
- [x] Tidy up build process
- [ ] Set up Database (Vercel postgres)
- [ ] Attach databse to UI
- [ ] Add Authentication (Clerk)
- [ ] Add image upload
- [ ] Error management (Sentry)
- [ ] Routing/image page (Parallel route)
- [ ] Delete button with server actions
- [ ] Analytics (Posthog)
- [ ] Ratelimiting (Upstash)

T3 Gallery Development Plan
The T3 Gallery project is a web application being developed using a modern tech stack, also known as the T3 Stack. This consists of Next.js for the front-end framework, PostgreSQL as the database, and Vercel for both database hosting and deployment of the application. Below is a detailed development plan and progress tracking for the T3 Gallery:

## Development Phases

### Phase 1: Initial Setup and Deployment

- **Project Initialization:** Set up the basic Next.js framework.
- **Vercel Deployment:** Deploy the initial application on Vercel to ensure continuous integration and deployment pipelines are functioning.
- **Mock Data Integration:** Implement mock data to test initial UI components.

### Phase 2: Database Integration

- **PostgreSQL Setup:** Configure PostgreSQL database on Vercel.
- **Database Schema Design:** Design and implement the database schema to store gallery images and metadata.
- **Connect Database to Application:** Integrate the front-end with the database to fetch data dynamically.

### Phase 3: Feature Implementation

- **User Authentication:** Implement user authentication using a service like Auth0 or Clerk to manage user sessions and permissions.
- **Image Upload Feature:** Enable users to upload and manage their images.
- **Gallery Display:** Develop components to display images in a user-friendly gallery format.

### Phase 4: Advanced Features and Fine-Tuning

- **Error Management:** Integrate Sentry for error tracking and management.
- **Advanced Routing:** Implement dynamic routing for individual image pages.
- **Interactive UI Elements:** Add features like a delete button for image management and server-side actions.
- **Analytics Integration:** Set up analytics with PostHog to track user interactions and system performance.
- **Rate Limiting:** Incorporate rate limiting to manage request loads and prevent abuse using Upstash.

### Phase 5: Final Testing and Launch

- **Comprehensive Testing:** Conduct thorough testing across all devices and platforms to ensure functionality and responsiveness.
- **User Feedback:** Gather user feedback through beta testing and make necessary adjustments.
- **Official Launch:** Launch the application to the public.

# T3 Gallery Deployment Script

echo "Starting T3 Gallery Setup..."

# Check for Vercel CLI

if ! command -v vercel &> /dev/null
then
echo "Vercel CLI not found, installing..."
npm i -g vercel
fi

echo "Deploying on Vercel..."

# Deploy using Vercel

vercel deploy --prod

# Set up PostgreSQL database on Vercel

echo "Setting up PostgreSQL Database..."
vercel env add DATABASE_URL production

# Add the database URL in the Vercel environment variables

# Scaffold basic UI with Next.js

echo "Setting up Next.js frontend..."
npx create-next-app t3-gallery
cd t3-gallery
npm run dev

# TODO List for remaining setup

echo "TODO:"
echo "- Attach database to UI"
echo "- Add authentication"
echo "- Implement image upload feature"
echo "- Set up error management with Sentry"
echo "- Configure routing for image pages"
echo "- Add delete functionality with server actions"
echo "- Integrate analytics with Posthog"
echo "- Implement rate limiting with Upstash"

echo "T3 Gallery setup complete."
