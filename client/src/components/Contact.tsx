import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useSubmitInquiry } from "@/hooks/use-inquiries";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const mutation = useSubmitInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#05060A] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              INITIATE <span className="text-cyan-400">SEQUENCE</span>
            </h2>
            <p className="text-gray-400">
              Ready to automate? Send us a signal. We respond within 24 hours.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Identity</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" 
                          {...field} 
                          className="bg-white/5 border-white/10 focus:border-cyan-500 text-white placeholder:text-gray-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Comms Link</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="name@company.com" 
                          {...field} 
                          className="bg-white/5 border-white/10 focus:border-cyan-500 text-white placeholder:text-gray-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400">Organization (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Company Name" 
                        {...field} 
                        value={field.value || ""}
                        className="bg-white/5 border-white/10 focus:border-cyan-500 text-white placeholder:text-gray-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400">Mission Parameters</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your automation needs..." 
                        {...field} 
                        className="bg-white/5 border-white/10 focus:border-cyan-500 text-white placeholder:text-gray-600 min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full py-4 rounded bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold font-display uppercase tracking-widest hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    SEND TRANSMISSION
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
