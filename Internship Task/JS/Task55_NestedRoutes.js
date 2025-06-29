import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <nav>
      <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
    </nav>
    <Outlet />
  </div>
);

const Profile = () => <h3>Profile Page</h3>;
const Settings = () => <h3>Settings Page</h3>;

const NestedRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default NestedRoutes;
