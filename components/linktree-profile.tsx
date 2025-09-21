"use client"

import { useState } from "react"
import { LinkCard } from "@/components/link-card"

interface Link {
  id: string
  title: string
  url: string
  description?: string
  icon?: string
}

export function LinkTreeProfile() {
  const [links] = useState<Link[]>([
    {
      id: "1",
      title: "Costco Student Membership",
      url: "https://www.studentbeans.com/en-ca/ca/beansid-connect/hosted/costco/student/fd367038-e8ef-4ee0-9912-d0d17e0e9632",
      description: "Special student pricing on membership",
      icon: "🛒",
    },
    {
      id: "2",
      title: "ChatGPT Student Discount",
      url: "https://help.openai.com/en/articles/10968654-student-discounts-for-chatgpt-plus-uscanada",
      description: "Discounted ChatGPT Plus for students",
      icon: "🤖",
    },
    {
      id: "3",
      title: "Amazon Prime Student",
      url: "https://www.amazon.ca/amazonprime?_encoding=UTF8&primeCampaignId=studentWlpPrimeRedirCA",
      description: "6-month free trial + discounted membership",
      icon: "📦",
    },
    {
      id: "4",
      title: "Spotify Premium Student",
      url: "https://www.spotify.com/ca/student/",
      description: "50% off Premium subscription",
      icon: "🎵",
    },
    {
      id: "5",
      title: "Apple Music Student",
      url: "https://www.apple.com/ca/apple-music/",
      description: "Student pricing for Apple Music",
      icon: "🍎",
    },
    {
      id: "6",
      title: "Rakuten Cashback",
      url: "https://www.rakuten.ca/",
      description: "Earn cashback on online purchases",
      icon: "💰",
    },
    {
      id: "7",
      title: "Amex Cobalt Card",
      url: "https://www.americanexpress.com/ca/en/credit-cards/cobalt-card/",
      description: "Student-friendly credit card perks",
      icon: "💳",
    },
    {
      id: "8",
      title: "Adobe Creative Cloud Student",
      url: "https://www.adobe.com/ca/creativecloud/buy/students.html",
      description: "60% off Creative Cloud subscription",
      icon: "🎨",
    },
    {
      id: "9",
      title: "GitHub Student Developer Pack",
      url: "https://education.github.com/pack",
      description: "Free developer tools and services",
      icon: "🐙",
    },
    {
      id: "10",
      title: "JetBrains Student License",
      url: "https://www.jetbrains.com/community/education/#students",
      description: "Free professional development tools",
      icon: "🔧",
    },
    {
      id: "11",
      title: "RBC Student Banking",
      url: "https://www.rbcroyalbank.com/bank-accounts/students/offers/index.html",
      description: "Free banking + AirPods promo",
      icon: "🏦",
    },
    {
      id: "12",
      title: "Notion for Education",
      url: "https://www.notion.com/product/notion-for-education",
      description: "Free Notion Pro for students",
      icon: "📝",
    },
    {
      id: "13",
      title: "Figma for Education",
      url: "https://www.figma.com/education/",
      description: "Free Figma Professional features",
      icon: "🎯",
    },
    {
      id: "14",
      title: "Autodesk Education Access",
      url: "https://www.autodesk.com/education/edu-software/overview",
      description: "Free access to professional software",
      icon: "🏗️",
    },
    {
      id: "15",
      title: "ProtonMail + ProtonVPN",
      url: "https://proton.me/student",
      description: "Student discounts on privacy tools",
      icon: "🔒",
    },
  ])

  return (
    <div className="dark min-h-screen bg-background relative">
      <div className="max-w-md mx-auto p-6 space-y-3">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} isEditMode={false} onDelete={() => {}} onEdit={() => {}} />
        ))}
      </div>

      <a
        href="https://fmhy.net"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-2xl border-2 border-yellow-300/50 hover:border-yellow-200/70"
        title="FMHY"
      >
        💎
      </a>
    </div>
  )
}
