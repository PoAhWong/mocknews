# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

1. Install Git and the Xcode command line tools

   Try running this command. You should be prompted to install the Xcode Command Line Tools.
    ```bash
    git --version
    ```

   Otherwise, you can [install Git (and the Xcode Command Line Tools) from a binary installer](https://git-scm.com/download/mac).

1. Clone the Repo

    ```bash
    git clone git@gitlab.com:msts-enterprise/caas/caas.git
    ```

1. Install [Docker for Mac](https://www.docker.com/docker-mac)

   Here is the direct download link, so you don't need to create a Docker Hub account.

   TODO: Change link to point to version supported by CI
   https://download.docker.com/mac/stable/Docker.dmg

1. Install a postgres client

    For Mac

    ```bash
    brew install postgres
    ```

    For WSL

    ```bash
    sudo apt install postgresql
    ```

    For more information on installing postgres clients, check out
    https://www.postgresql.org/download/

1. Install aws-mfa
   ```bash
   brew install python3
   ```
   ```bash
   pip3 install aws-mfa
   ```
   Create aws credentials file  (located at ~/.aws/credentials), following is an example of your credentials configuration
   ```ini
   [default-long-term]
   aws_access_key_id = YOUR_LONGTERM_KEY_ID
   aws_secret_access_key = YOUR_LONGTERM_ACCESS_KEY
   ```


1. Install aws-cli Version 1
   ```bash
   pip3 install awscli==1.16.312 --upgrade --user
   ```

   Verify that the AWS CLI is installed correctly
   ```bash
   aws --version
   ```
   If the program isn't found, add it to your command line path.


