# Personal Portfolio Website

This is a personal portfolio website built with Next.js, React, and TypeScript. It showcases the developer's skills, projects, and provides information about their professional experience.

## Project Structure

The project follows a typical Next.js application structure:

- `app/`: Contains the main application pages and routing logic
- `components/`: Reusable React components
- `public/`: Static assets like images
- `styles/`: Global styles and CSS modules

## Key Features

- Responsive design
- Dynamic routing for case studies
- Contact form with email functionality
- Skills and tools showcase
- Testimonials section
- Resume/CV page

## Pages

- Home (`app/page.tsx`)
- About (`app/about/page.tsx`)
- Case Studies (`app/case-studies/page.tsx` and `app/case-studies/[id]/page.tsx`)
- Contact (`app/contact/page.tsx`)
- Process (`app/process/page.tsx`)
- Resume (`app/resume/page.tsx`)
- Services (`app/services/page.tsx`)
- Testimonials (`app/testimonials/page.tsx`)
- Tools (`app/tools/page.tsx`)

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```
4. Run the development server:
   ```
   yarn run dev
   ```

## Building for Production

To create a production build, run:

```
yarn run build
```

Then, to start the production server:

```
yarn start
```

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js (for API routes)
- Nodemailer (for sending emails)

## Customization

To customize the content of the portfolio:

1. Update the personal information in the relevant components.
2. Modify the `caseStudiesData.ts` file to add or edit case studies.
3. Update the skills and tools in the `tools/page.tsx` file.
4. Replace the images in the `public/images/` directory with your own.

## Contributing

This is a personal project, but if you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).