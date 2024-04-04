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

Create an account, and proceed to create an organization, then move forward to create a project - keep whatever name you like for the project.
Go Ahead, and add a platform, Here we will be using a next.js application so go ahead a create a web platform and keep the hostname as ```localhost``` and then go to Dashboard.

Navigate to databases, and create a database ```tododb``` and create a collection ```todos```. Then, create two attributes - 
1) Go ahead and create a string attribute and keep the key ```name``` with whatever size Also, keep as a required attribute.
2) Create a second attribute as a integer and name it ```age``` with whatever size; Also, keep that as a required attribute.

You're done with Appwrite setup.

## Getting Started for next.js application

Install the dependencies, by running 
```
npm install 
```

Navigate to ```appwritetest.js``` and configure the keys in ```ProjectID```, ```DatabaseID```,```CollectionID``` from the appwrite application. Hard code the ```DocumentID``` to any name eg. ```document1```
Go to collection settings and set the permissions to ```any``` and select all that applies and update.

Once this is done, Go ahead and run
```
node appwritetest.js
```
Once, the code compiles, you will see the inserted values in the document section on the appwrite dashboard.