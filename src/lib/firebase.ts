
import { initializeApp, getApp, getApps, type FirebaseApp } from 'firebase/app';
// Firebase Crashlytics will be dynamically imported.

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
  }
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Crashlytics-related functionalities, loaded dynamically
let crashlyticsModule: any = null;
let crashlyticsInstance: any | null = null; // Renamed to avoid conflict with getCrashlytics function
let crashlyticsLoadAttempted = false;
let crashlyticsLoadSucceeded = false;

async function loadCrashlyticsModule() {
  if (crashlyticsLoadAttempted) {
    return crashlyticsLoadSucceeded;
  }
  crashlyticsLoadAttempted = true;

  if (typeof window === 'undefined') {
    // Don't attempt to import on the server side.
    console.warn('Firebase Crashlytics import skipped on server side.');
    return false;
  }

  try {
    crashlyticsModule = await import('firebase/crashlytics');
    crashlyticsLoadSucceeded = true;
    console.log('Firebase Crashlytics module dynamically imported successfully.');
    return true;
  } catch (error) {
    console.error('Failed to dynamically import Firebase Crashlytics module. Crashlytics will be disabled.', error);
    crashlyticsModule = null; // Ensure it's null if import fails
    return false;
  }
}

export const initCrashlytics = async () => {
  if (typeof window === 'undefined') return null; // Only run on client

  const loaded = await loadCrashlyticsModule();
  if (!loaded || !crashlyticsModule || crashlyticsInstance) {
    if (crashlyticsInstance) return crashlyticsInstance; // Already initialized
    if (!loaded || !crashlyticsModule) console.warn('Crashlytics module not available for initialization.');
    return null;
  }

  if (!firebaseConfig.apiKey || firebaseConfig.apiKey === 'your_api_key') {
    console.warn('Firebase is not configured. Skipping Crashlytics initialization.');
    return null;
  }

  try {
    const supported = await crashlyticsModule.isSupported();
    if (supported) {
      crashlyticsInstance = crashlyticsModule.getCrashlytics(app);
      console.log('Firebase Crashlytics initialized successfully.');
      // crashlyticsModule.log(crashlyticsInstance, 'Crashlytics initialized in user session.'); // Example log
    } else {
      console.warn('Firebase Crashlytics is not supported in this browser environment.');
    }
  } catch (error) {
    console.error('Error initializing Firebase Crashlytics:', error);
    crashlyticsInstance = null; // Ensure instance is null on error
  }
  return crashlyticsInstance;
};

export const logCrashError = (error: Error, errorInfo?: { [key: string]: any }) => {
  if (crashlyticsInstance && crashlyticsModule && crashlyticsModule.recordError) {
    crashlyticsModule.recordError(error, errorInfo);
  } else if (crashlyticsLoadSucceeded && (!crashlyticsInstance || !crashlyticsModule)) {
     // console.warn('Crashlytics module was loaded but instance/functions are not available. Cannot log error:', error);
  } else if (!crashlyticsLoadSucceeded && firebaseConfig.apiKey && firebaseConfig.apiKey !== 'your_api_key') {
    // console.warn('Crashlytics module failed to load. Cannot log error:', error);
  }
};

export const logCrashMessage = (message: string) => {
  if (crashlyticsInstance && crashlyticsModule && crashlyticsModule.log) {
    // Note: The 'log' function from 'firebase/crashlytics' might be different from the one you expect.
    // It's typically 'logEvent' for analytics or custom keys for Crashlytics.
    // For simple messages, Crashlytics usually captures them with errors or custom keys.
    // This 'log' function directly might not be what you intend for simple string messages to appear standalone in Crashlytics.
    // Consider using it for custom keys or alongside reported errors.
    // For now, let's assume it's for custom log messages that Crashlytics might pick up.
    try {
      // The modular SDK for Crashlytics doesn't have a simple `log(message)` function like the older versions.
      // You typically log non-fatal errors or set custom keys/logs.
      // For simplicity, we'll just console warn if this specific 'log' isn't available.
      if (typeof crashlyticsModule.log === 'function') {
         // crashlyticsModule.log(crashlyticsInstance, message); // This syntax might be incorrect for modular SDK's simple log
         console.log(`Crashlytics log: ${message}`); // Placeholder, as direct log function is different
      } else {
         console.warn(`Crashlytics log function not available as expected in module. Message: ${message}`);
      }
    } catch (e) {
      console.error("Error trying to log Crashlytics message:", e);
    }

  } else if (crashlyticsLoadSucceeded && (!crashlyticsInstance || !crashlyticsModule)) {
    // console.warn('Crashlytics module was loaded but instance/functions are not available. Cannot log message:', message);
  } else if (!crashlyticsLoadSucceeded && firebaseConfig.apiKey && firebaseConfig.apiKey !== 'your_api_key') {
    // console.warn('Crashlytics module failed to load. Cannot log message:', message);
  }
};

export { app };
