import React, { useEffect, useState } from 'react';
import { UserChangePasswordService } from '../../services/api.service';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    isLoggedIn: true,
    name: 'John Doe',
    email: 'john.doe@example.com',
  });
  // const [user, setUser] = useState({ name: '', email: '' });
  // const [user, setUser] = useState(null);

  // const [bookings, setBookings] = useState([
  //   { id: 1, date: '2025-01-01', service: 'Car Registration' },
  //   { id: 2, date: '2025-01-05', service: 'License Renewal' },
  // ]);

  const [oldPassword, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('settings');
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const name = localStorage.getItem("name");
  //   const email = localStorage.getItem("email");
  //   if (name && email) {
  //     setUser({ name, email });
  //   }
  // }, []);

  const handlePasswordChange = () => {
    if (!oldPassword || !newPassword) {
      alert('Please fill out both fields.');
      return;
    }
    const data = { oldPassword, newPassword };
    console.log('Sending data:', data);

    UserChangePasswordService(data)
      .then((res) => {
        console.log(res)
        // setPassword('');
        // setNewPassword('');
        toast.success('Password updated successfully!');
      })
      .catch((err) => {
        console.log(err);
        // alert(err.response?.data?.message || 'An error occurred while updating the password.');
      });
  };


  return (
    <div className="">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Manage Account</h1>
        <p className="text-white">Switch between your settings, profile, and password options</p>
      </header>

      {/* Tab Navigation */}
      <div className="mb-6 flex flex-wrap md:justify-start justify-center space-x-4 gap-4">
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 rounded ${activeTab === 'settings' ? 'bg-white text-black' : 'bg-white text-black'}`}
        >
          Settings
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={` px-4 py-2 rounded ${activeTab === 'profile' ? 'bg-white text-black' : 'bg-white text-black'}`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={`px-4 py-2  rounded ${activeTab === 'password' ? ' bg-whiet text-black' : 'bg-white text-black'}`}
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
              <div className="mb-4 relative">
                <label className="block text-sm font-medium text-white mb-1" htmlFor="current-password">
                  Current Password
                </label>
                <input
                  type={showOldPassword ? 'text' : 'password'}
                  id="current-password"
                  value={oldPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Enter your current password"
                />
                <button
                  type="button"
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="absolute top-8  right-3 flex items-center text-gray-500"
                >
                  {showOldPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
              <div className="mb-4 relative">
                <label className="block text-sm font-medium text-white mb-1" htmlFor="new-password">
                  New Password
                </label>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Enter your new password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute top-8 right-3 flex items-center text-gray-500"
                >
                  {showNewPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
              <button
                onClick={handlePasswordChange}
                className="bg-white text-black px-4 py-2 rounded transition duration-200"
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
