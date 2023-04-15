# Meme Generator

### Live Page: https://meme-generator-tsv.netlify.app/

![image](https://user-images.githubusercontent.com/113384739/232239000-34453e62-a1b4-4b7c-a408-4975971ee699.png)


This is a simple React application that allows you to generate custom memes by adding text to popular meme image templates.

Type your text into the top and bottom input fields.

Click the "Get a new meme image" button to generate a new meme with your custom text.

## Installation

To install the app, clone the repository to your local machine and run npm install to install the necessary dependencies.

```bash
git clone https://github.com/tsv-stacks/react-meme-generator
cd react-meme-generator
npm install
```

Run `npm start` to start the development server.

## Concepts Covered

This app uses React core concepts and helped me learn:

- _State and Props_: The application uses React state to manage the meme image, top text, and bottom text, which are passed to child components as props.
- _Axios and API calls_: The application uses the Axios library to make HTTP requests to the Imgflip API
- _React useEffect_: The application uses the useEffect hook to fetch the list of meme templates from the Imgflip API when the component mounts.
- _Event handling_: The application uses event handlers to update the state of the meme image and text fields when the user interacts with the form.
