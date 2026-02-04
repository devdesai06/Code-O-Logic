import { motion } from "framer-motion";
import { Check, Zap, Layers, MousePointer2 } from "lucide-react";
const forWho = [
  "You run a factory, service business, or operations-heavy company",
  "Daily work depends on WhatsApp, Excel, calls, and manual follow-ups",
  "Things slip through the cracks when people forget or get busy",
  "You want systems that work quietly in the background",
  "You prefer simple tools over complicated enterprise software",
];
export   function WhoThisIsFor() {
  return (
    <section className="py-24 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Is this for you?</h2>
          <p className="text-gray-500 mt-4">If you resonate with these, we can help.</p>
        </div>

        {/* BENTO GRID */}
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          
          {/* Large Main Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layers size={120} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">You run operations-heavy companies</h3>
            <p className="text-gray-400 text-lg max-w-md">
              Factories or service businesses that move fast but struggle with data silos and manual handovers.
            </p>
            <div className="mt-10 flex items-center gap-4">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />)}
               </div>
               <span className="text-xs text-gray-500 font-mono tracking-widest uppercase italic">Operational Excellence</span>
            </div>
          </motion.div>

          {/* Vertical Highlight Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-emerald-500/10 border border-emerald-500/20 rounded-[2.5rem] p-8 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
              <Check className="text-emerald-400 w-6 h-6" />
            </div>
            <p className="text-emerald-100 font-medium text-xl leading-snug">
              Systems that work quietly in the background.
            </p>
          </motion.div>

          {/* Small Feature Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/[0.06] transition-colors"
          >
            <Zap className="text-blue-400 mb-4" />
            <p className="text-gray-300">Messy spreadsheets are replaced by unified dashboards.</p>
          </motion.div>

          {/* Call-to-Action Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-gradient-to-r from-purple-500/10 to-transparent border border-white/10 rounded-[2.5rem] p-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="hidden sm:block w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <MousePointer2 className="text-white/40" />
              </div>
              <p className="text-white text-lg">Stop things from slipping through the cracks.</p>
            </div>
           
          </motion.div>

        </div>

        <div className="mt-12 text-center">
           <p className="text-sm text-gray-500 italic font-mono">
             // A short conversation can save you 10+ hours a week.
           </p>
        </div>
      </div>
    </section>
  );
}