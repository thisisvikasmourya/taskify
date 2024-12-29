import { useMutation, useQueryClient } from "react-query";
import RegisterService from "@/api/services/register.service";
import Register from "@/api/models/register";

export const useRegisterQuery = () => {
    const queryClient = useQueryClient();

    const mutationKey = "register";
    const registerService = new RegisterService();

    const mutateRegister = useMutation(
        async ({ name, email, phoneNumber, password, termsAccepted }: any) => {
            console.log(name,"from");
            const obj = {
                name,
                email,
                phoneNumber,
                password,
                termsAccepted,
            };

            const response = await registerService.create(obj);
            return response;
        },
        {
            mutationKey,
            onSuccess: () => {
                queryClient.invalidateQueries("register");
                console.info("User registered successfully");
            },
            // Other mutation options
        },
    );

    return { mutateRegister };
};
