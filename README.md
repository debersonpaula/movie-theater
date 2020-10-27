# Movie Theater

Installing dependencies
```sh
npm install
```

Run the application
```sh
npm start
```

# Main Tech used

- Create React App
- Axios, for http communications
- Material-UI (fastest reusable components)
- Typescript (I love strongly typed frameworks)

# My own frameworks

- Reactoom
    - NPM : https://www.npmjs.com/package/reactoom
    - Repo : https://github.com/debersonpaula/reactoom
    - State management framework, in alpha tests, based in my another state framework ExRedux (https://www.npmjs.com/package/exredux)

# Architecture

- Based on MVVM and structure to be Domain Driven, when the model acts as domain for business logics.
- The BaseHttpModel file is based on ExRedux custom plugin (https://github.com/debersonpaula/exredux/blob/master/src/custom/BaseHttpModel.ts), that helps to architect http calls and transform it in a domain class.

# API Test

If you have any problems with the API call, you can use the original "https://api.themoviedb.org/3" in the config.ts file, in the "src" folder.

I made the calls with the proxy due to CORS issue with the original URL.

If you have CORS issue, try to use chrome without security locks, changins the Chrome shortcut to:
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\Temp\Chrome"