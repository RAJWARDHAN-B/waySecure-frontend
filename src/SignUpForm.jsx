const SignUpForm = () => {
    return (
      <div className="w-full max-w-md bg-black p-6 rounded-lg shadow-lg mx-auto">
        <h1 className="text-2xl font-bold text-white text-center">Create an account</h1>
        <p className="text-gray-400 text-center mb-6">Join us by signing up</p>
  
        {/* Name Field */}
        <div className="flex flex-col mb-3">
          <label className="text-white mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 rounded-md bg-black text-white border border-gray-600 outline-none"
          />
        </div>
  
        {/* Email Field */}
        <div className="flex flex-col mb-3">
          <label className="text-white mb-1">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-md bg-black text-white border border-gray-600 outline-none"
          />
        </div>
  
        {/* Password Field */}
        <div className="flex flex-col mb-3">
          <label className="text-white mb-1">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="p-2 rounded-md bg-black text-white border border-gray-600 outline-none"
          />
        </div>
  
        {/* Sign Up Button */}
        <button className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-blue-700">
          Sign Up
        </button>
  
        {/* Already have an account? */}
        <p className="text-gray-400 text-sm text-center mt-4">
          Already have an account? <a href="/login" className="text-blue-400">Log In</a>
        </p>
      </div>
    );
  };
  
  export default SignUpForm;
  