import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Advisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I am your virtual thesis advisor for the Manabo Flood Risk study. Ask me about the FRI, specific barangay risks, or recommendations." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Which barangay is at highest risk?",
    "Why is Sto. Tomas vulnerable?",
    "What are the recommended countermeasures?",
    "Explain the Flood Risk Index formula."
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(text);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[700px] w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-4 flex items-center space-x-3 shadow-md z-10">
        <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
            <Bot className="text-blue-100 w-6 h-6" />
        </div>
        <div>
            <h2 className="text-white font-bold text-lg">Manabo Risk Advisor</h2>
            <p className="text-blue-200 text-xs">Powered by Gemini 2.5 Flash</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
            <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
              <div className={`p-2 rounded-full shadow-sm flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-orange-500'}`}>
                {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
              </div>
              <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm flex items-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
              <span className="text-xs text-gray-500 font-medium">Analyzing thesis data...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions & Input Area */}
      <div className="bg-white border-t border-gray-100 flex flex-col">
        {messages.length < 3 && !isLoading && (
          <div className="px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar bg-gray-50/50 border-b border-gray-100">
            {suggestions.map((s, i) => (
              <button 
                key={i} 
                onClick={() => handleSend(s)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blue-100 hover:border-blue-300 text-blue-700 text-xs rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap"
              >
                <Sparkles className="w-3 h-3" />
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="p-4">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-3 border border-transparent focus-within:ring-2 focus-within:ring-blue-500 focus-within:bg-white focus-within:border-blue-200 transition-all shadow-inner">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about high risk barangays, recommendations..."
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400"
              disabled={isLoading}
            />
            <button 
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-95 shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;