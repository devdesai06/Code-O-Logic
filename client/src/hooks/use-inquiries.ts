import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const validated = api.inquiries.submit.input.parse(data);
      const res = await fetch(api.inquiries.submit.path, {
        method: api.inquiries.submit.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        throw new Error('Failed to submit inquiry');
      }

      return api.inquiries.submit.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Transmission Received",
        description: "Your inquiry has been logged in the system. Our logic cores are processing it.",
        variant: "default",
        className: "bg-background border-cyan-500/50 text-cyan-50",
      });
    },
    onError: () => {
      toast({
        title: "Transmission Error",
        description: "Failed to send data packet. Please retry manually.",
        variant: "destructive",
      });
    }
  });
}
