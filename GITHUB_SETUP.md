# Setting Up Your GitHub Repository

Follow these steps to create a GitHub repository for your portfolio website:

## 1. Create a New Repository on GitHub

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "portfolio-website" or "lavish-portfolio")
4. Add a short description: "My personal portfolio website showcasing skills and projects"
5. Choose "Public" visibility (or Private if you prefer)
6. Select "Initialize this repository with a README" (optional, as we've already created one)
7. Click "Create repository"

## 2. Push Your Local Project to GitHub

### If you've created a new empty repository:

1. From your terminal, navigate to your project directory:
   ```bash
   cd path/to/your/project
   ```

2. Initialize a Git repository if you haven't already:
   ```bash
   git init
   ```

3. Add your files to the staging area:
   ```bash
   git add .
   ```

4. Commit your changes:
   ```bash
   git commit -m "Initial commit: Portfolio website"
   ```

5. Link your local repository to the GitHub repository:
   ```bash
   git remote add origin https://github.com/your-username/your-repository-name.git
   ```

6. Push your code to GitHub:
   ```bash
   git push -u origin main
   ```
   (or `master` instead of `main` depending on your default branch name)

### If you've downloaded your project from Replit:

1. Create a new folder on your computer
2. Extract all files from the downloaded zip into this folder
3. Open a terminal and navigate to this folder
4. Then follow steps 2-6 above

## 3. Verify Your Repository

1. Go to your GitHub repository URL: `https://github.com/your-username/your-repository-name`
2. Make sure all your files appear there
3. Check that your README.md is displayed on the repository home page

## 4. Set Up GitHub Pages (Optional)

If you want to deploy your portfolio website directly from GitHub:

1. In your repository, go to "Settings"
2. Scroll down to "GitHub Pages" section
3. Under "Source", select "main" branch (or whichever branch contains your website files)
4. Choose the root folder (usually "/") or "/docs" if you've organized your files that way
5. Click "Save"
6. Wait a few minutes for your site to deploy
7. GitHub will provide you with a URL where your site is published (e.g., `https://your-username.github.io/your-repository-name`)

## 5. Update Repository Links

Once your repository is set up, remember to update any repository links in your project:

1. In your README.md file, update the clone URL:
   ```
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. In your project's package.json, update the repository field if it exists

## Best Practices for Maintaining Your Repository

1. Keep your commits meaningful and descriptive
2. Use feature branches for new additions
3. Update your README.md as your project evolves
4. Add relevant tags to make your repository discoverable
5. Respond to issues and pull requests in a timely manner

Good luck with your GitHub repository setup! If you have any questions, feel free to refer to [GitHub's documentation](https://docs.github.com/).