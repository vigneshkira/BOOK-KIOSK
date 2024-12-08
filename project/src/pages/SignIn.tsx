import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Apple, Facebook, Mail } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useAuthStore } from '../store/useAuthStore';

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const signIn = useAuthStore((state) => state.signIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Sign in to continue</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex items-center justify-between">
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot Password?
            </a>
          </div>

          <Button type="submit" fullWidth>
            Sign In
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" type="button">
              <Apple className="w-5 h-5" />
            </Button>
            <Button variant="outline" type="button">
              <Mail className="w-5 h-5" />
            </Button>
            <Button variant="outline" type="button">
              <Facebook className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a
              href="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Create Account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};