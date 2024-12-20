export const getGreeting = (): string => {
    const currentHour = new Date().getHours();


    if (currentHour >= 12 && currentHour < 12) {
        return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
        return "Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 24) {
        return "Good Evening";
    } else {
        return "Good Morning";

    }
};
