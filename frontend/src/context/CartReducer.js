const cartReducers = (state, action) => {
    const {type, payload} = action

    const getQty = (cart) => {
        const qty = cart.reduce((acc, total) => {
            return acc + Number(total.qty)
        }, 0)
        return qty
    }

     
    switch (type) {
        case 'ADD' :
            console.log(payload)
            if(state.cart && state.cart.some((el) => el._id === payload.item._id)){
                state.cart.forEach((el) => {
                    if(el._id === payload.item._id) {
                        el.qty = payload.qty
                    }
                })
            }else{
                state.cart.push({ ...payload.item, qty: payload.qty })
            }  
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return({cart: state.cart, qty: getQty(state.cart)}) 

            case 'DELETE':
                const resultado = state.cart.filter((el) => el._id !== payload)
                localStorage.setItem('cart', JSON.stringify(resultado))
                return({
                    cart: resultado, 
                    qty: getQty(resultado)
                })
            case 'CLEAN':
                return {cart: [], qty: 0}    
            case 'RECOVER':
               const carro = localStorage.getItem('cart') 
               return{
                cart: JSON.parse(carro) || []
               }
               
        default:
            return state
    }

}

export default cartReducers