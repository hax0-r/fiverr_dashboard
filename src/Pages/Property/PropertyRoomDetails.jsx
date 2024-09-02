import { PROPERTY_DATA } from '@/assets/Property/PropertyData'
import { ROOM_LIST } from '@/assets/Property/RoomList'
import { BOOKING } from '@/assets/Transactionlist'
import AssignRoom from '@/components/Transaction/AssignRoom'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'
import { PiPencilSimpleLine } from 'react-icons/pi'
import { Link, useParams } from 'react-router-dom'

const tenants = [
  {
    id: 1,
    name: "Ahmad Farhan",
    tenantId: "18810076",
    dateOfBirth: "20 July 2000",
    gender: "Male",
    phoneNumber: "+60145678901",
    email: "ahmad.farhan@gmail.com",
    emergencyContact: "+60145678933",
    rentalDuration: "6 Month",
    checkIn: "22 July 2024",
    checkOut: "12 Januari 2024",
    paymentStatus: "Paid",
  },
  {
    id: 2,
    name: "Sara Tan",
    tenantId: "18810077",
    dateOfBirth: "15 August 1999",
    gender: "Female",
    phoneNumber: "+60123456789",
    email: "sara.tan@gmail.com",
    emergencyContact: "+60123456780",
    rentalDuration: "3 Month",
    checkIn: "01 August 2024",
    checkOut: "01 November 2024",
    paymentStatus: "Pending",
  },
  {
    id: 3,
    name: "John Doe",
    tenantId: "18810078",
    dateOfBirth: "05 May 1998",
    gender: "Male",
    phoneNumber: "+60156789012",
    email: "john.doe@gmail.com",
    emergencyContact: "+60156789013",
    rentalDuration: "12 Month",
    checkIn: "15 July 2024",
    checkOut: "15 July 2025",
    paymentStatus: "Paid",
  },
];


const PropertyRoomDetails = () => {
  const { id } = useParams()

  let filterData = PROPERTY_DATA.filter((item) => item.id === parseInt(id))
  const [data] = filterData

  let filterData2 = ROOM_LIST.filter((item) => item.id === parseInt(id))
  const [roomListData] = filterData2

  return (
    <div>
      <div className="animate-myFadeIn">
        <div className="flex justify-between items-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/property" className='text-muted-foreground'>Property List</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="scale-150 mx-1" />
              <BreadcrumbItem>
                <Link to={`/property/${id}`} className='text-muted-foreground'>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                  </DropdownMenu>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="scale-150 mx-1" />
              <BreadcrumbItem>
                <Link to="/property/add-property" className='text-muted-foreground'>Single</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="scale-150 mx-1" />
              <BreadcrumbItem>
                <Link to="/property/add-property" className='text-blue'>101</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button className="bg-transparent text-red-600 border-red-600 hover:bg-red-50 border-2 ">Set As Maintenance</Button>
        </div>
        <Card className="p-4 mt-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 ">
              <h2 className='text-xl font-semibold'>{roomListData.ids}</h2>
              <PiPencilSimpleLine className='text-[#0BB1CB] text-2xl cursor-pointer' />
              <p className='bg-[#FFF1CC] text-[#B48200] p-2 px-3 rounded-lg'>Single</p>
            </div>
            <p className='bg-[#FFF1CC] text-[#B48200] border-[#B48200] p-2 px-5 rounded-lg border-[1.5px]'>Occupied</p>
          </div>
          <p className='text-sm text-[#6E6E6E]'>IDs {roomListData.ids}</p>
          <div className="mt-2 flex gap-5">
            <p className=' text-[#6E6E6E]'>&#x2022; &nbsp;1st Floor </p>
            <p className=' text-[#6E6E6E]'>&#x2022; &nbsp;Block H1</p>
            <p className=' text-[#6E6E6E]'>&#x2022; &nbsp;Male</p>
          </div>
        </Card>

        <div className="mt-7">
          <h2 className='text-xl font-semibold'>Tenant Details ({roomListData.tenant})</h2>
          <div className="mt-3">
            <div className=" grid grid-cols-2 gap-3">
              {
                tenants.map((data, idx) => (
                  <div key={data.id} className="border rounded-lg p-4 shadow-sm">
                    <h2 className="font-semibold text-xl mb-4">Tenant {data.id}</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[#1D1D1D] font-medium text-sm">Name</p>
                        <p className="mb-3 font-semibold">{data.name}</p>
                        <p className="text-[#1D1D1D] font-medium text-sm">ID</p>
                        <p className="mb-3 font-semibold">{data.tenantId}</p>
                        <p className="text-[#1D1D1D] font-medium text-sm">Date of Birth</p>
                        <p className="mb-3 font-semibold">{data.dateOfBirth}</p>
                        <p className="text-[#1D1D1D] font-medium text-sm">Rental Duration</p>
                        <p className="mb-3 font-semibold">{data.rentalDuration}</p>
                        <p className="text-[#6E6E6E] font-medium text-sm">Check In</p>
                        <p className="mb-3 font-semibold">{data.checkIn}</p>
                        <p className="text-[#6E6E6E] font-medium text-sm">Payment Status</p>
                        <p className='my-3'>
                          <span
                            className={`${data.paymentStatus === "Paid"
                              ? "bg-green-100 text-green-600 border-green-600"
                              : "bg-red-100 text-red-600 border-red-600"
                              } px-4 py-2 rounded-lg font-medium border-2`}
                          >
                            {data.paymentStatus}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-[#1D1D1D] font-medium text-sm">Gender</p>
                        <p className="mb-3 font-semibold">{data.gender}</p>
                        <p className="text-[#1D1D1D] font-medium text-sm">Phone Number</p>
                        <p className="mb-3 font-semibold">{data.phoneNumber}</p>
                        <p className="text-[#1D1D1D] font-medium text-sm">Email</p>
                        <p className="mb-3 font-semibold">{data.email}</p>
                        <p className="text-[#1D1D1D] font-medium text-sm">Emergency Contact</p>
                        <p className="mb-3 font-semibold">{data.emergencyContact}</p>
                        <p className="text-[#6E6E6E] font-medium text-sm">Check Out</p>
                        <p className="mb-3 font-semibold">{data.checkOut}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Button className="bg-transparent text-red-600 border-red-600 hover:bg-red-50 border-2 px-4 py-2 rounded-lg">
                        Remove
                      </Button>
                      <AssignRoom booking={BOOKING} btnName={"Transfer"} />
                    </div>
                  </div>
                ))
              }

              <div className="border rounded-lg p-4">
                <h2 className="font-semibold text-xl mb-4">Tenant {tenants.length + 1}</h2>
                <div className="flex items-center justify-center h-[90%]">
                  <img src="/Assets/Property/RoomDetails/endImg.png" alt="end" className='h-[14rem]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyRoomDetails