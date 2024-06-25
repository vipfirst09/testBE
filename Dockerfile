# Dockerfile

# Use the official Node.js image as a base image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 (Nest.js default port)
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:dev"]
