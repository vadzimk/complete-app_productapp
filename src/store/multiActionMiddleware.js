export function multiActions({dispatch, getState}){
    //it is a function that returns another function
    //when registered in data store it receives an object with dispatch and getState methods
    //data store can use multiple middleware components; actions are passed from one to the next in the chain and then they are passed to the data store's dispatch method.
    //the purpose of the multiActions function is to return a function that will be invoked once the middleware chain has been assembled and that provides the next middleware in the chain.

    return function receiveNext(next){

        return function processAction(action){ //the innermost function is invoked when the action has been dispatched to the data store

            if(Array.isArray(action)){
                action.forEach(a=>next(a));
            } else {
                next(action);
            }
        }

    }

}