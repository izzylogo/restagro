<template>
  <div class="relative min-h-[80dvh] md:min-h-screen py-[30px] px-[5px] md:px-[20px]">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-green-200/50 to-white/20"></div>
    <div class="absolute bottom-[0]">
      <img src="../../assets/images/Frame.png" />
    </div>
    <div
      class="relative z-[100] h-[100%] p-[20px] md:p-[50px] md:max-w-[60%] max-w-[100%] flex flex-col faq !pt-[60px]"
    >
      <div class="flex-1">
        <h1
          class="text-[38px]/[35px] md:text-[50px]/[45px] md:max-w-[90%] max-w-[100%] !font-bold text-center !mb-[20px] text-green-900"
        >
          Frequently Asked Questions
        </h1>
      </div>
      <div class="flex-1">
        <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
          <AccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
            class="p-[10px] !mb-[10px] bg-green-600/30 border-none rounded-xl backdrop-filter-[30px]"
          >
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    title: "What is the YES Programme 2.0?",
    content:
      "It's an initiative by the Bank of Industry (BOI) to support young Nigerians with funding, training, and mentorship to grow their businesses.",
  },
  {
    value: "item-2",
    title: "Who can apply?",
    content:
      "Young Nigerians aged 18–35 with a business idea or an existing small business can apply.",
  },
  {
    value: "item-3",
    title: "How do I apply for the program?",
    content:
      'Click the "Apply Now" button on this website, fill out the online form, and submit your application.',
  },
  {
    value: "item-4",
    title: "What kind of support will I get?",
    content:
      "You'll receive business training, funding for your business, and ongoing support to help your business succeed.",
  },
  {
    value: "item-5",
    title: "Is there a deadline for applications?",
    content:
      'Yes, each application cycle has a deadline. Check the "Apply Now" section for the current date.',
  },
];
</script>

<style scoped>
.faq {
  margin: 0px auto !important;
}
</style>
