import { Messages, db } from 'astro:db';


// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Messages).values([
		{
			message: "Hey there! Welcome to our chat app 👋",
			sender: "Alice",
			timestamp: new Date(Date.now() - 3600000),
			isOwn: false
		},
		{
			message: "Thanks! Love the design",
			sender: "You",
			timestamp: new Date(Date.now() - 1800000),
			isOwn: true
		},
		{
			message: "The gradient effects are really cool!",
			sender: "Alice",
			timestamp: new Date(Date.now() - 900000),
			isOwn: false
		}
	])
}
