'use client'

import { Button } from "./ui/button";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function CateringSection() {
    const [accordionValue, setAccordionValue] = useState<string>('');

    return (
        <div className="border-2 mt-32 lg:mt-20 flex flex-col w-full items-center justify-center py-20 px-10 lg:px-20 bg-theme text-black dark:text-white" id="catering">
            <h2 className="aladin-regular text-start text-9xl font-medium mb-5 pb-4 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
                Private Events
            </h2>
            <p className="text-xl font-medium text-center mb-2">We offer catering for all events. From weddings to corporate events, we have you covered.</p>
            <p className="text-lg font-light text-center mb-6 ">We&apos;ve put together some of the more frequently asked questions regarding catering below.</p>
            
            <div className="flex flex-col mt-6 lg:flex-row items-center lg:items-start lg:justify-between w-full">
                <Image
                    src="/menu/tabboulehcatering.jpeg"
                    alt="tabbouleh catering"
                    width={300}
                    height={300}
                    className="mb-6 w-[40rem] h-[20rem] lg:mb-0 lg:w-1/2 xl:w-3/7 lg:h-auto object-cover rounded-3xl"
                />
               <Accordion
                    type="single"
                    value={accordionValue}
                    onValueChange={setAccordionValue}
                    className="w-full lg:w-1/2 lg:ml-6"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <h3 className="text-lg">How far in advance should I book catering for my event?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-lg">We recommend booking catering services for your event as far in advance as possible to ensure availability. We can accommodate last-minute requests, but we recommend booking at least two weeks in advance for most events.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <h3 className="text-lg">What types of events do you cater?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-lg">We cater a wide variety of events, including weddings, corporate events, birthday parties, and more. Our catering team can work with you to create a customized menu that fits your event&apos;s needs and preferences.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <h3 className="text-lg">Do you offer delivery for catering orders?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-lg">Yes, we offer delivery for catering orders. Delivery fees may apply depending on the size and location of your event. Please contact us for more information on delivery options for your event.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <h3 className="text-lg">What if I need to cancel my event or catering request?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-lg">If you need to cancel your event or catering request, please contact us as soon as possible. Cancellation policies may vary depending on the specifics of your event, so we recommend reaching out to discuss your situation in detail.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <h3 className="text-lg">Is there a minimum food and drink purchase required?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-lg">Yes, there is a minimum food and drink purchase required for catering services. The minimum amount depends on the size and type of your event. Please contact us for more details on our minimum purchase requirements.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            <h3 className="text-lg">Will I be able to order from the full menu for my event?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-lg">We offer a wide variety of menu options for catering events, but the full menu may not be available for every event. Our catering team will work with you to create a customized menu that fits your needs and preferences. Please contact us to discuss your options.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            <h3 className="text-lg">Do you provide staff for the event?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-lg">Yes, we can provide staff for your event. Our staff can assist with serving food, setting up, and cleaning up after the event. Please let us know your specific needs when you contact us.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            <h3 className="text-lg">Can you accommodate dietary restrictions?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-lg">Yes, we can accommodate various dietary restrictions, including vegetarian, vegan, gluten-free, and more. Please inform us of any dietary restrictions when you contact us so we can tailor the menu to meet your needs.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                
            </div>
            <div className="flex flex-col justify-center items-center mt-10 space-x-6">
            <Image
                src= "/arrowdown2.svg"
                alt="Down arrow"
                width={50}
                height={100}
                className="dark:invert mb-10 pb-4 rotate-45"
            />
            <h3 className="text-3xl xl:text-4xl font-medium pb-4 mx-10 lg:mx-20">
                Ready to book catering for your event?
            </h3>
            <Link href="tel:tel:770-926-3446">
                <Button className="px-14 py-6 mt-4 text-lg hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary">Contact Us</Button>
            </Link>

            </div>
        </div>
    )
}
