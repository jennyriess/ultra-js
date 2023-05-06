import useAsset from "ultra/hooks/use-asset.js";

export default function App() {
  console.log("Hello world!");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        <link rel="stylesheet" href={useAsset("/style.css")} />
      </head>
      <body>
        <main>
          <h1>
            <span></span>__<span></span>
          </h1>
          <p>
            Aloha, I'm{" "}
            <strong>Hapa Dev</strong>, a front-end developer from Honolulu, HI.
          </p>
          <p>
          This site is under construction, so feel free to follow me on twitter at <a href="https://twitter.com/thehapadev">@thehapadev</a> to follow my web3 journey.
          </p>
        </main>
      </body>
    </html>
  );
}
