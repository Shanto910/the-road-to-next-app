import Link from 'next/link';
import { ticketsPath } from '@/paths';

const HomePage = () => {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Home Page</h2>
				<p className="text-sm text-muted-foreground">This is the home page</p>
			</div>
			<div className="flex-1 flex flex-col items-center">
				<Link href={ticketsPath()} className="underline">
					Go to Tickets
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
