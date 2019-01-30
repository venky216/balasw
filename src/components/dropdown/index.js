import React from 'react'
import { ListItems, DropdownLabel,ListItem, StyledButton, DropdownArrow } from './Wrapper';
const DropdownComponent = (props) => {
    const handleChange = (item)=>{
        console.log(item)
        props.itemChanger(item)
    }
    const dropdownClicked =(e)=>{
        props.dropdownClicked(e)
    }

    return (
        <DropdownLabel>
            {console.log(props)}
            <StyledButton onClick= {dropdownClicked}>{props.dropdownDetails.dropdownName} 
            <DropdownArrow />
            </StyledButton>
            <ListItems dropdownShow = {props.dropdownShow}>
                {props.dropdownDetails.listItems.map((item)=>{
                    return <ListItem onClick={()=> handleChange(item) } key={item.key}>{item.itemLabel}</ListItem>
                })}
            </ListItems>
        </DropdownLabel>
    )
}

export default DropdownComponent