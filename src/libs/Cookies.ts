export default function clearAllCookies(): void {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=; Max-Age=-99999999; path=/`; // Clear cookie
    }
}
