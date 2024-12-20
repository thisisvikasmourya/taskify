import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request, res: Response){
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; 
    const postData = await req.json();
    const { getRecpatchToken } = postData;

    const formData = `secret=${secretKey}&response=${getRecpatchToken}`; 

    try {
        const response = await axios.post("https://www.google.com/recaptcha/api/siteverify", 
            formData,
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
            });
        console.log(response);
        if(response.data?.success && response.data?.score > 0.5){ // Check for truthy values
            console.log("Score: " + response.data?.score);
            return NextResponse.json({ success: true, score: response.data?.score });
        } else {
            return NextResponse.json({ success: false});
        }
    } catch (err) {
        console.error("Error during reCAPTCHA verification:", err); // Log error for debugging
        return NextResponse.json({ success: false, error: "Error during reCAPTCHA verification" });
    }
}
