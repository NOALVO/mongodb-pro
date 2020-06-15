# mongodb-pro
A wrapper that encapsulates MongoDB Node.js driver, mongo-xcollection and other useful features.

## Example

```javascript
const db = await MongoDb.connect('mongodb://yourconnectionstring', 'dbname');

const dbrother = db.siblingDb('dbname2');

const Users = db.xcollection('users');
const users = Users.find({});

db.close();
```

## See also

[mongodb-xcollection](https://github.com/NOALVO/mongodb-xcollection#readme)