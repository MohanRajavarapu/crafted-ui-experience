import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import logo from '@/assets/Logo.png';
import { z } from 'zod';

const emailSchema = z.string().email('Invalid email address');
const passwordSchema = z.string().min(6, 'Password must be at least 6 characters');
const nameSchema = z.string().min(2, 'Name must be at least 2 characters');
const mobileSchema = z.string().min(10, 'Mobile number must be at least 10 digits').max(15, 'Mobile number must be less than 15 digits').regex(/^[0-9+\-() ]+$/, 'Invalid mobile number format');

const Auth = () => {
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  if (user) {
    navigate('/dashboard');
    return null;
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('signin-email') as string;
    const password = formData.get('signin-password') as string;

    try {
      emailSchema.parse(email);
      passwordSchema.parse(password);

      const { error } = await signIn(email, password);

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Sign in failed',
          description: error.message === 'Invalid login credentials' 
            ? 'Invalid email or password' 
            : error.message,
        });
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast({
          variant: 'destructive',
          title: 'Validation Error',
          description: err.errors[0].message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('signup-name') as string;
    const email = formData.get('signup-email') as string;
    const mobile = formData.get('signup-mobile') as string;
    const password = formData.get('signup-password') as string;
    const confirmPassword = formData.get('signup-confirm-password') as string;

    try {
      nameSchema.parse(fullName);
      emailSchema.parse(email);
      mobileSchema.parse(mobile);
      passwordSchema.parse(password);

      if (password !== confirmPassword) {
        toast({
          variant: 'destructive',
          title: 'Password mismatch',
          description: 'Passwords do not match',
        });
        setLoading(false);
        return;
      }

      const { error } = await signUp(email, password, fullName, mobile);

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Sign up failed',
          description: error.message === 'User already registered' 
            ? 'An account with this email already exists' 
            : error.message,
        });
      } else {
        toast({
          title: 'Account created!',
          description: 'Welcome to 360 VortexAI Forecasting Platform',
        });
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast({
          variant: 'destructive',
          title: 'Validation Error',
          description: err.errors[0].message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-primary/5">
      <Card className="w-full max-w-md shadow-2xl border-primary/10">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center">
            <img src={logo} alt="360 VortexAI" className="h-20 w-auto" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            AI Forecasting Platform
          </CardTitle>
          <CardDescription className="text-base">
            Sign in to access your demand forecasting dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    name="signin-email"
                    type="email"
                    placeholder="analyst@company.com"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    name="signin-password"
                    type="password"
                    placeholder="••••••••"
                    required
                    disabled={loading}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    name="signup-name"
                    type="text"
                    placeholder="John Doe"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    name="signup-email"
                    type="email"
                    placeholder="analyst@company.com"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-mobile">Mobile Number</Label>
                  <Input
                    id="signup-mobile"
                    name="signup-mobile"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    name="signup-password"
                    type="password"
                    placeholder="••••••••"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                  <Input
                    id="signup-confirm-password"
                    name="signup-confirm-password"
                    type="password"
                    placeholder="••••••••"
                    required
                    disabled={loading}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" onClick={() => navigate('/')} className="text-muted-foreground">
            ← Back to homepage
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
