import React, { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showWelcome, setShowWelcome] = useState(false)

  React.useEffect(() => {
    setShowWelcome(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-md p-8 border border-gray-700">
        <div className="text-center mb-8">
          <h2
            className={`text-3xl font-bold text-white transition-all duration-700
              ${showWelcome ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
            `}
          >
            Welcome Back
          </h2>
          <p className="text-gray-400 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-200">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200 font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition duration-200">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
