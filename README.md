# Mi Ciudadano: U.S. Citizenship Test Practice

An interactive web application designed to help users prepare for the U.S. Citizenship Test. Built with Angular and featuring a military-inspired design theme, this application provides an engaging way to practice citizenship test questions.

🌐 **Live Demo**: [https://citzpractest.web.app](https://citzpractest.web.app)

## Features

### Dynamic State-Specific Content
- **State Officials Integration**:
  - Select your state to see state-specific answers
  - Dynamic updates for Governor, Senators, and Representatives
  - Persistent state selection across sessions
  - Real-time answer updates when changing states

### Practice Modes
- **Custom Practice**: Choose your own number of questions for focused study sessions
- **Random Practice**: Quick-start option that generates a random number of questions (1-100)
- **Interactive Question Cards**: 
  - Flip animation for question/answer reveal
  - Visual bookmark indicator for flagged questions
  - Scrollable answer content for longer answers
  - Correct/incorrect response tracking
  - Gold star indicators for correct answers
  - Dynamic answers based on selected state

### Progress Tracking
- **Overall Progress Dashboard**:
  - Visual progress bars for overall completion
  - Category-based progress tracking
  - Questions mastered per category
  - Success rate indicators with gold highlights
  - Performance analytics with visual feedback

### Performance Analytics
- **Detailed Statistics**:
  - Track correct and incorrect attempts
  - Monitor success rates for each question
  - Filter questions by performance (all/correct/incorrect)
  - Gold star indicators for mastered questions
  - Reset statistics option

### Study Materials
- **Bilingual Study Guide Export**:
  - Generate comprehensive study guides in both English and Spanish
  - Session summary with performance metrics
  - Complete question history
  - Detailed review of incorrect answers
  - Clear separation between languages
  - Downloadable text format for easy access

### Session Management
- **Flexible Session Control**:
  - Start custom practice sessions
  - Quick-start random sessions
  - Exit session anytime with progress saved
  - Detailed session results summary
  - Export session results in multiple languages
- **Progress Persistence**: Statistics and progress saved locally

### User Interface
- **Modern Military Theme**:
  - Clean, professional design
  - Gold accents for achievements and correct answers
  - Responsive layout for all devices
  - Intuitive navigation
  - Visual feedback and animations
  - Shimmer effects on important elements
- **Footer Disclaimer**:
  - Version information display
  - Last data update timestamp
  - Educational purpose disclaimer
  - USCIS verification reference

### Content Organization
- **Comprehensive Question Categories**:
  - Principles of American Democracy
  - System of Government
  - Rights and Responsibilities
  - Colonial Period and Independence
  - Geography
  - Symbols and Holidays
  - Recent American History

## Getting Started

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd mi-ciudadano
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

The application is deployed using Firebase Hosting. There are three ways to deploy:

### Automated Deployment (Recommended)

The application automatically deploys to Firebase when changes are pushed to the main branch, using GitHub Actions. The workflow:
1. Builds the application
2. Runs tests
3. Deploys to Firebase Hosting

To set this up:
1. Fork/clone the repository
2. Set up the `FIREBASE_SERVICE_ACCOUNT_CITZPRACTEST` secret in your GitHub repository:
   - Go to Firebase Console > Project Settings > Service Accounts
   - Generate a new private key
   - In your GitHub repo: Settings > Secrets > Actions > New Secret
   - Name: `FIREBASE_SERVICE_ACCOUNT_CITZPRACTEST`
   - Value: Paste the entire JSON content

### Quick Deploy (Local)

For local deployment, after setting up Firebase (steps 1, 2, and 4 below), you can deploy with:
```bash
npm run deploy
```

### Manual Deploy

If you need more control over the deployment process:

1. Install Firebase CLI:
```bash
firebase install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Build the production version:
```bash
ng build --configuration production
```

4. Configure Firebase hosting (if not already configured):
```bash
firebase init hosting
```
   - For the public directory, use: `dist/mi-ciudadano/browser`
   - Configure as a single-page app: Yes
   - Set up automatic builds and deploys with GitHub: No

5. Deploy to Firebase:
```bash
firebase deploy --only hosting
```

The application will be deployed to [https://citzpractest.web.app](https://citzpractest.web.app)
