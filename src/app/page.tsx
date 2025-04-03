import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600">MikeyFit</span>
        <div className="space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">Testimonials</Button>
          <Button variant="ghost">Contact</Button>
          <Button variant="default">Book a Session</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Train with <span className="text-blue-600">Mikey Eckmen</span>
          </h1>
          <p className="text-xl text-slate-700">
            Ready to transform your life with fun, personalized fitness? Let's make your fitness journey enjoyable and effective!
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Start Your Journey</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-full bg-blue-200 flex items-center justify-center overflow-hidden">
            {/* This is a placeholder for a profile image */}
            <div className="absolute inset-4 rounded-full bg-blue-100 flex items-center justify-center text-7xl font-bold text-blue-600">
              ME
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Why Train With Me?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Fun Workouts</h3>
                <p className="text-slate-600">
                  Training doesn't have to be boring! My sessions are designed to be enjoyable while still delivering results.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Personalized Plans</h3>
                <p className="text-slate-600">
                  Every body is different. I create custom plans that fit your unique needs, goals, and lifestyle.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-4.138-3.448m0 0a9.027 9.027 0 0 0 1.652-1.306 9.014 9.014 0 0 0 1.306-1.652M4.33 16.712a9.014 9.014 0 0 1 0-9.424m0 9.424a9.027 9.027 0 0 1-1.306-1.652c-.51-.51-.944-1.064-1.306-1.652m0 0 4.138-3.448m0 0a9.014 9.014 0 0 1 9.424 0m-9.424 0a9.027 9.027 0 0 0-1.652 1.306 9.014 9.014 0 0 0-1.306 1.652" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Ongoing Support</h3>
                <p className="text-slate-600">
                  Get high quality support and motivation to keep you accountable and excited about your fitness journey.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
