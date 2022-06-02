import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = () => {

        const [open, setOpen] = useState(false);
        const [value, setValue] = useState(null);
        const [items, setItems] = useState([
            {label: 'Apple', value: 'apple'},
            {label: 'Banana', value: 'banana'}
    ]);

    return(      
    <DropDownPicker
        style={{
            borderColor: "#E17E01",
            borderRadius: 10,
            width: "100%" ,

 
        }}  

            placeholder="Tous"
            placeholderStyle={{
            color: "grey",
            fontWeight: "#B3B1B1"
            }}
            showArrowIcon={true}
  
            arrowIconStyle={{
            color: "#B3B1B1" 
            }}
            dropDownDirection="TOP"
            min={0}
            max={5}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />)



}




export default Dropdown