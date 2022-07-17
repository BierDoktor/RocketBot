import { BaseCommandInteraction, Client } from 'discord.js'
import { iCommand } from '../interfaces/iCommand'

export const getTrades: iCommand = {
    name: 'trades',
    description: 'returns all active trades',
    type: 'CHAT_INPUT',
    run:async (client: Client, interaction: BaseCommandInteraction) => {
        const content = 'yep'

        await interaction.followUp({
            ephemeral: true,
            content
        })
    }
} 