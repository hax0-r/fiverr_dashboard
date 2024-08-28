import React from 'react'
import { Input } from "@/components/ui/input"; // Assuming you're using shadcn's Input component
import { Label } from "@/components/ui/label"; // Assuming you're using shadcn's Label component
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn's Button component
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Assuming you're using shadcn's Card components


const Account = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-7 animate-myFadeIn">
        <div className="">
          <Card className="min-h-[79vh]">
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription className="pt-1 pb-6">
                Update your account settings. Set your preferred language and timezone.
              </CardDescription>
            <div className="h-[1.5px] w-full bg-[#E4E4E7]"></div>
            </CardHeader>
            <CardContent>
              {/* Name Field */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="name" className="font-semibold">Name</Label>
                <Input id="name" type="text" placeholder="Admin" className="bg-gray-50" />
                <p className="text-sm text-gray-500">
                  This is the name that will be displayed on your profile and in emails.
                </p>
              </div>

              {/* Email Field */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="email" className="font-semibold">Email</Label>
                <Input id="email" type="email" placeholder="admin@gmail.com" className="bg-gray-50" />
                <p className="text-sm text-gray-500">
                  Email that used for the account.
                </p>
              </div>

              {/* Update Account Button */}
              <Button className="bg-blue hover:bg-darkBlue  text-white">
                Update account
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="">
          <Card className="min-h-[79vh]">
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription className="pt-1 pb-6">
              To change your password please confirm here
              </CardDescription>
            <div className="h-[1.5px] w-full bg-[#E4E4E7]"></div>
            </CardHeader>
            <CardContent>
              {/* Name Field */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="name" className="font-semibold">Current Password</Label>
                <Input id="name" type="text" placeholder="Current Password" className="bg-gray-50" />
              </div>

              {/* Password Field */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="password" className="font-semibold">New Password</Label>
                <Input id="password" type="password" placeholder="New Password" className="bg-gray-50" />
              </div>

              {/* Password Field */}
              <div className="space-y-2 mb-6">
                <Label htmlFor="password" className="font-semibold">Confirm Password</Label>
                <Input id="password" type="password" placeholder="Confirm Password" className="bg-gray-50" />
              </div>

              {/* Update Account Button */}
              <Button className="bg-blue text-white hover:bg-darkBlue ">
              Change Password
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Account