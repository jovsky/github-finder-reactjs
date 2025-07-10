# 🔍 GitHub Finder React.js

A React.js single-page application (SPA) that allows you to search for GitHub users and view their public repositories. This project was developed as part of Gama Academy's Hiring Coders program.

## 🚀 Demo

🌐 **Live Demo:** [https://github-finder-jv.netlify.app/repositories](https://github-finder-jv.netlify.app/repositories)

## 📱 Features

- 🔍 Search for GitHub users by username
- 📋 Display all public repositories for the searched user
- 🎯 Direct links to each repository on GitHub
- ⚡ Fast and responsive user interface
- 🔄 Error handling for invalid usernames
- 📱 Mobile-friendly design

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **React Router DOM** - Navigation and routing
- **Axios** - HTTP client for API requests
- **Styled Components** - CSS-in-JS styling
- **GitHub API** - Data source for user repositories

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/joaovitor/github-finder-reactjs.git
cd github-finder-reactjs
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 How to Use

1. **Search for a User**: Enter a GitHub username in the search field on the home page
2. **View Repositories**: Press Enter or click the "Pesquisar" button to see the user's repositories
3. **Access Repositories**: Click on any repository name to open it directly on GitHub
4. **Navigate Back**: Use the "VOLTAR" button to return to the search page

## 📁 Project Structure

```
src/
├── App.js              # Main application component
├── Routes.js           # Application routing configuration
├── index.js           # Application entry point
├── style.css          # Global styles
└── pages/
    ├── home/
    │   ├── index.js    # Home page component
    │   └── styled.js   # Home page styles
    └── repositories/
        ├── index.js    # Repositories listing component
        └── styled.js   # Repositories page styles
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Removes the single build dependency (one-way operation)

## 🌟 Key Features Implementation

### User Search

- Real-time input validation
- Integration with GitHub API using Axios
- Error handling for non-existent users

### Repository Display

- Dynamic list rendering using React hooks
- Local storage for data persistence during navigation
- Direct links to GitHub repositories

### Navigation

- React Router DOM for seamless page transitions
- Browser history management
- Responsive navigation controls

## 🎨 Styling

This project uses **Styled Components** for component-level styling, providing:

- Scoped CSS styles
- Dynamic styling based on props
- Better maintainability and organization

## 📋 Future Improvements

- [ ] Add user profile information display
- [ ] Implement repository filtering and sorting
- [ ] Add pagination for users with many repositories
- [ ] Include repository statistics (stars, forks, language)
- [ ] Dark/light theme toggle
- [ ] Enhanced mobile responsiveness

## 🤝 Contributing

This project was created for educational purposes as part of Gama Academy's Hiring Coders program. The focus was on developing React.js skills and improving user experience with essential features.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This application focuses on functionality and React.js skill development rather than aesthetic design, emphasizing clean code practices and user experience.
