import { useMutation, useQueryClient } from "react-query";
import AuthService from "@/api/services/auth.service";

export const useIdentityQuery = () => {
    const queryClient = useQueryClient();

    const mutationKey = "login";
    const authService = new AuthService();

    const mutateLogin = useMutation(
        async ({ email, password }: any) => {
            console.log(email, "from");
            const obj = {
                email,
                password,
            };
            const response = await authService.identity(obj);
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

    return { mutateLogin };
};
