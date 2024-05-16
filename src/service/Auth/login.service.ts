import axios from "axios";
import type {FieldValues} from "react-hook-form";

const loginService = async (inputs: FieldValues) => {
    try{
        const response = await axios.post("api/auth/login", inputs)
        console.log(response)
        return response
    }catch(err:any){
        console.log(err)
        return err?.response
    }
}
export default loginService