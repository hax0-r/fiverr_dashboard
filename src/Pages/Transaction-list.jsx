import React from 'react'
import BookingCard from '@/components/DashBoard/BookingCard'
import BookingTable from '@/components/Transaction/BookingTable'
import { Button } from '@/components/ui/button'
import { DollarSign } from 'lucide-react'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'

const TransactionList = () => {



  return (
    <>

      <div className="animate-myFadeIn">
        <div className="gap-4 items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <BookingCard title="Booked (Cash)" icon={DollarSign} count={100} />
          <BookingCard title="Waiting Confirmation" icon={DollarSign} count={21} />
          <BookingCard title="Paid" icon={DollarSign} count={321} />
        </div>
        <div className="mt-7 flex justify-end items-center gap-4 ">
          <Button className="flex items-center gap-2 bg-transparent border-[1.5px] py-5 border-blue text-blue  font-semibold hover:bg-[#fafafa] "><PiMicrosoftExcelLogoFill className='text-blue text-xl' />Export Data</Button>
          <Button className="flex items-center gap-2 bg-blue border-[1.5px] py-5 border-blue hover:text-blue text-white   hover:bg-transparent ">Add Payment</Button>
        </div>
        <div className="mt-3">
          <BookingTable />
        </div>
      </div>
    </>
  )
}

export default TransactionList