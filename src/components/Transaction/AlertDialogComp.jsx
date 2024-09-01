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
import { Toaster } from "@/components/ui/toaster"
import ToastWithTitle from './ToastWithTitle'


const AlertDialogComp = ({ btn1, desc, head, dialog, onConfirm, className }) => {
    return (
        <>
            <div className="">
                <Toaster>
                </Toaster>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" className={className}>{dialog}</Button>
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
                            <AlertDialogAction className="px-0" onClick={onConfirm}>
                                {/* {btn1} */}
                                <ToastWithTitle btn1={btn1} />
                            </AlertDialogAction>

                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </>
    )
}

export default AlertDialogComp;
