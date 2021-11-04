
import ErrorBoundary from '../ErrorBoundries/ErrorBoundries';
import React from 'react';

const Main = React.lazy(() => import('../components/main/Main'));

const Home: React.FC = () => {
	return (
		<>
			
			<ErrorBoundary>
				<React.Suspense fallback={<p>loading...</p>}>
					<Main />
				</React.Suspense>
			</ErrorBoundary>

		</>
	);
};

export default Home;
