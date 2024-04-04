
console.log(Redux);
const WITHDORW_MANY="WITHDORW_MANY"
const DIPOSED_MONAY="DIPOSED_MONAY"
const GetAllProdact="GetAllProdact"
const AddProdact="AddProdact"
const WITHDORW_MAN=(amount)=>{
return{
type:WITHDORW_MANY,
payload:amount
}}
const DIPOSED_MONA=(amount)=>{
return{
type:DIPOSED_MONAY,
payload:amount
}}
const AddProdact1=(amount)=>{
return{
type:AddProdact,
payload:amount
}}

const GetAllProdact3=(amount)=>{
return{
type:GetAllProdact,
payload:amount
}
}

const GetAllProdact1=()=>{
return async(dispatch)=>{
const res=await fetch(`https://fakestoreapi.com/products`)
const data=await res.json()
console.log(data);
dispatch(GetAllProdact3(data))

}}
// ************************
const ReduserProdact=(state=[],action)=>{
switch(action.type){
case AddProdact:
return [...state,action.payload]
case GetAllProdact:
return state
default :
return state
}}
// ***********************
const ReduserBank=(state=1000,action)=>{
switch(action.type){
case WITHDORW_MANY:
return state-action.payload
case DIPOSED_MONAY:
return state+action.payload
default:
return state
}}
const APPReduser=Redux.combineReducers({
prodact:ReduserProdact,
Bank:ReduserBank
})
const Store=Redux.createStore(APPReduser,Redux.applyMiddleware(ReduxThunk))
let value=document.querySelector(".value").innerHTML=Store.getState().Bank;
let InputValue=document.querySelector("input");
document.querySelector(".WithDrow").addEventListener("click",()=>{
    Store.dispatch(WITHDORW_MAN((InputValue.value*1)))
})
document.querySelector(".Diposed").addEventListener("click",()=>{
    Store.dispatch(DIPOSED_MONA((InputValue.value*1)))
})
Store.subscribe(()=>{
   document.querySelector(".value").innerHTML=Store.getState().Bank;

})







7