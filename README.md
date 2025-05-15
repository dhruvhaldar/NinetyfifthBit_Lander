md
# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at `src/app/page.tsx`.

## Project Setup & Running Locally

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    This will start the Next.js development server, typically on `http://localhost:9002`.

3.  **Run Genkit Development Server (for AI features):**
    Open a new terminal and run:
    ```bash
    npm run genkit:dev
    ```
    Or, for automatic reloading on changes to AI flows:
    ```bash
    npm run genkit:watch
    ```

## Deploying to Vercel

Vercel is the company behind Next.js and provides a seamless deployment experience for Next.js applications.

1.  **Push Your Code to a Git Repository:**
    *   If you haven't already, create a repository on GitHub, GitLab, or Bitbucket and push your project code to it.

2.  **Sign Up/Log In to Vercel:**
    *   Go to [vercel.com](https://vercel.com/) and sign up or log in.

3.  **Import Your Project:**
    *   From your Vercel dashboard, click on "Add New..." > "Project".
    *   Connect your Git provider (GitHub, GitLab, Bitbucket) if you haven't already.
    *   Select the repository for your project and click "Import".

4.  **Configure Project (Usually Automatic):**
    *   Vercel typically auto-detects that it's a Next.js project and configures the build settings correctly. You usually don't need to change anything here.

5.  **Set Up Environment Variables:**
    *   In your Vercel project settings (Project Settings > Environment Variables), you need to add the environment variables your application uses. These are the same variables found in your `.env` file:
        *   `NEXT_PUBLIC_FIREBASE_API_KEY`
        *   `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
        *   `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
        *   `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
        *   `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
        *   `NEXT_PUBLIC_FIREBASE_APP_ID`
        *   `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` (if you're using it)
        *   Any other environment variables your Genkit flows or other parts of your application might need.
    *   **Important:** For variables starting with `NEXT_PUBLIC_`, Vercel makes them available to the browser. For server-side only variables (if you add any later, e.g., for Genkit API keys that shouldn't be public), do not prefix them with `NEXT_PUBLIC_`.

6.  **Deploy:**
    *   Click the "Deploy" button. Vercel will build and deploy your application.
    *   Once deployed, Vercel will provide you with a URL (e.g., `your-project-name.vercel.app`).

7.  **Custom Domain (Optional):**
    *   You can add a custom domain to your Vercel project via the "Domains" tab in your project settings.

Vercel will automatically redeploy your application whenever you push changes to the connected Git branch (usually `main` or `master`).

## Integrating Firebase Crashlytics

Firebase Crashlytics is set up to help you track and fix app stability issues.

1.  **Create or Select a Firebase Project:**
    *   Go to the [Firebase Console](https://console.firebase.google.com/).
    *   Create a new Firebase project or select an existing one.
    *   Add a "Web" app to your Firebase project if you haven't already.

2.  **Get Firebase Configuration:**
    *   In your Firebase project settings (Project settings > General tab), find your web app's Firebase configuration. It will look something like this:
        ```javascript
        const firebaseConfig = {
          apiKey: "AIzaSy...",
          authDomain: "your-project-id.firebaseapp.com",
          projectId: "your-project-id",
          storageBucket: "your-project-id.appspot.com",
          messagingSenderId: "...",
          appId: "1:...",
          measurementId: "G-..." // Optional
        };
        ```

3.  **Update Environment Variables:**
    *   Open the `.env` file in the root of your project (for local development).
    *   For deployment (e.g., to Vercel), add these as environment variables in your Vercel project settings (see "Deploying to Vercel" section).
    *   Copy the values from your Firebase project configuration into the corresponding `NEXT_PUBLIC_FIREBASE_...` variables:
        *   `NEXT_PUBLIC_FIREBASE_API_KEY`
        *   `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
        *   `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
        *   `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
        *   `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
        *   `NEXT_PUBLIC_FIREBASE_APP_ID`
        *   `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` (optional, but good to include if you have it)
    *   **Important:** Ensure these start with `NEXT_PUBLIC_` so they are accessible on the client-side.

4.  **Code Integration (Already Done):**
    *   The necessary Firebase SDK and Crashlytics initialization code is already present in:
        *   `src/lib/firebase.ts`: Handles Firebase app initialization and dynamic loading of Crashlytics.
        *   `src/app/layout.tsx`: Calls the `initCrashlytics()` function on the client-side.
    *   Crashlytics will only be initialized in `production` mode (when `NODE_ENV === 'production'`).

5.  **Test (After Deployment):**
    *   After deploying your application to a production environment (like Vercel), you can test Crashlytics by intentionally causing a client-side error or using the Firebase console to send a test crash.
    *   Check your Firebase Crashlytics dashboard to see if errors are reported.

## Integrating Google AdSense

To display ads on your website using Google AdSense, follow these steps:

1.  **Sign Up for Google AdSense:**
    *   Go to the [Google AdSense website](https://www.google.com/adsense/start/) and sign up or log in.
    *   Follow the process to get your site approved for showing ads. This can take some time.

2.  **Get Your AdSense Publisher ID:**
    *   Once approved, you'll find your Publisher ID in your AdSense account (usually looks like `ca-pub-XXXXXXXXXXXXXXXX`).

3.  **Add AdSense Script to Your Site:**
    *   AdSense will provide you with a script tag. It looks something like this:
        ```html
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
             crossorigin="anonymous"></script>
        ```
    *   Open `src/app/layout.tsx`.
    *   Paste this script tag into the `<head>` section, replacing `ca-pub-YOUR_PUBLISHER_ID` with your actual Publisher ID. There's a `TODO` comment indicating where to place it.

4.  **Create Ad Units in AdSense:**
    *   In your AdSense account, go to "Ads" > "By ad unit" and create the ad units you want to display (e.g., display ads, in-feed ads).
    *   For each ad unit, AdSense will provide a code snippet. This snippet typically includes an `<ins>` tag. You will need the `data-ad-client` (your Publisher ID) and `data-ad-slot` (unique ID for the ad unit) values from this snippet.

5.  **Place Ads on Your Pages:**
    *   This project includes an `AdPlaceholder` component (`src/components/AdPlaceholder.tsx`) designed to make it easy to add AdSense ad slots.
    *   When you use the `AdPlaceholder` component in your pages (e.g., in `src/app/page.tsx` or `src/app/cosmic-capture/page.tsx`), you need to provide your AdSense details:
        ```tsx
        <AdPlaceholder
          width={300}
          height={250}
          description="Advertisement Area (e.g., Medium Rectangle)"
          className="mx-auto"
          data-ad-client="ca-pub-YOUR_PUBLISHER_ID" // <-- REPLACE THIS
          data-ad-slot="YOUR_AD_SLOT_ID"         // <-- REPLACE THIS
          data-ad-format="auto" // Or specific format like "rectangle"
          data-full-width-responsive="true"
        />
        ```
    *   Replace `ca-pub-YOUR_PUBLISHER_ID` with your Publisher ID.
    *   Replace `YOUR_AD_SLOT_ID` with the specific Ad Slot ID from the ad unit you created in AdSense.
    *   Alternatively, you can replace the entire `<AdPlaceholder ... />` component instance with the full ad unit code snippet provided by AdSense.

6.  **Ads.txt (Recommended):**
    *   Create a file named `ads.txt` in your `public/` directory.
    *   Add the following line to it, replacing `pub-0000000000000000` with your actual AdSense Publisher ID:
        ```
        google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
        ```
    *   This file helps prevent ad fraud and is recommended by Google. You can serve this file by placing it in the `public` directory of your Next.js project. Vercel will automatically serve files from the `public` directory at the root of your domain.

7.  **Review AdSense Policies:**
    *   Ensure your site complies with all [AdSense Program policies](https://support.google.com/adsense/answer/48182).

Ads may take some time to appear after setup, and AdSense will only serve ads if your site is approved and has sufficient content.
