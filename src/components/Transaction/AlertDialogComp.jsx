import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const AlertDialogComp = ({btn1,desc,head,dialog, onConfirm}) => {
    return (
        <>
            <div className="">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" className="border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue">{dialog}</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>{head}</AlertDialogTitle>
                            <AlertDialogDescription>
                                {desc}
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Back</AlertDialogCancel>
                            <AlertDialogAction className="border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue" onClick={onConfirm}>{btn1}</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </>
    )
}

export default AlertDialogComp;
