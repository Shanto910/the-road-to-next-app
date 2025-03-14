import { initialTickets } from '@/data';
interface ticketPageProps {
	params: {
		ticketId: string;
	};
}
const TicketPage = ({ params: { ticketId } }: ticketPageProps) => {
	const ticket = initialTickets.find(ticket => ticket.id === ticketId);

	if (!ticket) {
		return (
			<div>
				<h1 className="text-lg">Ticket not found</h1>
			</div>
		);
	}
	return (
		<div>
			<h1 className="text-lg">{ticket.title}</h1>
			<p className="text-sm">{ticket.content}</p>
		</div>
	);
};

export default TicketPage;
