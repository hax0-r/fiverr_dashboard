import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React, { useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import { PLACES } from '@/assets/Home/Places'
import { PROPERTY } from '@/assets/Home/Property'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { CountrySelector } from '@/components/Tenant/CountrySelector'

const TenantInformation = () => {
  const { placeName, subCardId } = useParams()

  let filterData = PLACES.filter((item) => item.id === parseInt(subCardId))
  let filterData2 = PROPERTY.filter((item) => item.id === parseInt(subCardId))

  const [room] = filterData
  const [room2] = filterData2

  // State to track selected gender, default is 'Male'
  const [selectedGender, setSelectedGender] = useState('Male')

  const handleGenderClick = (gender) => {
    setSelectedGender(gender)
  }

  return (
    <div>
      <div className="bg-blue p-5 pt-10">
        <div className="container flex items-center gap-4">
          <Link to={"/home"}>
            <FaArrowLeftLong className="bg-[#5082ef] p-3 text-5xl rounded-full text-white" />
          </Link>
          <h1 className="text-2xl font-medium text-white">Tenant Information</h1>
        </div>
      </div>

      <div className="bg-[#eff6ff]">
        <div className="max-w-[960px] mx-auto p-4 min-h-[85vh] bg-white">
          <Card className="overflow-hidden border-none shadow-none">
            <div className="">
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label className="font-semibold text-[#696969]" htmlFor="">ID (ID Student/IC/Passport)</Label>
                  <Input id="" placeholder="Enter Id" className="mt-1" />
                </div>
                <div>
                  <Label className="font-semibold text-[#696969]" htmlFor="">Name</Label>
                  <Input id="" placeholder="Enter Name" className="mt-1" />
                </div>
              </div>
            </div>
            <div className="">
              <h2 className='font-semibold text-lg mt-6'>Date of Birth</h2>
              <div className="grid grid-cols-3 gap-4 mt-1">
                <div>
                  <Label className="font-semibold text-[#696969]" htmlFor="">Day</Label>
                  <Input id="" placeholder="Enter Day" className="mt-1" />
                </div>
                <div>
                  <Label className="font-semibold text-[#696969]" htmlFor="">Month</Label>
                  <Input id="" placeholder="Enter Month" className="mt-1" />
                </div>
                <div>
                  <Label className="font-semibold text-[#696969]" htmlFor="">Year</Label>
                  <Input id="" placeholder="Enter Year" className="mt-1" />
                </div>
              </div>
            </div>

            <div className="">
              <h2 className='font-medium mt-8'>Gender</h2>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <Button
                  onClick={() => handleGenderClick('Male')}
                  className={`py-6 hover:bg- border-[1.5px] ${selectedGender === 'Male'
                    ? 'bg-[#eff6ff] text-blue border-blue'
                    : 'bg-transparent  border-zinc-200 text-zinc-600'
                    }`}
                >
                  Male
                </Button>
                <Button
                  onClick={() => handleGenderClick('Female')}
                  className={`py-6 hover:bg- border-[1.5px] ${selectedGender === 'Female'
                    ? 'bg-[#eff6ff] text-blue border-blue'
                    : 'bg-transparent  border-zinc-200 text-zinc-600'
                    }`}
                >
                  Female
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-3 gap-4 mt-1">
                <div>
                  <Label className="font-semibold text-[#696969]" htmlFor="">Email</Label>
                  <Input id="" placeholder="azri.razali@gmail.com" className="mt-1" />
                </div>
                <div>
                  <Label className="font-semibold text-[#696969]" htmlFor="">Phone Number</Label>
                  <div className="flex items-center mt-1">
                    <CountrySelector />
                    <Input type="text" id="phone" defaultValue="31245678" className="rounded-none" />
                  </div>
                </div>
                <div>
                  <Label className="font-semibold text-[#696969]" htmlFor="">Emergency Contact</Label>
                  <div className="flex items-center mt-1">
                    <CountrySelector />
                    <Input type="text" id="phone" defaultValue="31245678" className="rounded-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-12"></div>

            <div className="fixed bottom-0 max-w-[944px] mx-auto py-4 pr-4 bg-white  w-full">
              <div className="">
                <Link to={`payment-detail`}>
                  <Button className="bg-[#2463EB] mt-4 w-full justify-center hover:bg-darkBlue text-white flex items-center tracking-wide gap-2 px-4 py-7 rounded-full text-[1rem]">
                    Go to Payment
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TenantInformation
