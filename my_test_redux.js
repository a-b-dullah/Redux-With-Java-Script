console.log($redux);
const store=$redux.CreateStore()
console.log(store); 
console.log(store.getState());

const BankReduser=(state=1000,action)=>{
    switch(action.type){
    case WithDrow:
    return state-action.payload
    case Diposed:
    return state+action.payload
    default:
    return state
    }}
    const Store=$redux.CreateStore(BankReduser)