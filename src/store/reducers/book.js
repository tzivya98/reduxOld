const myInitialState={
    arr:[
        {id:1,name:"book1",code:105,price:62,author:"Michael Shir",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVXGKj1oWNoNaiK6m0RtQ14dfZAsw4Nm11g&usqp=CAU"},
        {id:2,name:"book2",code:107,price:80,author:"Gal choen",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVXGKj1oWNoNaiK6m0RtQ14dfZAsw4Nm11g&usqp=CAU"},
        {id:3,name:"book3",code:109,price:50,author:"Yuni Levi",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVXGKj1oWNoNaiK6m0RtQ14dfZAsw4Nm11g&usqp=CAU"}
    ],
    selectedBook:null,
    selectedBookForEdit:null,
    
}

export const bookReducer=(state=myInitialState,action)=>
{
    switch(action.type){
        case "ADD_BOOK":
            return{
                selectedBook:state.selectedBook,
                selectedBookForEdit:state.selectedBookForEdit,
                arr:[...state.arr,action.payload]
            }
        case "SELECT_BOOK":
            return{
                selectedBook:action.payload,
                selectedBookForEdit:state.selectedBookForEdit,
                arr:state.arr
            }
        case "SELECT_BOOK_FOR_EDIT" :
            return{
                arr:state.arr,
                selectedBook:state.selectedBook,
                selectedBookForEdit:action.payload
            } 
        case "DELETE_BOOK" :
            return{
                selectedBook:!state.selectedBook||
                state.selectedBook.id==action.payload?null:state.selectedBook,
                selectedBookForEdit:!state.selectedBookForEdit||
                state.selectedBookForEdit.id==action.payload?null:state.selectedBookForEdit,
                arr:state.arr.filter(item=>item.id!=action.payload)
            } 
        case "SAVE_CHANGES":
            let copy=state.arr.map(item=>{
                if(item.id!==action.payload.id)
                    return item;
                return action.payload;
            })  
           
            return{
                
                selectedBook:state.selectedBook,
                selectedBookForEdit:null,
                arr:copy
            } 
            default:return state;        
    }
}