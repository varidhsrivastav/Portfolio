export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

export const addProject = (project)=>{
    return{
        type:"ADDPROJECT",
        payload:project
    }
}
export const delProject = (project) => {
    return {
        type : "DELPROJECT",
        payload : project
    }
}