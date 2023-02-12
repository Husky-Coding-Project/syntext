# Setting up your server directory

### Prerequisites
- Download MySQL 
- Add REST Client as an extension (should be the first result)

Navigate inside of syntext (or whatever you named your root directory) and do the following

1. Inside of terminal, run `cd server` from the root directory. 
2. Run `npm install` to make sure you have all the required dependencies
3. Inside of the server directory, create a file named '.env' and add the following credentials:
    - PORT = 3001
    - MYSQL_HOST = 127.0.0.1
    - MYSQL_USER = root (or whatever you use)
    - MYSQL_PASSWORD = (your password for MySQL goes here)
    - MYSQL_DATABASE = syntext
4. Run `npm start`, and you should see the PORT specified in your .env file. If it says the server started on port undefined, make sure that you saved the file. If this doesn't work, try to run `npm i dotenv`
5. If you haven't already, make sure a local MySQL server is running on the specified host in your .env file