import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('660efe2c001d8032ee05');

const databases = new Databases(client);
const promise = databases.createDocument('660f0123002ed7f863dd', '660f01320018e19a0342', "documentid12" ,
{
    name: "Daniel",
    age: 25
}
);

promise.then(function (response) {
    console.log(response); //success
}, function(error) {
    console.log(error); //error
});