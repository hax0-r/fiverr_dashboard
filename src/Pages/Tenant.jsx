import React from 'react'
import { Button } from '@/components/ui/button'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'
import BookingTableTenant from '@/components/Tenant/BookingTableTenant'
import AddTenant from '@/components/Tenant/AddTenant'
const Tenant = () => {
  return (
    <>
      <div className="">
        <div className="animate-myFadeIn">
          <div className="flex justify-end items-center gap-4 ">
            <Button className="flex items-center gap-2 bg-transparent border-[1.5px] py-5 border-blue text-blue  font-semibold hover:bg-[#fafafa] "><PiMicrosoftExcelLogoFill className='text-blue text-xl' />Export Data</Button>
            <AddTenant />
          </div>
          <div className="mt-3">
            <BookingTableTenant />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tenant