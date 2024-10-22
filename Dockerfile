# Use Node.js as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files
COPY . .

# Build the Astro site
RUN npm run build

# Expose the port and start the app
EXPOSE 3000
CMD ["npx", "serve", "dist"]
