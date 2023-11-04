## Anime Quotes Generator

This is a React application that displays anime quotes when the "Generate" button is pressed. You can also find character-specific or anime-specific quotes. The app uses an external API from animechan to fetch the quotes.

**Features:**
* Generate random anime quotes
* Search for quotes by character or anime
* Save your favorite quotes
* Built with Tailwind CSS and Vite

**Usage:**
1. Clone the repository and run `npm install` to install the dependencies.
2. Start the development server with `npm run dev`.
3. Open the app in your browser at http://localhost:3000.
4. To generate a random quote, click the "Generate" button.
5. To search for quotes by character or anime, enter the name of the character or anime in the search bar and press "Enter".
6. To save a quote, click the "Save" button next to the quote.

**API:**
The app uses the following API from animechan to fetch the quotes:

```
https://animechan.vercel.app/api/random
```

This API returns a random anime quote in JSON format. The response includes the following fields:

* `quote`: The quote text.
* `character`: The name of the character who said the quote.
* `anime`: The name of the anime from which the quote comes.

**Development:**
To develop the app, you can use the following commands:

* `npm run dev`: Starts the development server.
* `npm run build`: Builds the production version of the app.
* `npm run preview`: Starts a production server for previewing the app.

**Deployment:**
To deploy the app, you can use the following steps:

1. Build the production version of the app with `npm run build`.
2. Deploy the built files to a web server.

**Contributing:**
If you would like to contribute to the app, please fork the repository and create a pull request with your changes.

**License:**
This app is licensed under the MIT License.

## Additional Notes:

* The app is built with Vite, which is a modern build tool for JavaScript and TypeScript applications.
* The app uses Tailwind CSS for styling. Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without writing any CSS.
* The app uses Axios for making HTTP requests to the animechan API.

## Feedback and Support:

If you have any feedback or need support for this project, please feel free to open an issue on GitHub.
