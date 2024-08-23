import { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const Navigation=({data})=>{

    const moveUpwards=(index)=>{
        if(index === 0) return;
        const newItems=[...locations];
        let temp=newItems[index];
        newItems[index]=newItems[index-1];
        newItems[index -1]=temp;
        setLocations(newItems);
    }
    const moveDownwards=(index)=>{
        if(index === (locations.length-1)) return;
        const newItems=[...locations];
        let temp=newItems[index];
        newItems[index]=newItems[index+1];
        newItems[index +1]=temp;
        setLocations(newItems);

    }

    const [locations, setLocations]=useState(data);
    return (
        <div style={{width:"50%"}}>
            {
                locations.map((location,index)=>(
                    <div style={ { 
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between"
                    }} 
                        key={index}
                    >
                        <p>{location}</p>
                        <div>
                        { index !== 0 && <FaAngleDoubleUp onClick={()=>moveUpwards(index)}/>}
                        { index !== locations.length-1 && <FaAngleDoubleDown onClick={()=>moveDownwards(index)}/>}
                        
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Navigation;