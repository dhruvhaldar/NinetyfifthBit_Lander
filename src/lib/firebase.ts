
import { initializeApp, getApp, getApps, type FirebaseApp } from 'firebase/app';
import { getCrashlytics, isSupported as isCrashlyticsSupported, type Crashlytics, recordError as recordCrashlyticsError, log as logCrashlyticsMessage } from 'firebase/crashlytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, // Optional, mainly for Google Analytics
};

// Initialize Firebase App
let app: FirebaseApp;
if (!getApps().length) {
  if (!firebaseConfig.apiKey || firebaseConfig.apiKey === 'your_api_key') {
    console.warn('Firebase API key is not configured. Firebase services, including Crashlytics, may not work.');
    // Create a dummy app or handle this case as per your app's requirements
    // For now, we'll try to initialize, but it will likely fail or be non-functional
  }
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

let crashlytics: Crashlytics | null = null;

// Function to initialize Crashlytics if not already initialized
export const initCrashlytics = async () => {
  if (typeof window !== 'undefined' && !crashlytics) {
    if (!firebaseConfig.apiKey || firebaseConfig.apiKey === 'your_api_key') {
      console.warn('Firebase is not configured. Skipping Crashlytics initialization.');
      return null;
    }
    try {
      const supported = await isCrashlyticsSupported();
      if (supported) {
        crashlytics = getCrashlytics(app);
        console.log('Firebase Crashlytics initialized successfully.');
        // You can log a message to confirm it's working after deployment
        // logCrashlyticsMessage('Crashlytics initialized in user session.');
      } else {
        console.warn('Firebase Crashlytics is not supported in this browser environment.');
      }
    } catch (error) {
      console.error('Error initializing Firebase Crashlytics:', error);
    }
  }
  return crashlytics;
};

// Export functions to interact with Crashlytics if needed manually
export const logCrashError = (error: Error, errorInfo?: { [key: string]: any }) => {
  if (crashlytics && error) {
    recordCrashlyticsError(error, errorInfo);
    // console.info('Error reported to Crashlytics:', error); // Optional: for local debugging
  } else if (!crashlytics && firebaseConfig.apiKey && firebaseConfig.apiKey !== 'your_api_key') {
    console.warn('Crashlytics not initialized. Cannot log error:', error);
  }
};

export const logCrashMessage = (message: string) => {
  if (crashlytics) {
    logCrashlyticsMessage(message);
  } else if (!crashlytics && firebaseConfig.apiKey && firebaseConfig.apiKey !== 'your_api_key') {
    console.warn('Crashlytics not initialized. Cannot log message:', message);
  }
};

export { app };
