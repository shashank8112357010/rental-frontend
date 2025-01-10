import React, { useEffect, useState } from 'react';
import { UserChangePasswordService } from '../../services/api.service';

const ProfilePage = () => {
  const [user, setUser] = useState({
    isLoggedIn: true,
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  // const [user, setUser] = useState(null);

  const [bookings, setBookings] = useState([
    { id: 1, date: '2025-01-01', service: 'Car Registration' },
    { id: 2, date: '2025-01-05', service: 'License Renewal' },
  ]);

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [activeTab, setActiveTab] = useState('settings');
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const userData = localStorage.getItem("user");
  //   if (userData) {
  //     setUser(JSON.parse(userData));
  //   } else {
  //     setUser(null);
  //   }
  // }, []);

  const handlePasswordChange = () => {
    if (!password || !newPassword) {
      alert('Please fill out both fields.');
      return;
    }
    const data = { password, newPassword };
    console.log('Sending data:', data);

    UserChangePasswordService(data)
      .then((res) => {
        console.log(res)
        setPassword('');
        setNewPassword('');
        alert('Password updated successfully!');
      })
      .catch((err) => {
        console.log(err);
        alert(err.response?.data?.message || 'An error occurred while updating the password.');
      });
  };


  return (
    <div className="">
      <header className="mb-8 h-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Account</h1>
        <p className="text-gray-600">Switch between your settings, profile, and password options</p>
      </header>

      {/* Tab Navigation */}
      <div className="mb-6">
        <button
          onClick={() => setActiveTab('settings')}
          className={`mr-4 px-4 py-2 rounded ${activeTab === 'settings' ? ' bg-indigo-600 text-white' : 'bg-gray-200'}`}
        >
          Settings
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`mr-4 px-4 py-2 rounded ${activeTab === 'profile' ? ' bg-indigo-600 text-white' : 'bg-gray-200'}`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={`px-4 py-2 rounded ${activeTab === 'password' ? ' bg-indigo-600 text-white' : 'bg-gray-200'}`}
        >
          Change Password
        </button>
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {user.isLoggedIn ? (
        <>
          {activeTab === 'settings' && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Settings</h2>
              <p>Manage your account settings here.</p>
              {/* Add settings content here */}
            </section>
          )}

          {activeTab === 'profile' && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </section>
          )}

          {activeTab === 'password' && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Change Password</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="current-password">
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Enter your current password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="new-password">
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Enter your new password"
                />
              </div>
              <button
                onClick={handlePasswordChange}
                className=" bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-200"
              >
                Update Password
              </button>
            </section>
          )}
        </>
      ) : (
        <p>You need to log in to view this page.</p>
      )}
    </div>
  );
};

export default ProfilePage;
