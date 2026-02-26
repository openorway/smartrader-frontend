 import * as React from "react"
 import { Slot } from "@radix-ui/react-slot"
 import { cva, type VariantProps } from "class-variance-authority"
 
 import { cn } from "@/lib/utils"
 
 const buttonVariants = cva(
   "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
   {
     variants: {
       variant: {
         default: "rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
         destructive: "rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90",
         outline: "rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground",
         secondary: "rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80",
         ghost: "rounded-lg hover:bg-accent hover:text-accent-foreground",
         link: "text-secondary-blue underline-offset-4 hover:underline",
         "ghl-primary": "rounded-full bg-[#ffb902] text-[#07223D] font-bold shadow-accent hover:bg-[#e5a702] hover:shadow-lg",
         "ghl-secondary": "rounded-full bg-[#188bf6] text-white font-semibold hover:bg-[#1571a8]",
         "ghl-outline": "rounded-full border-2 border-[#188bf6] text-[#188bf6] bg-transparent hover:bg-[#188bf6] hover:text-white",
         "ghl-white": "rounded-full bg-white text-[#07223D] font-semibold hover:bg-gray-100 shadow-md",
       },
       size: {
         default: "h-10 px-4 py-2",
         sm: "h-9 px-4 text-sm",
         lg: "h-12 px-8 text-base",
         xl: "h-14 px-10 text-lg",
         icon: "h-10 w-10",
       },
     },
     defaultVariants: {
       variant: "default",
       size: "default",
     },
   }
 )
 
 export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
     VariantProps<typeof buttonVariants> {
   asChild?: boolean
 }
 
 const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
     const Comp = asChild ? Slot : "button"
     return (
       <Comp
         className={cn(buttonVariants({ variant, size, className }))}
         ref={ref}
         {...props}
       />
     )
   }
 )
 Button.displayName = "Button"
 
 export { Button, buttonVariants }