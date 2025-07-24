'use client';

import AuthForm from "@/components/auth/AuthForm";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const { signup, isLoading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (formData: any) => {
    setError(null);
    try {
      await signup(formData.email, formData.password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to create account.');
    }
  };

  return (
    <AuthForm 
      isLogin={false}
      onSubmit={handleSignup}
      isLoading={isLoading}
      error={error}
    />
  );
}
