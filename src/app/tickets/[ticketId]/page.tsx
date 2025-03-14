interface ticketPageProps {
	params: {
		ticketId: string;
	};
}
const TicketPage = ({ params: { ticketId } }: ticketPageProps) => {
	return (
		<div>
			<h1 className="text-lg">Ticket Page {ticketId}</h1>
		</div>
	);
};

export default TicketPage;
