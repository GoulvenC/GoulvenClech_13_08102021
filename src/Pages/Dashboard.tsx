import React from "react"
import Hero from "../Components/User/HeroUser"
import Accounts from "../Components/User/Accounts"

export default function DashboardPage() {
  return (
    <main className="main bg-dark">
      <Hero />
      <Accounts />
    </main>
  )
}