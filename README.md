<div align="center">
  <br />
  <p>
    <img src="https://i.imgur.com/Xhguvlc.png" width="546" alt="Discord.js Bot Template" />
  </p>
</div>

## Setup

Create a new file called `.env` and insert your bot token as shown in the `.env.example` file. After that you specify the **guild id** of the server you want to use for guild commands in the `config.json` file. To install all required packages, run `npm i` in the bot's root directory. Now you can start the bot by running `node .` or use it with [PM2](https://pm2.keymetrics.io/) through `ecosystem.config.js`.

## Features

 - Slash Command / Context Menu Handler (Guild and Global)
 - Interaction Handler (Buttons, Select Menus, Modals)
 - Event Handler
 - Examples and Templates

<!-- 
## Modal Submit Bugfix (discord.js@dev)
### TypeError: createComponent is not a function

The current version of discord.js@dev throws an error when submitting a modal. The following steps will fix this issue until there is an update:

In
```bash
node_modules/discord.js/src/structures/ModalSubmitInteraction.js
```

change `createComponent(c)` to `Components.createComponent(c)`, which you want to require from `../util/Components`.

In

```bash
node_modules/discord.js/src/util/Components.js
```

add this to the bottom of the file

```js
const TextInputComponent = require('../structures/TextInputComponent');
```

and add the following case to the switch

```js
case ComponentType.TextInput:
  return new TextInputComponent(data);
```

This issue is mentioned in detail [here](https://github.com/discordjs/discord.js/pull/7649).
 -->