import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

const Toaster = ({ toastOptions, ...props }) => {
  const { theme = "system" } = useTheme()

  const mergedToastOptions = {
    ...(toastOptions || {}),
    classNames: {
      toast:
        "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
      description: "group-[.toast]:text-muted-foreground",
      actionButton:
        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
      cancelButton:
        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      ...(toastOptions?.classNames || {}),
    },
  }

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={mergedToastOptions}
      {...props}
    />
  );
}

export { Toaster, toast }
