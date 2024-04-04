import { Client, Databases } from 'appwrite';

const client = new Client();
const ProjectID = '660efe2c001d8032ee05';
const DatabaseID = '';
const CollectionID = '';
const DocumentID = '';

client
    .setEndpoint('http://localhost/v1')
    .setProject(ProjectID);

const databases = new Databases(client);
const promise = databases.createDocument(DatabaseID, CollectionID, DocumentID ,
{
    name: "Chintak",
    age: 24
}
);

promise.then(function (response) {
    console.log(response); //success
}, function(error) {
    console.log(error); //error
});