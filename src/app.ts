import 'dotenv/config'
import { Client } from 'discord.js'
import interactionCreate from './listeners/interactionCreate'
import { Commands } from './cmdHandler'


const client = new Client({
    intents: []
})

client.once('ready', async() => {
    if(!client.user || !client.application) {
        return
    }

    console.log(`${client.user.username} is online`)

    await client.application.commands.set(Commands)
})

interactionCreate(client)

client.login(process.env.botToken)