import React from 'react'
import { Input } from "@/components/ui/input"; // shadcn Input component
import { Label } from "@/components/ui/label"; // shadcn Label component
import { Checkbox } from "@/components/ui/checkbox"; // shadcn Checkbox component
import { Button } from "@/components/ui/button"; // shadcn Button component
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // shadcn Card components
import { Textarea } from "@/components/ui/textarea"; // shadcn Textarea component
import { CirclePlus, Trash2 } from 'lucide-react';


const Setting = () => {
  return (
    <>
      <div className="">
        <div className="">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Method</CardTitle>
              <CardDescription>
                This is the payment method that can be applied for tenant
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              {/* Cash Payment Option */}
              <div className="flex items-center gap-2 mt-3">
                <Checkbox id="cash" />
                <Label htmlFor="cash" className="font-semibold">Cash</Label>
              </div>
              <div>
                <div className="mt-3">
                  <Label htmlFor="notes" className="font-semibold ">Notes</Label>
                  <Textarea id="notes" placeholder="Input notes here" className="mt-2 resize-none placeholder:text-zinc-400" />
                </div>
              </div>

              {/* Bank Transfer Payment Option */}
              <div className="flex items-center gap-2 mt-8">
                <Checkbox id="bank-transfer" />
                <Label htmlFor="bank-transfer" className="font-semibold">Bank Transfer</Label>
              </div>
              <div className="w-full">
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {/* Bank Name */}
                  <div>
                    <Label className="font-semibold" htmlFor="bank-name">Bank</Label>
                    <Input id="bank-name" placeholder="Input Bank Name" className="mt-1" />
                  </div>
                  {/* Account Name */}
                  <div>
                    <Label className="font-semibold" htmlFor="account-name">Account Name</Label>
                    <Input id="account-name" placeholder="Input Account Name" className="mt-1" />
                  </div>
                  {/* Account Number */}
                  <div>
                    <Label className="font-semibold" htmlFor="account-number">Account Number</Label>
                    <Input id="account-number" placeholder="ex 088788272882" className="mt-1" />
                  </div>
                  {/* File Upload */}
                  <div>
                    <Label className="font-semibold" htmlFor="upload-logo">Upload Logo (.png/.jpg)</Label>
                    <Input type="file" id="upload-logo" className="mt-1" />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {/* Bank Name */}
                  <div>
                    <Label className="font-semibold" htmlFor="bank-name">Bank</Label>
                    <Input id="bank-name" placeholder="Input Bank Name" className="mt-1" />
                  </div>
                  {/* Account Name */}
                  <div>
                    <Label className="font-semibold" htmlFor="account-name">Account Name</Label>
                    <Input id="account-name" placeholder="Input Account Name" className="mt-1" />
                  </div>
                  {/* Account Number */}
                  <div>
                    <Label className="font-semibold" htmlFor="account-number">Account Number</Label>
                    <Input id="account-number" placeholder="ex 088788272882" className="mt-1" />
                  </div>
                  {/* File Upload */}
                  <div>
                    <Label className="font-semibold" htmlFor="upload-logo">Upload Logo (.png/.jpg)</Label>
                    <div className="flex items-center gap-3">
                      <Input type="file" id="upload-logo" className="mt-1" />
                      <Trash2 className='text-red-500 border-2 border-red-500 rounded-full w-12 h-10 p-[6px]' />
                    </div>
                  </div>

                </div>
                {/* Add More Bank Button */}
                <Button variant="link" className="mt-4 text-blue hover:underline flex items-center gap-1">
                  <CirclePlus className="w-5 h-5 text-blue" />
                  Add more bank
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Setting