const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

 async def status_task():
    while True:
        await client.change_presence(activity=discord.Game(name="Mega Man V"))
        await asyncio.sleep(300)
        await client.change_presence(activity=discord.Game(name="With The Stardroids"))
        await asyncio.sleep(300)
        await client.change_presence(activity=discord.Game(name="With Celeste"))
        await asyncio.sleep(300)
        await client.change_presence(activity=discord.Game(name="Painting"))
        await asyncio.sleep(300)
        await client.change_presence(activity=discord.Game(name="Mega Man 8 Bit Deathmatch"))
        await asyncio.sleep(300)

client.on('message', message => {
    if (message.content === 'ping') {
       message.send('pong');
     
       }
client.on('message', message => {
    if (message.content === 'Ter!invite') {
       message.send('https://discord.com/api/oauth2/authorize?client_id=806289324877283328&permissions=8&scope=bot');
       }
client.on('message', message => {
    if (message.content === 'Eris') {
       message.send('She`s nice.');
       }
client.on('message', message => {
    if (message.content === 'Celeste') {
       message.send('Wha? Uh, please don`t bring her up, please. Its not like I sleep with her or anything of the sort...');
       }
	if message.content.upper().startswith('TER!HUG'):
        userID = message.author.id
        normal_hugs = ["Ugh, fine I guess your my little pogchamp come here! *hugs <@%s>"*]
	elif len(message.content.split(" ")) == 1:
            await asyncio.sleep(1)
            await channel.trigger_typing()
            await asyncio.sleep(1)
            await channel.send(normal_hugs) % (userID))
        else:
            mentioned_hugs = ["Ugh, fine I guess your my little pogchamp come here! *hugs %s*"]
            member = message.content.split(" ")[1]
            if member == member == "yourself" or member == '<@436351740787294208>':
                await asyncio.sleep(1)
                await channel.trigger_typing()
                await asyncio.sleep(1)
            else:
                await asyncio.sleep(1)
                await channel.trigger_typing()
                await asyncio.sleep(1)
                await channel.send(mentioned_hugs) % (member))
	}
       });

// THIS  MUST  BE  THIS  WAY
client.login(.listen(process.env.PORT || 5000));//BOT_TOKEN is the Client Secret
