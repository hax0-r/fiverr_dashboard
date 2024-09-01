import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function ToastWithTitle({ btn1 }) {
    const { toast } = useToast()

    return (
        <Button
            className="border-2 border-blue bg-blue text-white hover:bg-white hover:text-blue"
            onClick={() => {
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                })
            }}
        >
            {btn1}
        </Button>
    )
}

export default ToastWithTitle