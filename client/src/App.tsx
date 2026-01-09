import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import  {Background}  from "./components/Background";

import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Background />
        {/* 🔔 UI */}
        <Toaster />

        {/* 📄 Pages */}
        <main className="relative z-10">
          <Router />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
