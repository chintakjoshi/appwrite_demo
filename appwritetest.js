import { Client, Databases } from 'appwrite';

const client = new Client();
const ProjectID = '660f17e7002e2873b038'; //your project id
const DatabaseID = '660f21360004c2fe2848'; // your database id
const CollectionID = '660f214f0022d6f41f2f'; // your collection id
const DocumentID = 'document1'; //keep any name of the document

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