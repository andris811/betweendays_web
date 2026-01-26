# Between Days - Website Content Update
**Last updated: January 26, 2026**

This file contains the corrected content for the Between Days website, including the main features page and the complete Terms of Use & Privacy Policy.

---

## MAIN FEATURES PAGE

### Daily Check-Ins

Simply open the app each day to confirm you're safe. Receive push notifications to remind you to check in. Quick, easy, and non-intrusive.

### Automatic Alerts

If you miss check-ins for two consecutive days, your emergency contact is automatically notified on the third day.

### Privacy First

Your data stays private. No tracking, no unnecessary data collection, just peace of mind.

### Simple & Reliable

Clean interface with no distractions. Designed to be simple and dependable when it matters most.

### Emergency Contact

Set up your trusted contact who will be notified if something seems wrong.

### Works Offline

Check-ins are recorded offline and synced when you're back online. Always reliable.

---

## TERMS OF USE & PRIVACY POLICY

# Between Days – Terms of Use & Privacy Policy
**Last updated: January 2026**

## 1. Overview

Between Days is an iOS application designed to help people who live alone signal their well-being through daily check-ins. If a user does not check in for two consecutive days, the app automatically sends an email alert on the third day to a designated emergency contact asking them to check on the user.

By using the app, you agree to the terms and practices described below.

## 2. Terms of Use

### 2.1 Intended Use

Between Days is a wellness support tool, not an emergency service. It does not replace medical care, emergency responders, or welfare checks conducted by authorities.

**Do not rely on this app for life-critical situations.**

### 2.2 Automated Alerts

If you miss checking in for two consecutive days, the app automatically sends an email on the third day to your chosen emergency contact.

You acknowledge and accept:

- Emails are sent automatically via our server, without human intervention
- Email delivery is not guaranteed (depends on email providers, internet connectivity)
- The app cannot confirm whether the recipient reads or acts on the message
- False alarms may occur if you forget to check in

### 2.3 Accuracy of Information

You are responsible for ensuring:

- Your correct name (optional, but recommended)
- A valid and monitored emergency contact email address

Incorrect or outdated information may prevent alerts from reaching the right person.

### 2.4 No Liability

Between Days is provided "as is" without any warranties. The developer is not liable for:

- Missed, delayed, or undelivered emails
- Internet, device, or third-party service outages
- Any action or inaction taken by emergency contacts
- Consequences arising from reliance on this app

### 2.5 User Responsibility

You are responsible for:

- Checking in daily to prevent alerts
- Keeping emergency contact information up to date
- Informing your emergency contact that they may receive automated alerts
- Understanding that this is a supplemental tool, not a replacement for professional care

## 3. Privacy Policy

### 3.1 What Data We Collect

Between Days collects only the minimum data necessary to function. No accounts, passwords, or social logins are required.

**Stored on Device (Local Storage)**

- Your name (optional)
- Emergency contact email address
- Check-in history (last 30 check-in dates)
- Last check-in date and time
- App language preference
- Text/icon size preference
- Onboarding completion status

**Synced to iCloud**

To allow data recovery when reinstalling the app or switching devices, the following data is automatically synced to your personal iCloud account using iCloud Key-Value Storage:

- Your name (if provided)
- Emergency contact email address
- Last check-in date and time
- Check-in history (last 30 days)
- Consecutive missed days count (calculated value)
- App preferences (language, text size)

**Also Synced to CloudKit**

As an additional backup mechanism, your data is also synced to your private CloudKit database:

- Device identifier (anonymous UUID, not linked to your Apple ID)
- All data listed above in "Synced to iCloud"
- Sync timestamp

**Important:**
- Both iCloud Key-Value Storage and CloudKit data are tied to your Apple ID
- Only you can access this data across your devices
- We do not have access to your iCloud or CloudKit data
- Your data is stored in Apple's secure infrastructure

### 3.2 How Data Is Used

Your data is used exclusively for:

- Tracking your daily check-ins
- Calculating consecutive missed days
- Sending automated email alerts to your emergency contact when needed
- Syncing data to your personal iCloud account for backup and recovery across devices
- Personalizing app preferences (language, text size)

We do **not**:

- Sell your data to third parties
- Use your data for advertising
- Share your data except as described in this policy
- Track your location
- Access other apps or data on your device
- Access your iCloud or CloudKit data (it's encrypted and only accessible to you)

### 3.3 Email Sending Service

Automated alert emails are sent via SendGrid, a third-party email service provider, through our backend server.

**How it works:**

1. When the app detects you've missed 2+ consecutive days, it sends an escalation request to our server
2. Our server (hosted on Railway) processes the request and sends an email via SendGrid
3. The email is sent exclusively to your provided emergency contact

**Email contents:**

- Your name (if provided)
- Number of consecutive days missed
- Instructions for the recipient on what to do
- Automated "DO NOT REPLY" warnings
- Sent from: safety@betweendays.app

SendGrid processes the email content only for delivery purposes and does not use your data for other purposes.

### 3.4 Push Notifications

The app may send push notifications to remind you to check in. These require your permission and can be managed in your device settings. No personal data is collected for this feature.

### 3.5 Data Storage and Security

**Local Storage**

- Data is stored securely on your device using iOS UserDefaults
- Protected by your device's built-in security (passcode, Face ID, etc.)
- Automatically deleted when you uninstall the app

**iCloud Storage (Key-Value Storage & CloudKit)**

- Data is stored in your personal iCloud account (operated by Apple)
- Transmitted via encrypted connections
- Protected by your Apple ID password and two-factor authentication
- Persists even after deleting the app (to allow data recovery)
- Accessible only from devices signed in with your Apple ID
- Stored in Apple's secure data centers

**Backend Server (Railway)**

- Hosted on Railway's secure infrastructure
- Does not store your personal data permanently
- Only processes escalation email requests in real-time
- Communicates with SendGrid via secure API for email delivery

### 3.6 Data Retention

Your data is stored in multiple places with different retention policies:

**On Your Device**

- Data remains until you uninstall the app
- Uninstalling the app permanently deletes all local data

**In iCloud (Key-Value Storage & CloudKit)**

- Data persists even after deleting the app
- This allows data recovery if you reinstall the app
- Synchronized across all your devices signed in with the same Apple ID

**On Railway Server**

- No permanent data storage
- Escalation requests are processed in real-time and not retained

**To permanently delete all data:**

1. Open the app
2. Go to Settings
3. Use the "Reset All Data" option
4. Then uninstall the app

If you uninstall without resetting, data will remain in iCloud and will be restored if you reinstall the app with the same Apple ID.

**Note:** iCloud data is managed by Apple. Deleting data from our app removes it from iCloud Key-Value Storage and CloudKit, but Apple may retain backups according to their data retention policies.

### 3.7 Your Rights and Control

At any time, you can:

- View your stored information in the Settings screen
- Update your name or emergency contact email
- Modify app preferences (language, text size)
- Stop future alerts by removing the emergency contact email
- Delete all data using the "Reset All Data" option in Settings
- Request data deletion assistance by contacting support (see Section 8)

### 3.8 Third-Party Services

Between Days uses the following third-party services:

**iCloud (Apple)**

- Purpose: Cloud data storage and sync for backup and device-to-device sync
- Data shared: App data syncs to your personal iCloud account via Key-Value Storage and CloudKit
- Privacy policy: https://www.apple.com/legal/privacy/
- Note: This is your own iCloud account - we do not have access to this data

**Railway**

- Purpose: Backend server hosting for processing escalation email requests
- Data shared: Email address, name, missed days count (only when escalation is triggered)
- Data retention: No permanent storage - real-time processing only
- Privacy policy: https://railway.app/legal/privacy

**SendGrid (Twilio)**

- Purpose: Email delivery for alerts
- Data shared: Emergency contact email, your name, alert message content
- Privacy policy: https://www.twilio.com/legal/privacy

These services are bound by their own privacy policies. We choose trusted providers with strong privacy practices and enterprise-grade security.

### 3.9 Data Sharing and Disclosure

We do **not** sell or rent your data to third parties.

We may only disclose your information:

- To your designated emergency contact (as part of the alert email)
- To third-party service providers (Railway, SendGrid) to the extent necessary to deliver email alerts
- When required by legal process or statutory obligation
- To protect rights, property, or safety

**Note:** Your iCloud data is stored in your personal iCloud account and is not shared with us or third parties.

## 4. Children's Privacy

Between Days is not intended for users under 13 years old. We do not knowingly collect personal information from children under 13.

If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete it.

## 5. International Users

Your iCloud data is stored in Apple data centers, which may be located in different countries depending on your region and Apple ID settings. Our backend server (Railway) operates in various global regions. SendGrid's email service operates primarily in the United States.

By using the app, you consent to the processing of data as described in this policy. These countries may have different data protection laws than your country of residence.

**For users in China:** iCloud data is stored in Apple's data centers in China, operated by GCBD (Guizhou on the Cloud Big Data), in accordance with Chinese data protection regulations.

## 6. Changes to This Policy

We may update these Terms of Use and Privacy Policy from time to time. Changes will be indicated by updating the "Last updated" date at the top of this page.

Your continued use of the app after changes constitutes acceptance of the updated terms.

If significant changes affect your privacy rights, we will provide notice within the app when possible.

## 7. Your Consent

By downloading, installing, and using Between Days, you consent to:

- The collection and use of data as described in this policy
- Sending automated alerts to your emergency contact via our backend server
- Storing data in your personal iCloud account (Key-Value Storage and CloudKit)
- The terms and limitations described in Section 2

## 8. Contact

If you have questions, concerns, or requests regarding these terms or privacy practices, please contact:

**Between Days Support**
Email: avdev2024@gmail.com

**For data deletion requests**, you can delete all data directly from the app:

1. Open Settings
2. Scroll to the "Data" section
3. Tap "Reset All Data"

This will delete both local and iCloud data. We will respond to privacy inquiries within 30 days.

## 9. Legal Basis for Processing (GDPR)

If you are located in the European Economic Area (EEA), our legal basis for collecting and using your data is:

- **Consent:** You provide explicit consent by setting up an emergency contact
- **Legitimate interest:** Operating the core functionality of the app (check-in tracking)

You have the right to:

- Access your personal data
- Correct inaccurate data
- Delete your data ("right to be forgotten")
- Restrict or object to processing
- Data portability
- Withdraw consent at any time

To exercise these rights, contact us at avdev2024@gmail.com.

## 10. California Privacy Rights (CCPA)

If you are a California resident, you have the right to:

- Know what personal information we collect and how we use it
- Request deletion of your personal information
- Opt-out of the sale of personal information (**we do not sell your data**)
- Exercise your privacy rights without discrimination

To exercise these rights, contact us at avdev2024@gmail.com.

---

## Summary of Changes Made

### Features Page
- Changed "three consecutive days" to "two consecutive days" to match actual app behavior

### Terms & Privacy Policy
- Removed all Firebase/Firestore references (not used in this app)
- Added accurate information about iCloud Key-Value Storage
- Added accurate information about CloudKit (private database backup)
- Clarified Railway server processes requests in real-time (no permanent data storage)
- Explained the actual escalation flow: iOS app → Railway server → SendGrid → email
- Emphasized that iCloud/CloudKit data is in the user's personal Apple account
- Maintained consistency: alert triggered after missing 2 consecutive days, sent on day 3
