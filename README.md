# Discord.js v13 Bot Template

## Setup

Create a new file named `.env` and insert your bot token as shown in the `.env.example` file. After that you specify the **guild id** of the server you want to use for guild commands in the `config.json` file. To install all the required packages, run the `npm i` command in the bot's root directory. Now you can start the bot by running `node .` or use it with [PM2](https://pm2.keymetrics.io/) through `ecosystem.config.js`.

## Features

 - Slash Command Handler (Guild and Global)
 - Message Component Handler (Buttons, Select Menus)
 - Event Handler
 - Template Commands and Interactions

## FAQ

**Where can I set a Command to Guild or Global?**
*Each command has the `global` attribute, which can be set to **true** or **false**.*

**How can I respond to Message Component Interactions?**
*For example, after assigning a **Custom Id** to a button, you can create a file in the `/components` folder following the scheme of `exampleButton.js` and specify the Custom Id as the `id`. Now you can respond to that interaction as shown in the file.*

## Helpful links
- https://discord.js.org
- https://discordjs.guide
