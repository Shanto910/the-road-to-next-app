import { LucideCircleCheck, LucideFileText, LucidePencil } from 'lucide-react';
import Link from 'next/link';
import Heading from '@/components/Heading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

const TICKET_ICONS = {
	OPEN: <LucideFileText />,
	IN_PROGRESS: <LucidePencil />,
	DONE: <LucideCircleCheck />,
};
const TicketsPage = () => {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<Heading title="Tickets Page" description="All the tickets in one place" />

			<div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
				{initialTickets.map(ticket => (
					<Card key={ticket.id} className="max-w-[420px] w-full ">
						<CardHeader>
							<CardTitle className="flex gap-x-2 items-center">
								<span>{TICKET_ICONS[ticket.status]}</span>
								<h3 className="text-lg truncate">{ticket.title}</h3>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="line-clamp-3 whitespace-break-spaces">{ticket.content}</p>
						</CardContent>
						<CardFooter>
							<Link href={ticketPath(ticket.id)} className="text-sm underline">
								View
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default TicketsPage;
