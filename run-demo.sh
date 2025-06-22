#!/bin/bash

# -------- CONFIG --------
REPO_URL="https://github.com/shayaan-git/Movie-App.git"
PROJECT_FOLDER_NAME="Movie-App"
TEMP_DIR="test-movie-app"
API_KEY="1117b6ac"  # Replace with your actual key

# -------- SCRIPT --------
echo "🚀 Creating temporary test directory..."
mkdir -p $TEMP_DIR
cd $TEMP_DIR || exit

echo "🔁 Cloning repo..."
git clone $REPO_URL

cd $PROJECT_FOLDER_NAME || { echo "❌ Failed to enter project folder"; exit 1; }

echo "🔐 Creating .env file..."
echo "REACT_APP_API_KEY=$API_KEY" > .env

echo "📦 Installing dependencies..."
npm install

echo "🚀 Starting the React app..."
npm start

