import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import PrivateOutlet from './PrivateRoute';
import Loader from './Components/Loader';
import { Pathname } from './Pathname';
import Landing from './Views/beforeAuth/Landing/Landing';
import Login from './Views/beforeAuth/Login/index';

import './app.scss';

const Dashboard = React.lazy(() => import('./Views/afterAuth/Dashboard/Dashboard'));
const Orders = React.lazy(() => import('./Views/afterAuth/Orders/Orders'));
const Components = React.lazy(() => import('./Views/beforeAuth/Components'));
const NotFound = React.lazy(() => import('./Views/404'));




export function App() {
	return (
		<Suspense fallback={<Loader />}>
			<BrowserRouter>
				<Routes>
					<Route
						path={Pathname.LOGIN}
						element={<Login/>}
					/>
					<Route
						index
						path={Pathname.LANDING_PAGE}
						element={<Landing />}
					/>
					<Route path={Pathname.DASHBOARD} element={<PrivateOutlet />}>
						<Route index element={<Dashboard />} />
						<Route path='orders' element={<Orders />} />
						<Route path="*" element={<NotFound />} />
					</Route>
					<Route
						path={Pathname.COMPONENTS}
						element={<Components/>}
					/>
					<Route path="*" component={NotFound} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
