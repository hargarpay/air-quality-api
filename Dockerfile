# Base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install --only=production

# Copy app source code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["yarn", "start:prod"]