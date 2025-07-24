'use client';

import AuthForm from "@/components/auth/AuthForm";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (formData: any) => {
    setError(null);
    try {
      await login(formData.email, formData.password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to log in.');
    }
  };

  return (
    <AuthForm 
      isLogin={true}
      onSubmit={handleLogin}
      isLoading={isLoading}
      error={error}
    />
  );
}
