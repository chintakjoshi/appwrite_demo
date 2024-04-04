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

### Once the installation is done, appwrite application will run on [http://localhost:80/](http://localhost:80/)
