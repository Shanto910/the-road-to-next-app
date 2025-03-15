import Link from 'next/link';
import Heading from '@/components/Heading';
import { ticketsPath } from '@/paths';

const HomePage = () => {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<Heading title="Home Page" description="This is the home page" />

			<div className="flex-1 flex flex-col items-center">
				<Link href={ticketsPath()} className="underline">
					Go to Tickets
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
