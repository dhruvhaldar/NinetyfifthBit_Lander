import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  const privacyPolicyHtmlContent = `
    <div class="container mx-auto p-4">
      <p>
      <h1>Cosmic Capture Privacy Policy</h1>
    <p>Effective Date: May 16, 2025</p>

    <h3>1. Introduction</h3>
    <p>Welcome to Cosmic Capture! This Privacy Policy explains how we collect, use, and protect your information when you use our game.</p>

    <h3>2. Information We Collect</h3>
    <p>We collect the following types of information:</p>
    <ul>
        <li><strong>Game Data:</strong> Your high scores, game progress, and level achievements.</li>
        <li><strong>Device Information:</strong> Basic device information for game compatibility and performance optimization.</li>
    </ul>

    <h3>3. How We Use Your Information</h3>
    <p>We use the collected information to:</p>
    <ul>
        <li>Provide and maintain the game</li>
        <li>Improve game performance and user experience</li>
        <li>Track game progress and achievements</li>
    </ul>

    <h3>4. Third Party Services</h3>
    <p>Our game uses the following third party services:</p>
    <ul>
        <li><strong>Google AdMob:</strong> For displaying advertisements in the game.</li>
        <li><strong>Google Firebase Analytics:</strong> For understanding how players interact with the game.</li>
    </ul>
    <p>These services may collect additional information as per their own privacy policies.</p>

    <h3>5. Your Rights</h3>
    <p>You have the right to:</p>
    <ul>
        <li>Opt-out of advertisements by using your device's advertising settings.</li>
        <li>Clear your game data by uninstalling and reinstalling the game.</li>
    </ul>

    <h3>6. Data Security</h3>
    <p>We implement appropriate security measures to protect your information from unauthorized access and disclosure.</p>

    <h3>7. Children's Privacy</h3>
    <p>This game is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>

    <h3>8. Changes to This Privacy Policy</h3>
    <p>We may update this Privacy Policy from time to time. Any changes will be effective immediately upon posting the updated policy.</p>

    <h3>9. Contact Us</h3>
    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
    <p>Email: ninetyfifthbit@gmail.com</p>
      </p>
      </div>
  `;

  return ( // Decrease the font size of all header tags within the rendered HTML content
    <div style={{ '--header-font-size': '0.5em', fontFamily: 'Arial, sans-serif' } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<style>
 h1, h2, h3, h4, h5, h6 { font-size: var(--header-font-size); }
 h3 { padding-top: 1em; padding-bottom: 1em;}
    </style>${privacyPolicyHtmlContent}` }} />
  ); // Added top padding to the main container to prevent overlap with the header.
};

export default PrivacyPolicyPage;