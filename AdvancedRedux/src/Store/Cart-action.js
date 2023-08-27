import { cartAction } from "./cart";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(cartAction.notification({
            status: 'Pending',
            title: 'sending',
            message: 'Seding reqeust...'
        }));

        const sendCartData = async () => {
            const response = await fetch('https://react-food-ordering-ff3f4-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                })

            if (!response.ok) {
                throw new Error("sending request failed")
            }
            //const responseData = await response.json();

            dispatch(cartAction.notification({
                status: 'success',
                title: 'Suceess',
                message: 'Sent a data successfully'
            }))
        };

        try {
            await sendCartData();
        } catch (error) {
            dispatch(cartAction.notification({
                status: 'error',
                title: 'Error',
                message: 'Sending a data failed'
            }))
        }

    };
};
