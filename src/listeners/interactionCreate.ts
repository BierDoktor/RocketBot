import { BaseCommandInteraction, Client, Interaction } from "discord.js"
import { Commands } from "../cmdHandler"

export default (client: Client): void => {
    client.on('interactionCreate', async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenu()) {
            await handleCmd(client, interaction)
        }
    })
}

const handleCmd = async (client: Client, interaction: BaseCommandInteraction): Promise<void> => {
    const cmd = Commands.find(c => c.name === interaction.commandName)

    if (!cmd) {
        interaction.followUp({ content: 'an error has occurred' })
        return
    }

    await interaction.deferReply()

    cmd.run(client, interaction)
}