const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELITEM" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;

        default: return state;
        break;

        
    }
}

// projects

 const addProject = [];

 export const addProjects = (state = addProject, action) => {
    switch (action.type) {
        case "ADDPROJECT" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELPROJECT" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;

        default: return state;
        break;

        
    }
}

export default addItems
