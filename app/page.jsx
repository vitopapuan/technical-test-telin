import AllExpenses from "@/components/AllExpenses"
import QuickInvoice from "@/components/QuickInvoice"
import MyCard from "@/components/MyCard"

export default async function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-2 gap-8 justify-between p-8">
      <div className="flex flex-col gap-8">
        <AllExpenses />
        <QuickInvoice />
      </div>
      <MyCard />
    </main>
  )
}
