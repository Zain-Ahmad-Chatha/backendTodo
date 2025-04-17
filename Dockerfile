# Use an official Node.js runtime as a parent image
FROM node:16 as base

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of your app's code
COPY . .

# Expose the port that your app will run on
EXPOSE 3000

# Run your app when the container starts
CMD ["node", "index.js"]