import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATHS } from './paths';
import PublicRouteWrapper from './WrapperRoutes/publicRouteWrapper';
import CommonLayout from '../Components/Layouts/commonLayout';
import MainLoader from '../Components/Shared/Loaders/mainLoader';
import PrivateRouteWrapper from './WrapperRoutes/privateRouteWrapper';

const Login = React.lazy(() => import('../Pages/Login/login'));
const Register = React.lazy(() => import('../Pages/Register/register'));
const Welcome = React.lazy(() => import('../Pages/Welcome/welcome'));
const How = React.lazy(() => import('../Pages/Static/how'));
const Features = React.lazy(() => import('../Pages/Static/features'));
const About = React.lazy(() => import('../Pages/Static/about'));
const Dashboard = React.lazy(() => import('../Pages/Dashboard/dashboard'));
const Winnings = React.lazy(() => import('../Pages/Winnings/userWinnings'));
const Bank = React.lazy(() => import('../Pages/Bank/bank'));
const ScheduledQuizes = React.lazy(
  () => import('../Pages/Quizes/ScheduledListing/scheduledQuizes')
);

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<MainLoader />}>
        <CommonLayout>
          {/* Layout will be here. */}
          <Routes>
            <Route
              path={PATHS.DEFAULT}
              element={<PublicRouteWrapper element={<Welcome />} />}
            />
            <Route
              path={PATHS.LOGIN}
              element={<PublicRouteWrapper element={<Login />} />}
            />
            <Route
              path={PATHS.REGISTER}
              element={<PublicRouteWrapper element={<Register />} />}
            />
            <Route
              path={PATHS.HOW}
              element={<PublicRouteWrapper element={<How />} />}
            />
            <Route
              path={PATHS.FEATURES}
              element={<PublicRouteWrapper element={<Features />} />}
            />
            <Route
              path={PATHS.ABOUT}
              element={<PublicRouteWrapper element={<About />} />}
            />
            {/* Private Routing */}
            <Route
              path={PATHS.DASHBOARD}
              element={<PrivateRouteWrapper element={<Dashboard />} />}
            />
            <Route
              path={`${PATHS.WINNINGS}/:id`}
              element={<PrivateRouteWrapper element={<Winnings />} />}
            />
            <Route
              path={`${PATHS.BANK_DETAILS}/:id`}
              element={<PrivateRouteWrapper element={<Bank />} />}
            />
            <Route
              path={`${PATHS.SCHEDULED_QUIZES}/:id`}
              element={<PrivateRouteWrapper element={<ScheduledQuizes />} />}
            />
          </Routes>
        </CommonLayout>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
