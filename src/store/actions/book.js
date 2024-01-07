export const addBook=(book)=>{
    return{
        type:"ADD_BOOK",
        payload:book
    }
}

export const deleteBook=(bookId)=>{
    return{
        type:"DELETE_BOOK",
        payload:bookId
    }
}

export const selectBook=(book)=>{
    return{
        type:"SELECT_BOOK",
        payload:book  
    }
}

export const selectBookForEdit=(book)=>{
    return{
        type:"SELECT_BOOK_FOR_EDIT",
        payload:book  
    }
}

export const saveChanges=(book)=>{
    return{
        type:"SAVE_CHANGES",
        payload:book  
    }
}