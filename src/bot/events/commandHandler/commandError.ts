import { Listener, Command } from 'discord-akairo';
import { CourseClient } from '../../client/CourseClient';
import { Message } from 'discord.js';

export default class CommandError extends Listener {
  public client: CourseClient;

  public constructor() {
    super('commandError', {
      event: 'error',
      emitter: 'commandHandler',
      category: 'commandHandler',
    });
  }

  public exec(error: Error, message: Message, command: Command) {
    return this.client.logger.error(`Command/Inihibitor ${command} has errored. ${error}`);
  }
}
