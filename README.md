## Getting Started for local installation of appwrite.io on Docker

First, run the following command:

For MAC run,
```bash
docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \
    --entrypoint="install" \
    appwrite/appwrite:latest
```
For Windows run,
```bash
docker run -it --rm ^
    --volume //var/run/docker.sock:/var/run/docker.sock ^
    --volume "%cd%"/appwrite:/usr/src/code/appwrite:rw ^
    --entrypoint="install" ^
    appwrite/appwrite:latest
```
*PS - Choose Default settings for Ports and API keys*

### Once the installation is done, appwrite will run on [http://localhost:80/](http://localhost:80/)

#### Initial Setup with Appwrite

1) Create an Account: Begin by registering or logging into your Appwrite account.
2) Set Up an Organization: Once logged in, create a new organization. You may choose any name that resonates with your project or team.
3) Create a Project: Within your organization, initiate a new project. Feel free to select any name that you prefer for this project.
4) Add a Platform: For this setup, we'll be focusing on a Next.js application. Proceed to add a web platform to your project and use localhost as the hostname.

#### Configuring Database

1) Navigate to the Database Section: In your project's dashboard, go to the databases area and create a new database named tododb.
2) Create a Collection: Within tododb, establish a new collection called todos.
3) Define Attributes:
* String Attribute: Add an attribute of type string named name. Set this as a required field. The size can be determined based on your needs.
* Integer Attribute: Add another attribute, this time of type integer, and name it age. Similarly, mark this as a required field with a size that suits your application.

Your Appwrite setup is now complete.

## Getting Started with Your Next.js Application

Clone this repository by running:
```
git clone https://github.com/chintakjoshi/appwrite_demo.git
```
Navigate to the root directory and run 
```
npm install
```
This will install necessary dependencies.

#### Configuration 

1) Prepare Configuration File: Open the appwritetest.js file to configure your project. You'll need to update the ProjectID, DatabaseID, and CollectionID with the values from your Appwrite project setup. Additionally, assign a fixed value to DocumentID, such as document1.
2) Set Collection Permissions: Access the settings of your todos collection and adjust the permissions to any. Ensure to select all applicable permissions before updating.

#### Running your application

To launch your Next.js application, run the following command in your terminal:
```
node appwritetest.js
```
After the command executes successfully, you can verify the insertion of values in the todos collection by checking the document section on the Appwrite dashboard.