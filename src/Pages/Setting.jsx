import React, { useState } from 'react';
import { Input } from "@/components/ui/input"; // shadcn Input component
import { Label } from "@/components/ui/label"; // shadcn Label component
import { Checkbox } from "@/components/ui/checkbox"; // shadcn Checkbox component
import { Button } from "@/components/ui/button"; // shadcn Button component
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // shadcn Card components
import { Textarea } from "@/components/ui/textarea"; // shadcn Textarea component
import { CirclePlus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PiTrash } from 'react-icons/pi';

const Setting = () => {
  const [banks, setBanks] = useState([{ id: 1, bankName: '', accountName: '', accountNumber: '', logo: null }]);

  // Function to handle adding a new bank
  const handleAddBank = () => {
    setBanks([...banks, { id: Date.now(), bankName: '', accountName: '', accountNumber: '', logo: null }]);
  };

  // Function to handle removing a bank
  const handleRemoveBank = (id) => {
    setBanks(banks.filter((bank) => bank.id !== id));
  };

  return (
    <>
      <div className="flex justify-start items-start gap-5">
        <div className="">
          <Card className="w-64 min-h-[79vh]">
            <CardContent className="p-2">
              <nav className="flex flex-col gap-2">
                {/* Active Item */}
                <Link variant="ghost" className="justify-start hover:bg-[#eff6ff] bg-[#eff6ff] p-[10px] rounded-md transition-all font-medium text-left bg-blue-100">
                  Payment Method
                </Link>
                {/* Inactive Items */}
                <Link variant="ghost" className="justify-start hover:bg-[#eff6ff] p-[10px] rounded-md transition-all font-medium text-left">
                  Property Type
                </Link>
                <Link variant="ghost" className="justify-start hover:bg-[#eff6ff] p-[10px] rounded-md transition-all font-medium text-left">
                  Facilities
                </Link>
                <Link variant="ghost" className="justify-start hover:bg-[#eff6ff] p-[10px] rounded-md transition-all font-medium text-left">
                  Rent Duration
                </Link>
                <Link variant="ghost" className="justify-start hover:bg-[#eff6ff] p-[10px] rounded-md transition-all font-medium text-left">
                  Room Settings
                </Link>
                <Link variant="ghost" className="justify-start hover:bg-[#eff6ff] p-[10px] rounded-md transition-all font-medium text-left">
                  Invoice
                </Link>
                <Link variant="ghost" className="justify-start hover:bg-[#eff6ff] p-[10px] rounded-md transition-all font-medium text-left">
                  Business
                </Link>
              </nav>
            </CardContent>
          </Card>
        </div>
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

              {banks.map((bank, index) => (
                <div key={bank.id} className="w-full animate-myFadeIn">
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {/* Bank Name */}
                    <div>
                      <Label className="font-semibold" htmlFor={`bank-name-${bank.id}`}>Bank</Label>
                      <Input id={`bank-name-${bank.id}`} placeholder="Input Bank Name" className="mt-1" />
                    </div>
                    {/* Account Name */}
                    <div>
                      <Label className="font-semibold" htmlFor={`account-name-${bank.id}`}>Account Name</Label>
                      <Input id={`account-name-${bank.id}`} placeholder="Input Account Name" className="mt-1" />
                    </div>
                    {/* Account Number */}
                    <div>
                      <Label className="font-semibold" htmlFor={`account-number-${bank.id}`}>Account Number</Label>
                      <Input id={`account-number-${bank.id}`} placeholder="ex 088788272882" className="mt-1" />
                    </div>
                    {/* File Upload */}
                    <div>
                      <Label className="font-semibold" htmlFor={`upload-logo-${bank.id}`}>Upload Logo (.png/.jpg)</Label>
                      <div className="flex items-center gap-3">
                        <Input type="file" id={`upload-logo-${bank.id}`} className="mt-1" />
                        {
                          banks.length > 1 &&
                          <div className=" border-[1.4px] border-[#FF0000] p-[6px] hover:bg-red-50 transition-all rounded-full cursor-pointer"
                          onClick={() => handleRemoveBank(bank.id)}>
                            <PiTrash
                              className='text-[#FF0000] text-lg'
                            />
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add More Bank Button */}
              <Button
                variant="link"
                className="mt-4 text-blue hover:underline flex items-center gap-1"
                onClick={handleAddBank}
              >
                <CirclePlus className="w-5 h-5 text-blue" />
                Add more bank
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Setting;
