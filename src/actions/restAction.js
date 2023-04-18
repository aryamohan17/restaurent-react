import axios from "axios";
import { SUCCESS,FAIL } from "../constants/restuarentConstants";

export const restList = () => async (dispatch) => {
    //   const result = await  axios.get('/restaurants.json')
    //   console.log(result.data.restuarents);

    //   another way
    try {
        const { data } = await axios.get('/restaurants.json')
        // console.log(data.restuarents);
        dispatch({
            payload:data.restaurants,
            type:SUCCESS
        })
    }
    catch(error) {
        dispatch(
            {
                payload:error,
                type:FAIL
            }
        )
    }


}