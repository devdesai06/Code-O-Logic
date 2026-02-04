"use client";
import React, { useMemo } from 'react';
import { AbsoluteFill, useCurrentFrame, spring, interpolate } from 'remotion';
import { ChevronLeft, Phone, Video, Mic, CheckCheck, Paperclip, MoreVertical } from 'lucide-react';

const MESSAGES = [

  { startFrame: 10, role: 'user', message: "Hi, do you have sauces available right now?" },

  { startFrame: 80, role: 'bot', message: "Yes, sauces are available in stock." },

  { startFrame: 150, role: 'user', message: "Which types of sauces do you have?" },

  { startFrame: 230, role: 'bot', message: 
    "Currently, we have the following sauces:\n\n• Tomato Ketchup\n• Red Chilli Sauce\n• Soya Sauce\n• Green Chilli Sauce\n• Schezwan Sauce\n• Mayonnaise\n\nAll items are ready for dispatch."
  },

  { startFrame: 330, role: 'user', message: "Do you have Schezwan sauce?" },

  { startFrame: 410, role: 'bot', message: 
    "Yes, Schezwan sauce is available.\n\nPack sizes:\n• 500 ml\n• 1 kg\n\nLet me know the quantity you are looking for."
  },

  { startFrame: 520, role: 'user', message: "I need the 1 kg packs. How much stock is there?" },

  { startFrame: 610, role: 'bot', message: 
    "For Schezwan sauce (1 kg packs), current stock is:\n\n• Available: 240 units\n• Minimum order: 10 units\n\nStock is moving fast."
  },

  { startFrame: 720, role: 'user', message: "Okay. What about tomato ketchup?" },

  { startFrame: 800, role: 'bot', message: 
    "Tomato ketchup is available in multiple pack sizes:\n\n• 200 ml\n• 500 ml\n• 1 kg\n\nTotal available stock across all sizes: 1,150 units."
  },

];

export const WarehouseVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Calculate scrolling effect: as new messages appear, the container moves up
 const scrollY = interpolate(
  frame,
  [200, 400, 600, 800], // Increased frames to match later messages
  [0, -300, -600, -1000], // Increased negative offset to push old messages higher
  { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
);
  return (
    <AbsoluteFill className="bg-[#0b141a] font-sans">
      {/* 1. WHATSAPP HEADER */}
      <div className="absolute top-0 w-full bg-[#1f2c33] p-10 pt-24 flex items-center justify-between z-30 shadow-xl">
        <div className="flex items-center gap-5">
          <ChevronLeft size={45} className="text-[#00a884]" />
          <div className="w-16 h-16 rounded-full bg-[#607d8b] flex items-center justify-center text-3xl font-bold text-white shadow-lg">V</div>
          <div>
            <h2 className="text-3xl font-bold text-[#e9edef]"> Code O Logic's Whatsapp Chatbot</h2>
            <p className="text-xl text-[#00a884] font-medium">online</p>
          </div>
        </div>
        <div className="flex gap-10 text-[#aebac1] mr-4">
          <Video size={40} />
          <Phone size={40} />
          <MoreVertical size={40} />
        </div>
      </div>

      {/* 2. PERSISTENT CHAT AREA */}
      <AbsoluteFill className="px-6">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat" />
        
        <div 
          style={{ transform: `translateY(${scrollY}px)`, transition: 'transform 0.3s ease-out' }}
          className="pt-60 flex flex-col gap-6"
        >
          {MESSAGES.map((msg, i) => (
            <MessageBubble 
              key={i}
              role={msg.role}
              message={msg.message}
              startFrame={msg.startFrame}
              currentFrame={frame}
            />
          ))}
        </div>
      </AbsoluteFill>

      {/* 3. INPUT BAR */}
      <div className="absolute bottom-0 w-full bg-[#1f2c33] p-10 pb-20 flex items-center gap-6 z-30">
        <Paperclip size={40} className="text-[#aebac1] rotate-45" />
        <div className="flex-1 bg-[#2a3942] rounded-full p-6 text-[#8696a0] text-[2.4rem] px-10">Message</div>
        <div className="w-20 h-20 rounded-full bg-[#00a884] flex items-center justify-center shadow-2xl">
           <Mic size={40} className="text-white" />
        </div>
      </div>
    </AbsoluteFill>
  );
};

const MessageBubble = ({ role, message, startFrame, currentFrame }: any) => {
  const relativeFrame = currentFrame - startFrame;
  
  // If the frame hasn't reached the start time, don't show the bubble
  if (relativeFrame < 0) return null;

  const scale = spring({ 
    frame: relativeFrame, 
    fps: 30, 
    config: { damping: 12, stiffness: 100 } 
  });

  return (
    <div 
      style={{ transform: `scale(${scale})`, transformOrigin: role === 'user' ? 'right top' : 'left top' }}
      className={`relative p-7 rounded-[2.2rem] text-[2.8rem] leading-[1.15] max-w-[88%] shadow-lg transition-all ${
        role === 'user' 
          ? 'bg-[#005c4b] text-[#e9edef] self-end rounded-tr-none' 
          : 'bg-[#202c33] text-[#e9edef] self-start rounded-tl-none border border-white/5'
      }`}
    >
      <div className="whitespace-pre-wrap">{message}</div>
      <div className="flex items-center justify-end gap-2 mt-2">
        <span className="text-xl opacity-40">10:42 AM</span>
        {role === 'user' && <CheckCheck size={22} className="text-[#53bdeb]" />}
      </div>
      
      {/* WhatsApp Triangle Tail */}
      <div className={`absolute top-0 w-6 h-6 ${
        role === 'user' 
          ? 'bg-[#005c4b] -right-3 [clip-path:polygon(0_0,0_100%,100%_0)]' 
          : 'bg-[#202c33] -left-3 [clip-path:polygon(0_0,100%_0,100%_100%)]'
      }`} />
    </div>
  );
};