import React from 'react';
function GetHead(props){
    const heads = props.head;    
    return <th className = "table-primary">{heads}</th>;
}
function GetItem(props){
    const value = props.value;
    return <td>{value}</td>;
}
function GetRow(props){
    const value = props.value;
    const head = props.headings;
    let headArray = [];
    let itemArray = [];
    for(let i in head){
        headArray.push(<GetHead head = {head[i]}/>);
    }
    for(let i in value){
        itemArray.push(<GetItem value = {value[i]}/>);
    }
    return(
        <div>
            <tr>
                {headArray}
            </tr>
            <tr>
                {itemArray}
            </tr>
        </div>
    );
}
export const DisplayData = (props)=>{
    const headings = props.headings;
    const data = props.data;
    let table = [];
    for(let i in data){
        table.push(<GetRow value = {data[i]} headings = {headings}/>);            
    }
    return(
        <table>
            {table} 
         </table>
    );
}