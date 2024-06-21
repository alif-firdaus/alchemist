"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/app/_action";

import { useToast } from "../ui/use-toast";

// Import Icons //
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(ContactFormSchema),
	});

	const { toast } = useToast();

	const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
		const result = await sendEmail(data);

		if (result?.success) {
			console.log({ data: result.data });
			toast({
				description: "Your message has been sent!",
			});
			reset();
			return;
		}

		// Toast Error //
		toast({
			description: "Something went wrong!",
		});
		console.log(result?.error);
	};

	return (
		<div className="w-full">
			<form
				onSubmit={handleSubmit(processForm)}
				className="flex flex-col gap-[18px]"
			>
				{/* <-- === Name Input Start === --> */}
				<div>
					<input
						type="text"
						placeholder="Your name"
						required
						autoComplete="off"
						{...register("name")}
						className="rounded-[10px] lg:rounded-lg w-full px-5 pt-[15px] lg:pt-4 pb-[17px] lg:pb-[18px] text-base placeholder-grey text-white bg-white bg-opacity-[0.02] focus:outline-none border border-white border-opacity-10 focus:border-opacity-30"
					/>
					{errors.name?.message && (
						<p className="ml-1 mt-1 text-sm text-red-400">
							{errors.name.message}
						</p>
					)}
				</div>
				{/* <-- === Name Input End === --> */}

				{/* <-- === Email Input Start === --> */}
				<div>
					<input
						type="email"
						placeholder="Your email"
						required
						autoComplete="off"
						{...register("email")}
						className="rounded-[10px] lg:rounded-lg w-full px-5 pt-[15px] lg:pt-4 pb-[17px] lg:pb-[18px] text-base placeholder-grey text-white bg-white bg-opacity-[0.02] focus:outline-none border border-white border-opacity-10 focus:border-opacity-30"
					/>
					{errors.email?.message && (
						<p className="ml-1 mt-2 text-sm text-red-400">
							{errors.email.message}
						</p>
					)}
				</div>
				{/* <-- === Email Input End === --> */}

				{/* <-- === Phone Number Input Start === --> */}
				<div>
					<input
						type="tel"
						placeholder="Phone Number (optional)"
						autoComplete="off"
						{...register("phone")}
						className="rounded-[10px] lg:rounded-lg w-full px-5 pt-[15px] lg:pt-4 pb-[17px] lg:pb-[18px] text-base font-number placeholder-grey text-white bg-white bg-opacity-[0.02] focus:outline-none border border-white border-opacity-10 focus:border-opacity-30"
					/>
				</div>
				{/* <-- === Phone Number Input End === --> */}

				{/* <-- === Message Start === --> */}
				<div>
					<textarea
						placeholder="How can I help you?"
						required
						autoComplete="off"
						rows={4}
						{...register("message")}
						className="rounded-[10px] lg:rounded-lg w-full px-5 pt-[15px] lg:pt-4 pb-[17px] lg:pb-[18px] text-base placeholder-grey text-white bg-white bg-opacity-[0.02] focus:outline-none border border-white border-opacity-10 focus:border-opacity-30"
					/>
					{errors.message?.message && (
						<p className="ml-1 mt-2 text-sm text-red-400">
							{errors.message.message}
						</p>
					)}
				</div>
				{/* <-- === Message End === --> */}

				<button type="submit" className="group flex mt-1 w-fit">
					<div className="bg-primary flex w-fit items-center justify-center pt-[11px] pb-[13px] lg:pt-[14px] lg:pb-4 rounded-full px-6 lg:px-7 lg:group-hover:bg-[#6431F5] lg:duration-300 text-base text-white leading-none">
						{isSubmitting ? "Wait a sec..." : "Send message"}
					</div>
					<div className="bg-primary items-center justify-center -ml-[2px] lg:-ml-[6px] lg:group-hover:ml-0 pt-[11px] pb-[13px] lg:pt-[14px] lg:pb-4 px-3 lg:px-4 rounded-full lg:group-hover:bg-[#6431F5] lg:duration-300">
						<ArrowTopRightIcon className="h-4 w-4 text-white lg:group-hover:rotate-45 lg:duration-300" />
					</div>
				</button>
			</form>
		</div>
	);
}
