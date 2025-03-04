import { IContact } from "../lib/data";

export const emailTemplate = (data: IContact) => {
  const { name, email, message } = data || {};
  return;
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nayem Shanto</title>

    <style type="text/css">
      body {
        font-family: arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #f0f0f0;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>${name}</h1>
      <h2>${email}</h2>
      <h2>${phone}</h2>
      <p>${message}</p>
    </main>
  </body>
</html>`;
};
