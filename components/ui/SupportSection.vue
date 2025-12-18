<template>
 <section :class="[bgColor, 'py-16 text-white']">
  <div class="container mx-auto px-6 text-center">
   <h2 class="text-3xl mb-4">{{ title }}</h2>
   <p class="text-lg mb-8 max-w-2xl mx-auto" :class="textColor">
    {{ description }}
   </p>
   <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <!-- Custom buttons if provided -->
    <template v-if="buttons && buttons.length > 0">
     <Button
      v-for="(button, index) in buttons"
      :key="index"
      :to="button.link"
      :variant="button.variant === 'primary' ? 'solid' : 'outline'"
      :color="getButtonColor(button.variant)"
      size="lg"
     >
      {{ button.text }}
     </Button>
    </template>

    <!-- Default email and phone buttons if no custom buttons -->
    <template v-else>
     <Button
      :to="`mailto:${email}`"
      variant="solid"
      :color="getButtonColor('primary')"
      size="lg"
      leadingIcon="i-lucide-mail"
     >
      {{ emailText }}
     </Button>
     <Button
      :to="`tel:${phone.replace(/[^0-9]/g, '')}`"
      variant="outline"
      :color="getButtonColor('secondary')"
      size="lg"
      leadingIcon="i-lucide-phone"
     >
      {{ phone }}
     </Button>
    </template>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
interface Button {
 text: string;
 link: string;
 variant: "primary" | "secondary";
}

interface Props {
 title?: string;
 description?: string;
 email?: string;
 emailText?: string;
 phone?: string;
 variant?: "gray" | "emerald" | "blue" | "purple" | "green" | "red";
 buttons?: Button[];
}

const props = withDefaults(defineProps<Props>(), {
 title: "Need Help?",
 description:
  "Our support team is here to help you make the most of your GSBOR membership",
 email: "support@gsbor.com",
 emailText: "Email Support",
 phone: "(417) 883-1226",
 variant: "gray",
});

const bgColor = computed(() => {
 const variants = {
  gray: "bg-gray-900",
  emerald: "bg-emerald-600",
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  green: "bg-green-600",
  red: "bg-red-600",
 };
 return variants[props.variant];
});

const textColor = computed(() => {
 const variants = {
  gray: "text-gray-300",
  emerald: "text-emerald-100",
  blue: "text-blue-100",
  purple: "text-purple-100",
  green: "text-green-100",
  red: "text-red-100",
 };
 return variants[props.variant];
});

function getButtonColor(buttonVariant: "primary" | "secondary") {
 // For primary buttons, use white on colored backgrounds, or the section color on gray
 if (buttonVariant === "primary") {
  return props.variant === "gray" ? "emerald" : "white";
 }

 // For secondary buttons, use a complementary color scheme
 const colorMap = {
  gray: "gray",
  emerald: "white",
  blue: "white",
  purple: "white",
  green: "white", // Map green to emerald for consistency
  red: "gray", // Use gray for red variant secondary buttons
 };

 return colorMap[props.variant];
}
</script>
