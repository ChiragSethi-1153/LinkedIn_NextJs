import axios from "axios";
import type {FieldValues} from "react-hook-form";

const registerService = async (inputs: FieldValues) => {
    try{
        const response = await axios.post("api/auth/register", inputs)
        return response
    }catch(err:any){
        console.log(err)
        return err?.response
    }
}
export default registerService