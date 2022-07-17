import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from 'discord.js'

export interface iCommand extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: BaseCommandInteraction) => void
}