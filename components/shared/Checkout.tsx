"use client";
import { IEvent } from "@/lib/database/models/event.model";
import { Button } from "../ui/button";
import { v4 as uuidv4 } from "uuid";
// import { loadStripe } from "@stripe/stripe-js";
// import { useEffect } from "react";
import { checkoutOrder, createOrder } from "@/lib/actions/order.actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { redirect, useRouter } from "next/navigation";

// loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout({
  event,
  userId,
}: {
  event: IEvent;
  userId: string;
}) {
  const router = useRouter();
  // useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);
  //   if (query.get("success")) {
  //     console.log("Order placed! You will receive an email confirmation.");
  //   }

  //   if (query.get("canceled")) {
  //     console.log(
  //       "Order canceled -- continue to shop around and checkout when you’re ready."
  //     );
  //   }
  // }, []);

  const onCheckout = async () => {
    //{stripe
    //  const order = {
    //   eventTitle: event.title,
    //   eventId: event._id,
    //   price: event.price,
    //   isFree: event.isFree,
    //   buyerId: userId,
    // };
    // await checkoutOrder(order);}
    const order = {
      stripeId: uuidv4(),
      eventId: event._id,
      buyerId: userId,
      totalAmount: event.price,
      createdAt: new Date(),
    };
    const ordercreated = await createOrder(order);
    if (ordercreated) {
      router.push("/profile");
    }
  };

  return (
    <AlertDialog>
      {/* <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500"> */}
      <AlertDialogTrigger className="rounded-full h-[54px] p-regular-16 sm:w-fit transform transition-all ease-in-out duration-300 hover:scale-110 bg-primary-500 text-white px-4 py-2 sm:px-6 sm:py-3">
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </AlertDialogTrigger>
      {/* </AlertDialogTrigger> */}
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to proceed?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onCheckout()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
