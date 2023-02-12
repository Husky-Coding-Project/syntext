# Front-End Development Server/devAPI Setup

With the root directory for syntext open in terminal, run the following commands

1. `cd server`
2. `npm run dev`

You should see that the server is running on port 3001

Now, you can make requests to our devAPI, which is really just some hard-coded JSON data that you can request via the /devapi/ex endpoint.

This endpoint lets you request a random snippet (from the hardcoded examples in the example_data directory) by providing length as a query parameter. 

## Example:
 [http://localhost:3001/devapi/ex/random?length=SHORT](http://localhost:3001/devapi/ex/random?length=SHORT)


# devAPI 

*Note that I am using relative URLs. Just append the relative URL to* [http://localhost:3001](http://localhost:3001)

For now, we only need two endpoints, but this might change when we add additional features. 

|Request Type | Endpoint | Params | Values |
|-------------|---------------------|----------|----------------------|
|GET request | `/devapi/ex` | id | any existing snippet id |
|GET request | `/devapi/ex/random`| length | SHORT, MED, LONG|


The length param takes values of 'SHORT', 'MED', 'LONG', but only validates the first character. Thus, you can use 'S', 's', 'soggy', 'sensual', 'sigma', ect. for 'SHORT'. The same goes for 'MED' and 'LONG'.


# Using the devAPI on the front-end
Use axios to make GET requests to the devAPI on the front-end. Preferably we will do this in its own module, but it also works directly in react components! **Don't forget to start your devserver**

### Using axios directly in a component
```
const axios = require('axios');

...
...
...

const url = const url = 'http://localhost:3001/devapi/ex/random'

const MyComponent = (props) => {
    const [currSnippet, setCurrSnippet] = useState('');
    
    useEffect(() => {
        axios.get(`${url}?length=S`)
            .then(res => {
                setCurrSnippet(res.data)
            })
    }, [])

    return (...)
}
```

### Using axios within a wrapper function 
```
const axios = require('axios');

const url = 'http://localhost:3001/devapi/ex'

const getSnippetByID = (id) => {
    const req = axios.get(`${url}?id=3`);
    return req.then(res => res.data)
}

export default {getSnippetByID};
```




