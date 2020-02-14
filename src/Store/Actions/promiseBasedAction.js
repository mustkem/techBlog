// import axios from 'axios'


export const testAction = (data) => (dispatch) => (
    new Promise(((resolve, reject) => {
        console.log("test", dispatch)
        resolve()
    }))
);


