

let init=[]
export const AddToCartReducer =(state=init,action)=>{

    switch(action.type){
        case "AddToCart":
       return [...state,action.payload]
    }
}