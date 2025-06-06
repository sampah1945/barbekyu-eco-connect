
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Send, 
  Phone, 
  MapPin, 
  DollarSign,
  Image,
  Mic,
  Paperclip,
  Circle
} from "lucide-react";

interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: string;
  type: 'text' | 'offer' | 'image';
  isOwn: boolean;
}

interface Conversation {
  id: string;
  customerName: string;
  customerAvatar: string;
  wasteItem: string;
  status: 'online' | 'away' | 'offline';
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: ChatMessage[];
}

const sampleConversations: Conversation[] = [
  {
    id: "conv-001",
    customerName: "Ibu Sari",
    customerAvatar: "/placeholder.svg",
    wasteItem: "Elektronik 12kg",
    status: "online",
    lastMessage: "Apakah bisa diambil hari ini jam 3 sore?",
    lastMessageTime: "2 min lalu",
    unreadCount: 1,
    messages: [
      {
        id: "msg-001",
        senderId: "cust-002",
        senderName: "Ibu Sari",
        message: "Selamat siang pak, elektronik saya masih tersedia",
        timestamp: "10:30",
        type: "text",
        isOwn: false
      },
      {
        id: "msg-002", 
        senderId: "coll-001",
        senderName: "Budi Santoso",
        message: "Selamat siang bu, saya tertarik. Bisa lihat fotonya lagi?",
        timestamp: "10:32",
        type: "text",
        isOwn: true
      },
      {
        id: "msg-003",
        senderId: "cust-002", 
        senderName: "Ibu Sari",
        message: "Apakah bisa diambil hari ini jam 3 sore?",
        timestamp: "10:45",
        type: "text",
        isOwn: false
      }
    ]
  },
  {
    id: "conv-002",
    customerName: "Pak Budi",
    customerAvatar: "/placeholder.svg", 
    wasteItem: "Aki Bekas 6kg",
    status: "away",
    lastMessage: "Harga 75rb gimana pak?",
    lastMessageTime: "15 min",
    unreadCount: 0,
    messages: []
  },
  {
    id: "conv-003",
    customerName: "Mbak Tini",
    customerAvatar: "/placeholder.svg",
    wasteItem: "Kardus 20kg", 
    status: "offline",
    lastMessage: "Baik pak, deal ya. Besok jam 10 pagi",
    lastMessageTime: "1 jam lalu",
    unreadCount: 0,
    messages: []
  }
];

export function ChatSystem() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(sampleConversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const getStatusColor = (status: string) => {
    const colors = {
      online: "bg-green-500",
      away: "bg-yellow-500",
      offline: "bg-gray-400"
    };
    return colors[status as keyof typeof colors] || colors.offline;
  };

  const getStatusText = (status: string) => {
    const texts = {
      online: "Online",
      away: "Away", 
      offline: "Offline"
    };
    return texts[status as keyof typeof texts] || texts.offline;
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;
    
    // Add message logic here
    setNewMessage("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
      {/* Conversations List */}
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Active Conversations ({sampleConversations.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {sampleConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 cursor-pointer transition-colors border-b border-primary/10 hover:bg-primary/5 ${
                  selectedConversation?.id === conversation.id ? 'bg-primary/10' : ''
                }`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.customerAvatar} />
                      <AvatarFallback className="bg-gradient-eco text-white">
                        {conversation.customerName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <Circle className={`absolute -bottom-1 -right-1 h-4 w-4 ${getStatusColor(conversation.status)} rounded-full border-2 border-white`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm truncate">{conversation.customerName}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
                        {conversation.unreadCount > 0 && (
                          <Badge className="bg-accent text-white text-xs h-5 w-5 p-0 rounded-full flex items-center justify-center">
                            {conversation.unreadCount}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{conversation.wasteItem}</div>
                    <div className="text-xs text-muted-foreground truncate">{conversation.lastMessage}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Window */}
      <div className="lg:col-span-2 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <Card className="eco-card mb-4">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedConversation.customerAvatar} />
                        <AvatarFallback className="bg-gradient-eco text-white">
                          {selectedConversation.customerName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <Circle className={`absolute -bottom-1 -right-1 h-4 w-4 ${getStatusColor(selectedConversation.status)} rounded-full border-2 border-white`} />
                    </div>
                    <div>
                      <div className="font-medium">{selectedConversation.customerName}</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedConversation.wasteItem} • {getStatusText(selectedConversation.status)}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-primary/20">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary/20">
                      <MapPin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-gradient-eco text-white">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Quick Offer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Messages */}
            <Card className="eco-card flex-1 flex flex-col">
              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {selectedConversation.messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isOwn 
                          ? 'bg-gradient-eco text-white' 
                          : 'bg-white border border-primary/20'
                      }`}>
                        <div className="text-sm">{message.message}</div>
                        <div className={`text-xs mt-1 ${message.isOwn ? 'text-white/70' : 'text-muted-foreground'}`}>
                          {message.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t border-primary/10">
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-primary/20">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary/20">
                    <Image className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary/20">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Ketik pesan..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-gradient-eco text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* AI Assistant */}
                <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-xs font-medium text-blue-800">🤖 AI Chat Assistant:</div>
                  <div className="text-xs text-blue-700 mt-1">
                    "Suggested reply for {selectedConversation.customerName}: 'Baik bu, saya bisa ambil jam 3 sore. 
                    Lokasi di Jl. Raya Darmo no 123 ya? Terima kasih.'"
                  </div>
                  <Button size="sm" variant="outline" className="mt-2 text-xs h-6">
                    Use Suggestion
                  </Button>
                </div>
              </div>
            </Card>
          </>
        ) : (
          <Card className="eco-card flex-1 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MessageSquare className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Pilih percakapan untuk mulai chat</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
