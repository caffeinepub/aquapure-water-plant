import { useMutation } from "@tanstack/react-query";
import { Product } from "../backend";
import { useActor } from "./useActor";

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(name, email, phone, message);
    },
  });
}

export function useSubmitOrderInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      product,
      quantity,
      message,
    }: {
      name: string;
      phone: string;
      product: Product;
      quantity: bigint;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitOrderInquiry(name, phone, product, quantity, message);
    },
  });
}

export { Product };
