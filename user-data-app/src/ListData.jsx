import React from 'react';
import {DisplayData} from './DisplayData.jsx';
const ListItem = (value)=>{
    let iteratedObject = [];
    const obj = value;
   
    const iterateObj = (obj)=>{
        for(let o in obj){
            if(typeof obj[o] === "object"){
                iterateObj(obj[o]);
                
            }else{
                iteratedObject.push( 
                    obj[o]    
                );
            }
        }
    }  
    iterateObj(obj);    
    return iteratedObject;
}
export const ListData = (props)=>{
    const userData = props.userData;
    let iteratedData = [];
    let headings = ["ID","NAME","USERNAME", "EMAIL","STREET","SUITE","CITY","ZIPCODE","LATITUDE","LONGITUDE","PHONE","WEBSITE","COMPANY-NAME","CATCHPHRASE","BUSSINESS"];
     
    for(let i in userData){
        iteratedData.push(ListItem(userData[i]));      
    }
    console.log(iteratedData);
    return(
        <DisplayData data = {iteratedData} headings = {headings} /> 
    );
}
