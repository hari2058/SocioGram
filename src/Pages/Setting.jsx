import { Button } from "../Components/Button";

export const Setting = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-5">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2"
            />
            <input
              type="text"
              placeholder="Username"
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Privacy</h2>
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
              Show profile to everyone
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
              Allow friend requests
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
              Show last seen
            </label>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <div className="flex flex-col gap-4">
            <Button text="Change Password" />
            <Button text="Deactivate Account" />

            

            

          </div>
        </section>

        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
